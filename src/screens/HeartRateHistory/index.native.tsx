import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';
import { ArrowLeft, Calendar } from 'lucide-react-native';
import { Navigation, NAV_HEIGHT } from '../../components/Navigation';
import {
  Screen,
  PageHeader,
  HeaderInner,
  BackButton,
  BackButtonText,
  PageTitle,
  DateRow,
  DateText,
  Content,
  Card,
  CardTitle,
  StatsRow,
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
} from './styles.native';

const readings = [
  { time: '21:30', bpm: 72, status: 'normal', activity: 'Repouso' },
  { time: '18:45', bpm: 76, status: 'normal', activity: 'Caminhada leve' },
  { time: '15:20', bpm: 85, status: 'warning', activity: 'Atividade moderada' },
  { time: '12:10', bpm: 82, status: 'normal', activity: 'Pós-almoço' },
  { time: '09:00', bpm: 78, status: 'normal', activity: 'Matinal' },
  { time: '06:30', bpm: 70, status: 'normal', activity: 'Despertar' },
];

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

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'normal':
      return 'Normal';
    case 'warning':
      return 'Atenção';
    case 'danger':
      return 'Crítico';
    default:
      return 'Desconhecido';
  }
};

export function HeartRateHistory() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const chartWidth = Dimensions.get('window').width - 32;
  const chartData = {
    labels: mockData.map((item) => item.time),
    datasets: [
      {
        data: mockData.map((item) => item.bpm),
        color: () => '#ef4444',
        strokeWidth: 2,
      },
    ],
  };

  return (
    <Screen contentContainerStyle={{ paddingBottom: NAV_HEIGHT + insets.bottom }}>
      <PageHeader $topInset={insets.top}>
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
        <Card>
          <CardTitle>Histórico do Dia</CardTitle>
          <LineChart
            data={chartData}
            width={chartWidth}
            height={220}
            withDots={false}
            withInnerLines
            withOuterLines={false}
            chartConfig={{
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(239, 68, 68, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(100, 116, 139, ${opacity})`,
              fillShadowGradient: '#ef4444',
              fillShadowGradientOpacity: 0.25,
              propsForBackgroundLines: {
                strokeDasharray: '3 3',
              },
            }}
            bezier
          />
        </Card>

        <StatsRow>
          <StatItem>
            <StatItemLabel>Média</StatItemLabel>
            <StatItemValue>74 bpm</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Mínima</StatItemLabel>
            <StatItemValue $color="#2563EB">65 bpm</StatItemValue>
          </StatItem>
          <StatItem $isLast>
            <StatItemLabel>Máxima</StatItemLabel>
            <StatItemValue $color="#DC2626">85 bpm</StatItemValue>
          </StatItem>
        </StatsRow>

        <ReadingsList>
          <CardTitle>Todas as Medições</CardTitle>
          {readings.map((reading, index) => (
            <ReadingItem key={index} $isLast={index === readings.length - 1}>
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
              <ProgressBar $width="7%" $color="#f59e0b" />
            </ProgressTrack>
          </ZoneItem>
        </ZonesCard>
      </Content>

      <Navigation />
    </Screen>
  );
}
