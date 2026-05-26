import { useNavigation } from '@react-navigation/native';
import {
  Home,
  Activity,
  Heart,
  AlertTriangle,
  LogIn,
  UserPlus,
  ChevronRight,
  Watch,
  Shield,
} from 'lucide-react-native';
import {
  Container,
  PageHeader,
  HeaderInner,
  LogoRow,
  LogoIconBox,
  LogoInfo,
  AppTitle,
  AppSubtitle,
  InfoBanner,
  InfoBannerIcon,
  InfoBannerBody,
  InfoBannerTitle,
  InfoBannerText,
  Content,
  GroupSection,
  GroupDivider,
  DividerLine,
  GroupLabel,
  ScreensList,
  ScreenButton,
  ScreenCard,
  ScreenIconBox,
  ScreenInfo,
  ScreenNameRow,
  ScreenName,
  ScreenTag,
  ScreenDescription,
  ScreenPath,
  ChevronWrapper,
  CredentialsBox,
  CredentialsTitle,
  CredentialsList,
  CredentialRow,
  CredentialKey,
  CredentialValue,
} from './styles';

const screens = [
  {
    label: 'Login',
    description: 'Entrada com email e senha do cuidador',
    path: '/login',
    routeName: 'Login',
    tabScreen: false,
    icon: LogIn,
    gradientFrom: '#3B82F6',
    gradientTo: '#1D4ED8',
    accentBg: '#DBEAFE',
    accentText: '#1D4ED8',
    tag: 'Autenticação',
  },
  {
    label: 'Cadastro',
    description: 'Registro com serial da pulseira no formato XXXX-XXXX-XXXX',
    path: '/register',
    routeName: 'Register',
    tabScreen: false,
    icon: UserPlus,
    gradientFrom: '#A855F7',
    gradientTo: '#7C3AED',
    accentBg: '#EDE9FE',
    accentText: '#6D28D9',
    tag: 'Autenticação',
  },
  {
    label: 'Dashboard',
    description: 'Monitoramento em tempo real com alertas de queda',
    path: '/',
    routeName: 'Dashboard',
    tabScreen: true,
    icon: Home,
    gradientFrom: '#2563EB',
    gradientTo: '#4338CA',
    accentBg: '#E0E7FF',
    accentText: '#4338CA',
    tag: 'Principal',
  },
  {
    label: 'Pressão Sanguínea',
    description: 'Histórico diário com gráfico sistólica/diastólica',
    path: '/blood-pressure',
    routeName: 'BloodPressure',
    tabScreen: true,
    icon: Activity,
    gradientFrom: '#0EA5E9',
    gradientTo: '#2563EB',
    accentBg: '#E0F2FE',
    accentText: '#0369A1',
    tag: 'Histórico',
  },
  {
    label: 'Batimentos Cardíacos',
    description: 'Frequência cardíaca com zonas de atividade',
    path: '/heart-rate',
    routeName: 'HeartRate',
    tabScreen: true,
    icon: Heart,
    gradientFrom: '#EF4444',
    gradientTo: '#DB2777',
    accentBg: '#FEE2E2',
    accentText: '#B91C1C',
    tag: 'Histórico',
  },
  {
    label: 'Histórico de Quedas',
    description: 'Ocorrências detectadas com localização e sinais vitais',
    path: '/falls',
    routeName: 'Falls',
    tabScreen: true,
    icon: AlertTriangle,
    gradientFrom: '#F97316',
    gradientTo: '#DC2626',
    accentBg: '#FFEDD5',
    accentText: '#C2410C',
    tag: 'Histórico',
  },
];

const tagGroups: Record<string, typeof screens> = {};
screens.forEach((s) => {
  if (!tagGroups[s.tag]) tagGroups[s.tag] = [];
  tagGroups[s.tag].push(s);
});

export function ScreensOverview() {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <PageHeader>
        <HeaderInner>
          <LogoRow>
            <LogoIconBox>
              <Watch size={28} color="white" />
            </LogoIconBox>
            <LogoInfo>
              <AppTitle>CareWatch</AppTitle>
              <AppSubtitle>Protótipo de Navegação</AppSubtitle>
            </LogoInfo>
          </LogoRow>

          <InfoBanner>
            <InfoBannerIcon>
              <Shield size={20} color="#a5b4fc" />
            </InfoBannerIcon>
            <InfoBannerBody>
              <InfoBannerTitle>Visão geral de todas as telas</InfoBannerTitle>
              <InfoBannerText>
                Clique em qualquer tela para acessá-la diretamente. O acesso às telas protegidas é
                feito com um usuário demo automático.
              </InfoBannerText>
            </InfoBannerBody>
          </InfoBanner>
        </HeaderInner>
      </PageHeader>

      <Content>
        {Object.entries(tagGroups).map(([tag, items]) => (
          <GroupSection key={tag}>
            <GroupDivider>
              <DividerLine />
              <GroupLabel>{tag}</GroupLabel>
              <DividerLine />
            </GroupDivider>

            <ScreensList>
              {items.map((screen) => {
                const Icon = screen.icon;
                const handlePress = () => {
                  if (screen.tabScreen) {
                    navigation.navigate('MainTabs', { screen: screen.routeName });
                    return;
                  }
                  navigation.navigate(screen.routeName);
                };

                return (
                  <ScreenButton key={screen.path} onPress={handlePress}>
                    <ScreenCard>
                      <ScreenIconBox
                        $gradientFrom={screen.gradientFrom}
                        $gradientTo={screen.gradientTo}
                      >
                        <Icon size={24} color="white" />
                      </ScreenIconBox>

                      <ScreenInfo>
                        <ScreenNameRow>
                          <ScreenName>{screen.label}</ScreenName>
                          <ScreenTag $accentBg={screen.accentBg} $accentText={screen.accentText}>
                            {screen.tag}
                          </ScreenTag>
                        </ScreenNameRow>
                        <ScreenDescription>{screen.description}</ScreenDescription>
                        <ScreenPath>
                          {screen.path === '/' ? '/ (raiz)' : screen.path}
                        </ScreenPath>
                      </ScreenInfo>

                      <ChevronWrapper>
                        <ChevronRight size={20} color="rgba(255,255,255,0.4)" />
                      </ChevronWrapper>
                    </ScreenCard>
                  </ScreenButton>
                );
              })}
            </ScreensList>
          </GroupSection>
        ))}

        <CredentialsBox>
          <CredentialsTitle>Credenciais de Demo</CredentialsTitle>
          <CredentialsList>
            <CredentialRow>
              <CredentialKey>Email</CredentialKey>
              <CredentialValue>demo@carewatch.com</CredentialValue>
            </CredentialRow>
            <CredentialRow>
              <CredentialKey>Senha</CredentialKey>
              <CredentialValue>demo123</CredentialValue>
            </CredentialRow>
            <CredentialRow>
              <CredentialKey>Serial</CredentialKey>
              <CredentialValue>CW01-2024-A1B2</CredentialValue>
            </CredentialRow>
          </CredentialsList>
        </CredentialsBox>
      </Content>
    </Container>
  );
}
