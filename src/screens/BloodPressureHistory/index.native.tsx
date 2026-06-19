import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';
import { ArrowLeft, Calendar, User } from 'lucide-react-native';
import { Navigation, NAV_HEIGHT } from '../../components/Navigation';
import { useCurrentUser } from '../../hooks/useCurrentUser';
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
  StatusBadge,
  RefCard,
  RefTitle,
  RefItem,
  RefDot,
  RefText,
} from './styles.native';

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

export function BloodPressureHistory() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const { userData } = useCurrentUser();
  const chartWidth = Dimensions.get('window').width - 32;
  const chartData = {
    labels: mockData.map((item) => item.time),
    datasets: [
      {
        data: mockData.map((item) => item.systolic),
        color: () => '#ef4444',
        strokeWidth: 2,
      },
      {
        data: mockData.map((item) => item.diastolic),
        color: () => '#3b82f6',
        strokeWidth: 2,
      },
    ],
    legend: ['Sistólica', 'Diastólica'],
  };

  return (
    <Screen contentContainerStyle={{ paddingBottom: NAV_HEIGHT + insets.bottom }}>
      <PageHeader $topInset={insets.top}>
        <HeaderInner>
          <BackButton onPress={() => navigation.navigate('Dashboard')}>
            <ArrowLeft size={20} color="white" />
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
          <PageTitle>Pressão Sanguínea</PageTitle>
          <DateRow>
            <User size={14} color="rgba(219, 234, 254, 0.8)" />
            <DateText>{userData?.elderName ?? '—'}</DateText>
          </DateRow>
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
              color: (opacity = 1) => `rgba(148, 163, 184, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(100, 116, 139, ${opacity})`,
              propsForBackgroundLines: {
                strokeDasharray: '3 3',
              },
            }}
            bezier={false}
          />
        </Card>

        <StatsRow>
          <StatItem>
            <StatItemLabel>Média</StatItemLabel>
            <StatItemValue>124/82</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Mínima</StatItemLabel>
            <StatItemValue $color="#16A34A">115/76</StatItemValue>
          </StatItem>
          <StatItem $isLast>
            <StatItemLabel>Máxima</StatItemLabel>
            <StatItemValue $color="#CA8A04">130/86</StatItemValue>
          </StatItem>
        </StatsRow>

        <ReadingsList>
          <CardTitle>Todas as Medições</CardTitle>
          {readings.map((reading, index) => (
            <ReadingItem key={index} $isLast={index === readings.length - 1}>
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
        </RefCard>
      </Content>

      <Navigation />
    </Screen>
  );
}
