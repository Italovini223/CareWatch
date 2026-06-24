import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';
import { ArrowLeft, Calendar, User } from 'lucide-react-native';
import { Navigation, NAV_HEIGHT } from '../../components/Navigation';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useAllBraceletReadings } from '../../hooks/useAllBraceletReadings';
import {
  Wrapper,
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
  ZonesCard,
  ZoneItem,
  ZoneRow,
  ZoneLabel,
  ZonePercent,
  ProgressTrack,
  ProgressBar,
} from './styles.native';

const formatTime = (ts: number): string => {
  if (ts > 86400) {
    const d = ts > 1e10 ? new Date(ts) : new Date(ts * 1000);
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }
  const h = Math.floor(ts / 3600);
  const m = Math.floor((ts % 3600) / 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

const getReadingStatus = (spo2: number): 'normal' | 'warning' | 'danger' => {
  if (spo2 < 90) return 'danger';
  if (spo2 < 95) return 'warning';
  return 'normal';
};

const getStatusLabel = (status: 'normal' | 'warning' | 'danger') => {
  if (status === 'normal') return 'Normal';
  if (status === 'warning') return 'Atenção';
  return 'Crítico';
};

export function BloodPressureHistory() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const { userData } = useCurrentUser();
  const { readings, loading } = useAllBraceletReadings(userData?.braceletSerial);
  const chartWidth = Dimensions.get('window').width - 32;

  const chartReadings = readings.slice(-12);

  const MAX_LABELS = 6;
  const labelStep = Math.max(1, Math.ceil(chartReadings.length / MAX_LABELS));
  const chartLabels = chartReadings.map((r, i) =>
    i % labelStep === 0 ? formatTime(r.timestamp) : ''
  );

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        data: chartReadings.length > 0 ? chartReadings.map((r) => r.spo2) : [0],
        color: () => '#0891b2',
        strokeWidth: 2,
      },
    ],
  };

  const spo2Values = readings.map((r) => r.spo2);
  const avg =
    spo2Values.length > 0
      ? Math.round(spo2Values.reduce((a, b) => a + b, 0) / spo2Values.length)
      : null;
  const min = spo2Values.length > 0 ? Math.min(...spo2Values) : null;
  const max = spo2Values.length > 0 ? Math.max(...spo2Values) : null;

  const total = readings.length;
  const normalCount = readings.filter((r) => r.spo2 >= 95).length;
  const atencaoCount = readings.filter((r) => r.spo2 >= 90 && r.spo2 < 95).length;
  const criticoCount = readings.filter((r) => r.spo2 < 90).length;
  const normalPercent = total > 0 ? Math.round((normalCount / total) * 100) : 0;
  const atencaoPercent = total > 0 ? Math.round((atencaoCount / total) * 100) : 0;
  const criticoPercent = total > 0 ? Math.round((criticoCount / total) * 100) : 0;

  const reversedReadings = [...readings].reverse();

  return (
    <Wrapper>
    <Screen contentContainerStyle={{ paddingBottom: NAV_HEIGHT + insets.bottom }}>
      <PageHeader $topInset={insets.top}>
        <HeaderInner>
          <BackButton onPress={() => navigation.navigate('Dashboard')}>
            <ArrowLeft size={20} color="white" />
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
          <PageTitle>Oximetria (SpO₂)</PageTitle>
          <DateRow>
            <User size={14} color="rgba(207, 250, 254, 0.8)" />
            <DateText>{userData?.elderName ?? '—'}</DateText>
          </DateRow>
          <DateRow>
            <Calendar size={16} color="rgba(207, 250, 254, 1)" />
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
          <CardTitle>
            {loading
              ? 'Carregando histórico…'
              : `Histórico (${readings.length} leitura${readings.length !== 1 ? 's' : ''})`}
          </CardTitle>
          {chartReadings.length >= 2 ? (
            <LineChart
              data={chartData}
              width={chartWidth}
              height={220}
              withDots={chartReadings.length <= 20}
              withInnerLines
              withOuterLines={false}
              chartConfig={{
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(8, 145, 178, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(100, 116, 139, ${opacity})`,
                fillShadowGradient: '#0891b2',
                fillShadowGradientOpacity: 0.2,
                propsForBackgroundLines: { strokeDasharray: '3 3' },
              }}
              bezier
            />
          ) : (
            <StatItemLabel style={{ textAlign: 'center', paddingVertical: 40 }}>
              {loading ? 'Buscando dados…' : 'Nenhuma leitura encontrada'}
            </StatItemLabel>
          )}
        </Card>

        <StatsRow>
          <StatItem>
            <StatItemLabel>Média</StatItemLabel>
            <StatItemValue>{avg != null ? `${avg}%` : '—'}</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Mínima</StatItemLabel>
            <StatItemValue $color="#DC2626">{min != null ? `${min}%` : '—'}</StatItemValue>
          </StatItem>
          <StatItem $isLast>
            <StatItemLabel>Máxima</StatItemLabel>
            <StatItemValue $color="#16A34A">{max != null ? `${max}%` : '—'}</StatItemValue>
          </StatItem>
        </StatsRow>

        {reversedReadings.length > 0 && (
          <ReadingsList>
            <CardTitle>Todas as Medições</CardTitle>
            {reversedReadings.map((r, index) => {
              const status = getReadingStatus(r.spo2);
              return (
                <ReadingItem key={r.key} $isLast={index === reversedReadings.length - 1}>
                  <ReadingInfo>
                    <ReadingValue>{r.spo2}%</ReadingValue>
                    <ReadingTime>{formatTime(r.timestamp)}</ReadingTime>
                  </ReadingInfo>
                  <StatusBadge $status={status}>{getStatusLabel(status)}</StatusBadge>
                </ReadingItem>
              );
            })}
          </ReadingsList>
        )}

        <RefCard>
          <RefTitle>Valores de Referência (SpO₂)</RefTitle>
          <RefItem>
            <RefDot $color="#22c55e" />
            <RefText>Normal: ≥ 95%</RefText>
          </RefItem>
          <RefItem>
            <RefDot $color="#eab308" />
            <RefText>Atenção: 90–94%</RefText>
          </RefItem>
          <RefItem>
            <RefDot $color="#ef4444" />
            <RefText>Crítico: {'<'} 90%</RefText>
          </RefItem>
        </RefCard>

        {total > 0 && (
          <ZonesCard>
            <CardTitle>Distribuição de Saturação</CardTitle>
            <ZoneItem>
              <ZoneRow>
                <ZoneLabel>Normal (≥ 95%)</ZoneLabel>
                <ZonePercent>{normalPercent}% das leituras</ZonePercent>
              </ZoneRow>
              <ProgressTrack>
                <ProgressBar $width={`${normalPercent}%`} $color="#22c55e" />
              </ProgressTrack>
            </ZoneItem>
            <ZoneItem>
              <ZoneRow>
                <ZoneLabel>Atenção (90–94%)</ZoneLabel>
                <ZonePercent>{atencaoPercent}% das leituras</ZonePercent>
              </ZoneRow>
              <ProgressTrack>
                <ProgressBar $width={`${atencaoPercent}%`} $color="#eab308" />
              </ProgressTrack>
            </ZoneItem>
            <ZoneItem>
              <ZoneRow>
                <ZoneLabel>Crítico ({'<'} 90%)</ZoneLabel>
                <ZonePercent>{criticoPercent}% das leituras</ZonePercent>
              </ZoneRow>
              <ProgressTrack>
                <ProgressBar $width={`${criticoPercent}%`} $color="#ef4444" />
              </ProgressTrack>
            </ZoneItem>
          </ZonesCard>
        )}
      </Content>

    </Screen>
    <Navigation />
    </Wrapper>
  );
}
