import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeft, Calendar, AlertTriangle, Clock, User } from 'lucide-react-native';
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
  StatsRow,
  StatItem,
  StatItemLabel,
  StatItemValue,
  AlertCard,
  AlertIconWrapper,
  AlertContent,
  AlertTitle,
  AlertText,
  SectionTitle,
  IncidentsList,
  IncidentCard,
  IncidentHeader,
  IncidentTitleRow,
  IncidentIconBox,
  IncidentTitleBlock,
  IncidentTitle,
  IncidentDate,
  IncidentMetaList,
  IncidentMetaItem,
  IncidentMetaText,
  VitalsBox,
  VitalsTitle,
  VitalsRow,
  VitalItem,
  VitalLabel,
  VitalValue,
  TipsCard,
  TipsTitle,
  TipItem,
  TipBullet,
  TipText,
} from './styles.native';

const formatDate = (ts: number): string => {
  const d = ts > 1e10 ? new Date(ts) : new Date(ts * 1000);
  return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
};

const formatTime = (ts: number): string => {
  const d = ts > 1e10 ? new Date(ts) : new Date(ts * 1000);
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
};

export function FallsHistory() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const { userData } = useCurrentUser();
  const { readings, loading } = useAllBraceletReadings(userData?.braceletSerial);

  const fallReadings = [...readings].filter((r) => r.queda).reverse();

  const now = new Date();
  const thisMonthCount = fallReadings.filter((r) => {
    const d = r.timestamp > 1e10 ? new Date(r.timestamp) : new Date(r.timestamp * 1000);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  const uniqueMonths = new Set(
    fallReadings.map((r) => {
      const d = r.timestamp > 1e10 ? new Date(r.timestamp) : new Date(r.timestamp * 1000);
      return `${d.getFullYear()}-${d.getMonth()}`;
    })
  );
  const avgMonthly =
    uniqueMonths.size > 0 ? (fallReadings.length / uniqueMonths.size).toFixed(1) : '0';

  const hasFalls = fallReadings.length > 0;

  return (
    <Wrapper>
    <Screen contentContainerStyle={{ paddingBottom: NAV_HEIGHT + insets.bottom }}>
      <PageHeader $topInset={insets.top}>
        <HeaderInner>
          <BackButton onPress={() => navigation.navigate('Dashboard')}>
            <ArrowLeft size={20} color="white" />
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
          <PageTitle>Histórico de Quedas</PageTitle>
          <DateRow>
            <User size={14} color="rgba(254, 215, 170, 0.8)" />
            <DateText>{userData?.elderName ?? '—'}</DateText>
          </DateRow>
          <DateRow>
            <Calendar size={16} color="#fed7aa" />
            <DateText>Últimos 30 dias</DateText>
          </DateRow>
        </HeaderInner>
      </PageHeader>

      <Content>
        <StatsRow>
          <StatItem>
            <StatItemLabel>Total</StatItemLabel>
            <StatItemValue>{loading ? '…' : fallReadings.length}</StatItemValue>
          </StatItem>
          <StatItem>
            <StatItemLabel>Este Mês</StatItemLabel>
            <StatItemValue $color={thisMonthCount > 0 ? '#ea580c' : undefined}>
              {loading ? '…' : thisMonthCount}
            </StatItemValue>
          </StatItem>
          <StatItem $isLast>
            <StatItemLabel>Média Mensal</StatItemLabel>
            <StatItemValue>{loading ? '…' : avgMonthly}</StatItemValue>
          </StatItem>
        </StatsRow>

        {hasFalls && (
          <AlertCard>
            <AlertIconWrapper>
              <AlertTriangle size={16} color="white" />
            </AlertIconWrapper>
            <AlertContent>
              <AlertTitle>Recomendação de Segurança</AlertTitle>
              <AlertText>
                Foram detectadas {fallReadings.length} queda{fallReadings.length !== 1 ? 's' : ''}.
                Recomenda-se avaliação médica e revisão das condições de segurança do ambiente.
              </AlertText>
            </AlertContent>
          </AlertCard>
        )}

        <SectionTitle>Todas as Ocorrências</SectionTitle>

        <IncidentsList>
          {loading ? (
            <StatItemLabel style={{ textAlign: 'center', paddingVertical: 40 }}>
              Buscando dados…
            </StatItemLabel>
          ) : !hasFalls ? (
            <StatItemLabel style={{ textAlign: 'center', paddingVertical: 40 }}>
              Nenhuma queda detectada
            </StatItemLabel>
          ) : (
            fallReadings.map((r) => (
              <IncidentCard key={r.key}>
                <IncidentHeader>
                  <IncidentTitleRow>
                    <IncidentIconBox>
                      <AlertTriangle size={20} color="#dc2626" />
                    </IncidentIconBox>
                    <IncidentTitleBlock>
                      <IncidentTitle>Queda Detectada</IncidentTitle>
                      <IncidentDate>{formatDate(r.timestamp)}</IncidentDate>
                    </IncidentTitleBlock>
                  </IncidentTitleRow>
                </IncidentHeader>

                <IncidentMetaList>
                  <IncidentMetaItem>
                    <Clock size={16} color="#6B7280" />
                    <IncidentMetaText>{formatTime(r.timestamp)}</IncidentMetaText>
                  </IncidentMetaItem>
                </IncidentMetaList>

                <VitalsBox>
                  <VitalsTitle>Sinais Vitais no Momento</VitalsTitle>
                  <VitalsRow>
                    <VitalItem>
                      <VitalLabel>Batimentos</VitalLabel>
                      <VitalValue>{r.batimentos} bpm</VitalValue>
                    </VitalItem>
                    <VitalItem $isLast>
                      <VitalLabel>SpO₂</VitalLabel>
                      <VitalValue>{r.spo2}%</VitalValue>
                    </VitalItem>
                  </VitalsRow>
                </VitalsBox>
              </IncidentCard>
            ))
          )}
        </IncidentsList>

        <TipsCard>
          <TipsTitle>Dicas de Prevenção</TipsTitle>
          {[
            'Remova tapetes soltos e obstáculos dos caminhos',
            'Instale barras de apoio no banheiro',
            'Mantenha boa iluminação em todos os ambientes',
            'Use calçados antiderrapantes',
            'Consulte um médico sobre medicamentos que causam tontura',
          ].map((tip, i) => (
            <TipItem key={i}>
              <TipBullet>•</TipBullet>
              <TipText>{tip}</TipText>
            </TipItem>
          ))}
        </TipsCard>
      </Content>

    </Screen>
    <Navigation />
    </Wrapper>
  );
}
