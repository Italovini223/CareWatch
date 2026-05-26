import { ArrowLeft, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Navigation } from '../../components/Navigation';
import { PrototypeMenu } from '../../components/PrototypeMenu';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
  StatusBadge,
  RefCard,
  RefTitle,
  RefList,
  RefItem,
  RefDot,
  RefText,
} from './styles';

const mockData = [
  { time: '00:00', systolic: 118, diastolic: 78 },
  { time: '03:00', systolic: 115, diastolic: 76 },
  { time: '06:00', systolic: 122, diastolic: 82 },
  { time: '09:00', systolic: 128, diastolic: 85 },
  { time: '12:00', systolic: 125, diastolic: 83 },
  { time: '15:00', systolic: 130, diastolic: 86 },
  { time: '18:00', systolic: 127, diastolic: 84 },
  { time: '21:00', systolic: 120, diastolic: 80 },
];

const readings = [
  { time: '21:30', systolic: 122, diastolic: 81, status: 'normal' },
  { time: '18:45', systolic: 127, diastolic: 84, status: 'normal' },
  { time: '15:20', systolic: 130, diastolic: 86, status: 'warning' },
  { time: '12:10', systolic: 125, diastolic: 83, status: 'normal' },
  { time: '09:00', systolic: 128, diastolic: 85, status: 'normal' },
  { time: '06:30', systolic: 122, diastolic: 82, status: 'normal' },
];

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'normal': return 'Normal';
    case 'warning': return 'Atenção';
    case 'danger': return 'Crítico';
    default: return 'Desconhecido';
  }
};

export function BloodPressureHistory() {
  const navigate = useNavigate();

  return (
    <Container>
      <PageHeader>
        <HeaderInner>
          <BackButton onPress={() => navigate('/')}>
            <ArrowLeft size={20} color="white" />
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
          <PageTitle>Pressão Sanguínea</PageTitle>
          <DateRow>
            <Calendar size={16} color="rgba(219, 234, 254, 1)" />
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
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" style={{ fontSize: '12px' }} />
              <YAxis style={{ fontSize: '12px' }} domain={[60, 150]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#ef4444"
                name="Sistólica"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#3b82f6"
                name="Diastólica"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <StatsGrid>
          <StatItem>
            <StatItemLabel>Média</StatItemLabel>
            <StatItemValue>124/82</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Mínima</StatItemLabel>
            <StatItemValue $color="#16A34A">115/76</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Máxima</StatItemLabel>
            <StatItemValue $color="#CA8A04">130/86</StatItemValue>
          </StatItem>
        </StatsGrid>

        <ReadingsList>
          <CardTitle>Todas as Medições</CardTitle>
          {readings.map((reading, index) => (
            <ReadingItem key={index}>
              <ReadingInfo>
                <ReadingValue>
                  {reading.systolic}/{reading.diastolic} mmHg
                </ReadingValue>
                <ReadingTime>{reading.time}</ReadingTime>
              </ReadingInfo>
              <StatusBadge $status={reading.status}>
                {getStatusLabel(reading.status)}
              </StatusBadge>
            </ReadingItem>
          ))}
        </ReadingsList>

        <RefCard>
          <RefTitle>Valores de Referência</RefTitle>
          <RefList>
            <RefItem>
              <RefDot $color="#22c55e" />
              <RefText>Normal: {'<'} 130/85 mmHg</RefText>
            </RefItem>
            <RefItem>
              <RefDot $color="#eab308" />
              <RefText>Atenção: 130-140/85-90 mmHg</RefText>
            </RefItem>
            <RefItem>
              <RefDot $color="#ef4444" />
              <RefText>Crítico: {'>'} 140/90 mmHg</RefText>
            </RefItem>
          </RefList>
        </RefCard>
      </Content>

      <Navigation />
      <PrototypeMenu />
    </Container>
  );
}
