import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Activity, Heart, AlertTriangle, User, LogOut, Wind } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useBraceletData } from '../../hooks/useBraceletData';
import { useAllBraceletReadings } from '../../hooks/useAllBraceletReadings';
import { toast } from '../../utils/toast';
import { StatCard } from '../../components/StatCard';
import { FallAlert } from '../../components/FallAlert';
import { Navigation, NAV_HEIGHT } from '../../components/Navigation';
import {
  Wrapper,
  Screen,
  PageHeader,
  HeaderInner,
  HeaderRow,
  UserInfo,
  AvatarCircle,
  UserDetails,
  UserName,
  UserAge,
  ConnectedBadge,
  ConnectedText,
  PulseDot,
  LastUpdate,
  Content,
  StatsContainer,
  InfoCard,
  InfoIconWrapper,
  InfoContent,
  InfoTitle,
  InfoText,
  QuickStats,
  QuickStatCard,
  QuickStatLabel,
  QuickStatValue,
  LogoutArea,
  LogoutButton,
  LogoutButtonText,
} from './styles.native';

export function Dashboard() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const { userData } = useCurrentUser();
  const { reading, lastUpdate } = useBraceletData(userData?.braceletSerial);
  const { readings } = useAllBraceletReadings(userData?.braceletSerial);

  const daysMonitored = new Set(
    readings.map((r) => {
      const d = r.timestamp > 1e10 ? new Date(r.timestamp) : new Date(r.timestamp * 1000);
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    })
  ).size;

  const avgBpm =
    readings.length > 0
      ? Math.round(readings.reduce((a, r) => a + r.batimentos, 0) / readings.length)
      : null;

  const totalFalls = readings.filter((r) => r.queda).length;
  const [showFallAlert, setShowFallAlert] = useState(false);
  const prevQuedaRef = useRef<boolean | null>(null);
  const pulseOpacity = useRef(new Animated.Value(1)).current;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logout realizado com sucesso!');
    } catch {
      toast.error('Erro ao sair. Tente novamente.');
    }
  };

  // Trigger fall alert whenever queda transitions to true
  useEffect(() => {
    if (reading?.queda === true && prevQuedaRef.current !== true) {
      setShowFallAlert(true);
    }
    prevQuedaRef.current = reading?.queda ?? null;
  }, [reading?.queda]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseOpacity, {
          toValue: 0.4,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseOpacity]);

  const getHeartRateStatus = () => {
    const bpm = reading?.batimentos;
    if (bpm == null) return 'normal';
    if (bpm > 110 || bpm < 55) return 'danger';
    if (bpm > 100 || bpm < 65) return 'warning';
    return 'normal';
  };

  const getSpo2Status = () => {
    const spo2 = reading?.spo2;
    if (spo2 == null) return 'normal';
    if (spo2 < 90) return 'danger';
    if (spo2 < 95) return 'warning';
    return 'normal';
  };

  const getFallStatus = () => {
    if (reading?.queda) return 'danger';
    return 'normal';
  };

  return (
    <Wrapper>
    <Screen contentContainerStyle={{ paddingBottom: NAV_HEIGHT + insets.bottom }}>
      {showFallAlert ? (
        <FallAlert
          elderName={userData?.elderName ?? 'Paciente'}
          time={new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          onDismiss={() => setShowFallAlert(false)}
        />
      ) : null}

      <PageHeader $topInset={insets.top}>
        <HeaderInner>
          <HeaderRow>
            <UserInfo>
              <AvatarCircle>
                <User size={24} color="white" />
              </AvatarCircle>
              <UserDetails>
                <UserName>{userData?.elderName ?? '—'}</UserName>
                <UserAge>{userData?.age != null ? `${userData.age} anos` : '—'}</UserAge>
              </UserDetails>
            </UserInfo>
            <ConnectedBadge>
              <PulseDot style={{ opacity: pulseOpacity }} />
              <ConnectedText>Conectado</ConnectedText>
            </ConnectedBadge>
          </HeaderRow>
          <LastUpdate>
            {lastUpdate
              ? `Última atualização: ${lastUpdate.toLocaleTimeString('pt-BR')}`
              : 'Aguardando dados da pulseira…'}
          </LastUpdate>
        </HeaderInner>
      </PageHeader>

      <Content>
        <StatsContainer>
          <StatCard
            icon={Wind}
            label="SpO2"
            value={reading?.spo2 != null ? reading.spo2.toString() : '—'}
            unit="%"
            status={getSpo2Status() as any}
          />
          <StatCard
            icon={Heart}
            label="Batimentos Cardíacos"
            value={reading?.batimentos != null ? reading.batimentos.toString() : '—'}
            unit="bpm"
            status={getHeartRateStatus() as any}
            onClick={() => navigation.navigate('HeartRate')}
          />
          <StatCard
            icon={AlertTriangle}
            label="Detecção de Queda"
            value={reading?.queda ? 'Queda!' : 'Normal'}
            status={getFallStatus() as any}
            onClick={() => navigation.navigate('Falls')}
          />
        </StatsContainer>

        <InfoCard>
          <InfoIconWrapper>
            <Activity size={16} color="white" />
          </InfoIconWrapper>
          <InfoContent>
            <InfoTitle>Monitoramento Ativo</InfoTitle>
            <InfoText>
              A pulseira está conectada e enviando dados em tempo real. Toque nos cards acima para
              ver o histórico detalhado.
            </InfoText>
          </InfoContent>
        </InfoCard>

        <QuickStats>
          <QuickStatCard>
            <QuickStatLabel>Dias Monitorados</QuickStatLabel>
            <QuickStatValue>{daysMonitored}</QuickStatValue>
          </QuickStatCard>
          <QuickStatCard>
            <QuickStatLabel>Média BPM</QuickStatLabel>
            <QuickStatValue>{avgBpm ?? '—'}</QuickStatValue>
          </QuickStatCard>
          <QuickStatCard $isLast>
            <QuickStatLabel>Total Quedas</QuickStatLabel>
            <QuickStatValue $color={totalFalls > 0 ? '#CA8A04' : undefined}>
              {totalFalls}
            </QuickStatValue>
          </QuickStatCard>
        </QuickStats>

        <LogoutArea>
          <LogoutButton onPress={handleLogout}>
            <LogOut size={16} color="#DC2626" />
            <LogoutButtonText>Sair da Conta</LogoutButtonText>
          </LogoutButton>
        </LogoutArea>
      </Content>

    </Screen>
    <Navigation />
    </Wrapper>
  );
}
