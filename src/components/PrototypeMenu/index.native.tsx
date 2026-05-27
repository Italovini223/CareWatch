import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import {
  LayoutGrid,
  X,
  Home,
  Activity,
  Heart,
  AlertTriangle,
  LogIn,
  UserPlus,
  ChevronRight,
} from 'lucide-react-native';

import {
  Backdrop,
  BackdropPressable,
  Drawer,
  Handle,
  HandleBar,
  DrawerContent,
  DrawerHeader,
  DrawerTitleBlock,
  DrawerTitle,
  DrawerSubtitle,
  CloseButton,
  ProtoBadge,
  PulseDot,
  ProtoBadgeText,
  ScreenList,
  ScreenItem,
  ScreenIconWrapper,
  ScreenInfo,
  ScreenNameRow,
  ScreenName,
  ActiveChip,
  ScreenDescription,
  ChevronIcon,
  FloatingButton,
} from './styles.native';

const screens = [
  {
    label: 'Login',
    description: 'Tela de autenticação',
    routeName: 'Login',
    tabScreen: false,
    icon: LogIn,
    lightColor: '#EFF6FF',
    textColor: '#2563EB',
  },
  {
    label: 'Cadastro',
    description: 'Registro de nova conta',
    routeName: 'Register',
    tabScreen: false,
    icon: UserPlus,
    lightColor: '#F5F3FF',
    textColor: '#7C3AED',
  },
  {
    label: 'Dashboard',
    description: 'Monitoramento em tempo real',
    routeName: 'Dashboard',
    tabScreen: true,
    icon: Home,
    lightColor: '#EFF6FF',
    textColor: '#1D4ED8',
  },
  {
    label: 'Pressão Sanguínea',
    description: 'Histórico e gráficos',
    routeName: 'BloodPressure',
    tabScreen: true,
    icon: Activity,
    lightColor: '#F0F9FF',
    textColor: '#0284C7',
  },
  {
    label: 'Batimentos',
    description: 'Frequência cardíaca',
    routeName: 'HeartRate',
    tabScreen: true,
    icon: Heart,
    lightColor: '#FEF2F2',
    textColor: '#DC2626',
  },
  {
    label: 'Histórico de Quedas',
    description: 'Ocorrências detectadas',
    routeName: 'Falls',
    tabScreen: true,
    icon: AlertTriangle,
    lightColor: '#FFF7ED',
    textColor: '#EA580C',
  },
];

function getActiveRouteName(state: any): string {
  const route = state.routes[state.index];
  if (route?.state) {
    return getActiveRouteName(route.state);
  }
  return route?.name ?? 'Dashboard';
}

export function PrototypeMenu() {
  const navigation = useNavigation<any>();
  const [open, setOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const pulseOpacity = useRef(new Animated.Value(1)).current;
  const activeRouteName = useNavigationState(getActiveRouteName);

  const drawerHeight = useMemo(() => {
    const windowHeight = Dimensions.get('window').height;
    return windowHeight * 0.85;
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: open ? 1 : 0,
      duration: 240,
      useNativeDriver: true,
    }).start();
  }, [animation, open]);

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

  const backdropOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.4],
  });

  const drawerTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [drawerHeight, 0],
  });

  const handleNavigate = (routeName: string, tabScreen: boolean) => {
    setOpen(false);
    if (tabScreen) {
      navigation.navigate('MainTabs', { screen: routeName });
      return;
    }
    navigation.navigate(routeName);
  };

  return (
    <>
      {open ? (
        <Backdrop style={{ opacity: backdropOpacity }}>
          <BackdropPressable onPress={() => setOpen(false)} />
        </Backdrop>
      ) : null}

      <Drawer style={{ transform: [{ translateY: drawerTranslateY }] }}>
        <Handle>
          <HandleBar />
        </Handle>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitleBlock>
              <DrawerTitle>Navegação do Protótipo</DrawerTitle>
              <DrawerSubtitle>Acesse qualquer tela diretamente</DrawerSubtitle>
            </DrawerTitleBlock>
            <CloseButton onPress={() => setOpen(false)}>
              <X size={16} color="#6B7280" />
            </CloseButton>
          </DrawerHeader>

          <ProtoBadge>
            <PulseDot style={{ opacity: pulseOpacity }} />
            <ProtoBadgeText>Modo Protótipo — 6 telas disponíveis</ProtoBadgeText>
          </ProtoBadge>

          <ScreenList>
            {screens.map((screen, index) => {
              const Icon = screen.icon;
              const isActive = activeRouteName === screen.routeName;
              return (
                <ScreenItem
                  key={screen.routeName}
                  $active={isActive}
                  $isLast={index === screens.length - 1}
                  onPress={() => handleNavigate(screen.routeName, screen.tabScreen)}
                >
                  <ScreenIconWrapper $lightColor={screen.lightColor}>
                    <Icon size={20} color={screen.textColor} />
                  </ScreenIconWrapper>
                  <ScreenInfo>
                    <ScreenNameRow>
                      <ScreenName $active={isActive}>{screen.label}</ScreenName>
                      {isActive ? <ActiveChip>Atual</ActiveChip> : null}
                    </ScreenNameRow>
                    <ScreenDescription>{screen.description}</ScreenDescription>
                  </ScreenInfo>
                  <ChevronIcon>
                    <ChevronRight size={16} color="#9CA3AF" />
                  </ChevronIcon>
                </ScreenItem>
              );
            })}
          </ScreenList>
        </DrawerContent>
      </Drawer>

      <FloatingButton onPress={() => setOpen((prev) => !prev)}>
        {open ? <X size={20} color="#FFFFFF" /> : <LayoutGrid size={20} color="#FFFFFF" />}
      </FloatingButton>
    </>
  );
}
