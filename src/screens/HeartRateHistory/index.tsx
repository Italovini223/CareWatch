import { ArrowLeft, Calendar } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Container,
  PageHeader,
  HeaderInner,
  BackButton,
  BackButtonText,
  PageTitle,
  DateRow,
  DateText,
  Content,
  ChartCard,
  CardTitle,
  StatsGrid,
  StatItem,
  StatItemLabel,
  StatItemValue,
  ReadingsList,
  ReadingItem,
  ReadingInfo,
  ReadingValue,
  ReadingTime,
  ReadingActivity,
  StatusBadge,
  RefCard,
  RefTitle,
  RefList,
  RefItem,
  RefDot,
  RefText,
  ZonesCard,
  ZoneItem,
  ZoneRow,
  ZoneLabel,
  ZonePercent,
  ProgressTrack,
  ProgressBar,
} from './styles';

const mockData = [
  { time: '00:00', bpm: 68 },
  { time: '03:00', bpm: 65 },
  { time: '06:00', bpm: 70 },
  { time: '09:00', bpm: 78 },
  { time: '12:00', bpm: 82 },
  { time: '15:00', bpm: 85 },
  { time: '18:00', bpm: 76 },
  { time: '21:00', bpm: 72 },
];

const readings = [
  { time: '21:30', bpm: 72, status: 'normal', activity: 'Repouso' },
  { time: '18:45', bpm: 76, status: 'normal', activity: 'Caminhada leve' },
  { time: '15:20', bpm: 85, status: 'warning', activity: 'Atividade moderada' },
  { time: '12:10', bpm: 82, status: 'normal', activity: 'Pós-almoço' },
  { time: '09:00', bpm: 78, status: 'normal', activity: 'Matinal' },
  { time: '06:30', bpm: 70, status: 'normal', activity: 'Despertar' },
];

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'normal': return 'Normal';
    case 'warning': return 'Atenção';
    case 'danger': return 'Crítico';
    default: return 'Desconhecido';
  }
};

export function HeartRateHistory() {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <PageHeader>
        <HeaderInner>
          <BackButton onPress={() => navigation.navigate('Dashboard')}>
            <ArrowLeft size={20} color="white" />
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
          <PageTitle>Batimentos Cardíacos</PageTitle>
          <DateRow>
            <Calendar size={16} color="#fce7f3" />
            <DateText>
              {new Date().toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </DateText>
          </DateRow>
        </HeaderInner>
      </PageHeader>

      <Content>
        <ChartCard>
          <CardTitle>Histórico do Dia</CardTitle>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={mockData}>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" style={{ fontSize: '12px' }} />
              <YAxis style={{ fontSize: '12px' }} domain={[50, 100]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="bpm"
                stroke="#ef4444"
                fill="url(#colorBpm)"
                strokeWidth={2}
                name="BPM"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <StatsGrid>
          <StatItem>
            <StatItemLabel>Média</StatItemLabel>
            <StatItemValue>74 bpm</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Mínima</StatItemLabel>
            <StatItemValue $color="#2563EB">65 bpm</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Máxima</StatItemLabel>
            <StatItemValue $color="#DC2626">85 bpm</StatItemValue>
          </StatItem>
        </StatsGrid>

        <ReadingsList>
          <CardTitle>Todas as Medições</CardTitle>
          {readings.map((reading, index) => (
            <ReadingItem key={index}>
              <ReadingInfo>
                <ReadingValue>{reading.bpm} bpm</ReadingValue>
                <ReadingTime>{reading.time}</ReadingTime>
                <ReadingActivity>{reading.activity}</ReadingActivity>
              </ReadingInfo>
              <StatusBadge $status={reading.status}>
                {getStatusLabel(reading.status)}
              </StatusBadge>
            </ReadingItem>
          ))}
        </ReadingsList>

        <RefCard>
          <RefTitle>Valores de Referência (Repouso)</RefTitle>
          <RefList>
            <RefItem>
              <RefDot $color="#22c55e" />
              <RefText>Normal: 60-90 bpm</RefText>
            </RefItem>
            <RefItem>
              <RefDot $color="#eab308" />
              <RefText>Atenção: 90-100 bpm ou {'<'} 60 bpm</RefText>
            </RefItem>
            <RefItem>
              <RefDot $color="#ef4444" />
              <RefText>Crítico: {'>'} 100 bpm ou {'<'} 50 bpm</RefText>
            </RefItem>
          </RefList>
        </RefCard>

        <ZonesCard>
          <CardTitle>Zonas de Frequência Cardíaca</CardTitle>
          <ZoneItem>
            <ZoneRow>
              <ZoneLabel>Repouso</ZoneLabel>
              <ZonePercent>68% do tempo</ZonePercent>
            </ZoneRow>
            <ProgressTrack>
              <ProgressBar $width="68%" $color="#22c55e" />
            </ProgressTrack>
          </ZoneItem>
          <ZoneItem>
            <ZoneRow>
              <ZoneLabel>Atividade Leve</ZoneLabel>
              <ZonePercent>25% do tempo</ZonePercent>
            </ZoneRow>
            <ProgressTrack>
              <ProgressBar $width="25%" $color="#3b82f6" />
            </ProgressTrack>
          </ZoneItem>
          <ZoneItem>
            <ZoneRow>
              <ZoneLabel>Atividade Moderada</ZoneLabel>
              <ZonePercent>7% do tempo</ZonePercent>
            </ZoneRow>
            <ProgressTrack>
              <ProgressBar $width="7%" $color="#eab308" />
            </ProgressTrack>
          </ZoneItem>
        </ZonesCard>
      </Content>


    </Container>
  );
}
