import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { Activity, Heart, AlertTriangle, User, LogOut } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toast } from '../../utils/toast';
import { StatCard } from '../../components/StatCard';
import { FallAlert } from '../../components/FallAlert';
import { Navigation } from '../../components/Navigation';
import {
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
  const [showFallAlert, setShowFallAlert] = useState(false);
  const [currentData, setCurrentData] = useState({
    bloodPressure: { systolic: 120, diastolic: 80 },
    heartRate: 72,
    lastUpdate: new Date(),
  });
  const pulseOpacity = useRef(new Animated.Value(1)).current;

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isAuthenticated');
    await AsyncStorage.removeItem('currentUser');
    toast.success('Logout realizado com sucesso!');
    navigation.navigate('Login');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData({
        bloodPressure: {
          systolic: 115 + Math.floor(Math.random() * 20),
          diastolic: 75 + Math.floor(Math.random() * 15),
        },
        heartRate: 68 + Math.floor(Math.random() * 15),
        lastUpdate: new Date(),
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFallAlert(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

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

  const getBloodPressureStatus = () => {
    const { systolic, diastolic } = currentData.bloodPressure;
    if (systolic > 140 || diastolic > 90) return 'danger';
    if (systolic > 130 || diastolic > 85) return 'warning';
    return 'normal';
  };

  const getHeartRateStatus = () => {
    const { heartRate } = currentData;
    if (heartRate > 100 || heartRate < 60) return 'danger';
    if (heartRate > 90 || heartRate < 65) return 'warning';
    return 'normal';
  };

  return (
    <Screen>
      {showFallAlert ? (
        <FallAlert
          elderName="Maria Silva"
          time={new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          onDismiss={() => setShowFallAlert(false)}
        />
      ) : null}

      <PageHeader>
        <HeaderInner>
          <HeaderRow>
            <UserInfo>
              <AvatarCircle>
                <User size={24} color="white" />
              </AvatarCircle>
              <UserDetails>
                <UserName>Maria Silva</UserName>
                <UserAge>78 anos</UserAge>
              </UserDetails>
            </UserInfo>
            <ConnectedBadge>
              <PulseDot style={{ opacity: pulseOpacity }} />
              <ConnectedText>Conectado</ConnectedText>
            </ConnectedBadge>
          </HeaderRow>
          <LastUpdate>
            Última atualização: {currentData.lastUpdate.toLocaleTimeString('pt-BR')}
          </LastUpdate>
        </HeaderInner>
      </PageHeader>

      <Content>
        <StatsContainer>
          <StatCard
            icon={Activity}
            label="Pressão Sanguínea"
            value={`${currentData.bloodPressure.systolic}/${currentData.bloodPressure.diastolic}`}
            unit="mmHg"
            status={getBloodPressureStatus() as any}
            onClick={() => navigation.navigate('BloodPressure')}
          />
          <StatCard
            icon={Heart}
            label="Batimentos Cardíacos"
            value={currentData.heartRate.toString()}
            unit="bpm"
            status={getHeartRateStatus() as any}
            onClick={() => navigation.navigate('HeartRate')}
          />
          <StatCard
            icon={AlertTriangle}
            label="Quedas Hoje"
            value="1"
            unit="ocorrência"
            status="warning"
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
            <QuickStatValue>45</QuickStatValue>
          </QuickStatCard>
          <QuickStatCard>
            <QuickStatLabel>Média BPM</QuickStatLabel>
            <QuickStatValue>74</QuickStatValue>
          </QuickStatCard>
          <QuickStatCard $isLast>
            <QuickStatLabel>Total Quedas</QuickStatLabel>
            <QuickStatValue $color="#CA8A04">3</QuickStatValue>
          </QuickStatCard>
        </QuickStats>

        <LogoutArea>
          <LogoutButton onPress={handleLogout}>
            <LogOut size={16} color="#DC2626" />
            <LogoutButtonText>Sair da Conta</LogoutButtonText>
          </LogoutButton>
        </LogoutArea>
      </Content>

      <Navigation />
    </Screen>
  );
}
