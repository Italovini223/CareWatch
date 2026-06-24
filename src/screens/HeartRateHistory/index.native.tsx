import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';
import { ArrowLeft, Calendar, User } from 'lucide-react-native';
import { Navigation, NAV_HEIGHT } from '../../components/Navigation';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useAllBraceletReadings } from '../../hooks/useAllBraceletReadings';
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
  // seconds since midnight
  const h = Math.floor(ts / 3600);
  const m = Math.floor((ts % 3600) / 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

const getReadingStatus = (bpm: number): 'normal' | 'warning' | 'danger' => {
  if (bpm > 110 || bpm < 50) return 'danger';
  if (bpm > 100 || bpm < 60) return 'warning';
  return 'normal';
};

const getStatusLabel = (status: 'normal' | 'warning' | 'danger') => {
  if (status === 'normal') return 'Normal';
  if (status === 'warning') return 'Atenção';
  return 'Crítico';
};

export function HeartRateHistory() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const { userData } = useCurrentUser();
  const { readings, loading } = useAllBraceletReadings(userData?.braceletSerial);
  const chartWidth = Dimensions.get('window').width - 32;

  // Last 12 readings for the chart (keeps it readable)
  const chartReadings = readings.slice(-12);

  // Build chart labels — show at most 6, blank the rest to avoid crowding
  const MAX_LABELS = 6;
  const labelStep = Math.max(1, Math.ceil(chartReadings.length / MAX_LABELS));
  const chartLabels = chartReadings.map((r, i) =>
    i % labelStep === 0 ? formatTime(r.timestamp) : ''
  );

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        data: chartReadings.length > 0 ? chartReadings.map((r) => r.batimentos) : [0],
        color: () => '#ef4444',
        strokeWidth: 2,
      },
    ],
  };

  // Stats from all readings
  const bpmValues = readings.map((r) => r.batimentos);
  const avg = bpmValues.length > 0
    ? Math.round(bpmValues.reduce((a, b) => a + b, 0) / bpmValues.length)
    : null;
  const min = bpmValues.length > 0 ? Math.min(...bpmValues) : null;
  const max = bpmValues.length > 0 ? Math.max(...bpmValues) : null;

  // Zones — percentage of readings in each BPM range
  const total = readings.length;
  const repousoCount = readings.filter((r) => r.batimentos < 70).length;
  const leveCount = readings.filter((r) => r.batimentos >= 70 && r.batimentos < 90).length;
  const moderadaCount = readings.filter((r) => r.batimentos >= 90).length;
  const repousoPercent = total > 0 ? Math.round((repousoCount / total) * 100) : 0;
  const levePercent = total > 0 ? Math.round((leveCount / total) * 100) : 0;
  const moderadaPercent = total > 0 ? Math.round((moderadaCount / total) * 100) : 0;

  // List in reverse order — newest first
  const reversedReadings = [...readings].reverse();

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
            <User size={14} color="rgba(252, 231, 243, 0.8)" />
            <DateText>{userData?.elderName ?? '—'}</DateText>
          </DateRow>
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
                color: (opacity = 1) => `rgba(239, 68, 68, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(100, 116, 139, ${opacity})`,
                fillShadowGradient: '#ef4444',
                fillShadowGradientOpacity: 0.25,
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
            <StatItemValue>{avg != null ? `${avg} bpm` : '—'}</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Mínima</StatItemLabel>
            <StatItemValue $color="#2563EB">{min != null ? `${min} bpm` : '—'}</StatItemValue>
          </StatItem>
          <StatItem $isLast>
            <StatItemLabel>Máxima</StatItemLabel>
            <StatItemValue $color="#DC2626">{max != null ? `${max} bpm` : '—'}</StatItemValue>
          </StatItem>
        </StatsRow>

        {reversedReadings.length > 0 && (
          <ReadingsList>
            <CardTitle>Todas as Medições</CardTitle>
            {reversedReadings.map((r, index) => {
              const status = getReadingStatus(r.batimentos);
              return (
                <ReadingItem key={r.key} $isLast={index === reversedReadings.length - 1}>
                  <ReadingInfo>
                    <ReadingValue>{r.batimentos} bpm</ReadingValue>
                    <ReadingTime>{formatTime(r.timestamp)}</ReadingTime>
                  </ReadingInfo>
                  <StatusBadge $status={status}>{getStatusLabel(status)}</StatusBadge>
                </ReadingItem>
              );
            })}
          </ReadingsList>
        )}

        <RefCard>
          <RefTitle>Valores de Referência (Repouso)</RefTitle>
          <RefItem>
            <RefDot $color="#22c55e" />
            <RefText>Normal: 60–100 bpm</RefText>
          </RefItem>
          <RefItem>
            <RefDot $color="#eab308" />
            <RefText>Atenção: 100–110 bpm ou {'<'} 60 bpm</RefText>
          </RefItem>
          <RefItem>
            <RefDot $color="#ef4444" />
            <RefText>Crítico: {'>'} 110 bpm ou {'<'} 50 bpm</RefText>
          </RefItem>
        </RefCard>

        {total > 0 && (
          <ZonesCard>
            <CardTitle>Zonas de Frequência Cardíaca</CardTitle>
            <ZoneItem>
              <ZoneRow>
                <ZoneLabel>Repouso ({'<'} 70 bpm)</ZoneLabel>
                <ZonePercent>{repousoPercent}% do tempo</ZonePercent>
              </ZoneRow>
              <ProgressTrack>
                <ProgressBar $width={`${repousoPercent}%`} $color="#22c55e" />
              </ProgressTrack>
            </ZoneItem>
            <ZoneItem>
              <ZoneRow>
                <ZoneLabel>Atividade Leve (70–90 bpm)</ZoneLabel>
                <ZonePercent>{levePercent}% do tempo</ZonePercent>
              </ZoneRow>
              <ProgressTrack>
                <ProgressBar $width={`${levePercent}%`} $color="#3b82f6" />
              </ProgressTrack>
            </ZoneItem>
            <ZoneItem>
              <ZoneRow>
                <ZoneLabel>Atividade Moderada ({'>'} 90 bpm)</ZoneLabel>
                <ZonePercent>{moderadaPercent}% do tempo</ZonePercent>
              </ZoneRow>
              <ProgressTrack>
                <ProgressBar $width={`${moderadaPercent}%`} $color="#f59e0b" />
              </ProgressTrack>
            </ZoneItem>
          </ZonesCard>
        )}
      </Content>

      <Navigation />
    </Screen>
  );
}
