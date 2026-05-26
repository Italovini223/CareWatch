import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
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
} from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import {
  Backdrop,
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
  ScreenName,
  ActiveChip,
  ScreenDescription,
  ChevronIcon,
  FloatingButton,
} from './styles';

const screens = [
  {
    label: 'Login',
    description: 'Tela de autenticação',
    path: '/login',
    icon: LogIn,
    lightColor: '#EFF6FF',
    textColor: '#2563EB',
  },
  {
    label: 'Cadastro',
    description: 'Registro de nova conta',
    path: '/register',
    icon: UserPlus,
    lightColor: '#F5F3FF',
    textColor: '#7C3AED',
  },
  {
    label: 'Dashboard',
    description: 'Monitoramento em tempo real',
    path: '/',
    icon: Home,
    lightColor: '#EFF6FF',
    textColor: '#1D4ED8',
  },
  {
    label: 'Pressão Sanguínea',
    description: 'Histórico e gráficos',
    path: '/blood-pressure',
    icon: Activity,
    lightColor: '#F0F9FF',
    textColor: '#0284C7',
  },
  {
    label: 'Batimentos',
    description: 'Frequência cardíaca',
    path: '/heart-rate',
    icon: Heart,
    lightColor: '#FEF2F2',
    textColor: '#DC2626',
  },
  {
    label: 'Histórico de Quedas',
    description: 'Ocorrências detectadas',
    path: '/falls',
    icon: AlertTriangle,
    lightColor: '#FFF7ED',
    textColor: '#EA580C',
  },
];

export function PrototypeMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <Drawer
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          >
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
                  <X size={16} color="#4B5563" />
                </CloseButton>
              </DrawerHeader>

              <ProtoBadge>
                <PulseDot />
                <ProtoBadgeText>Modo Protótipo — 6 telas disponíveis</ProtoBadgeText>
              </ProtoBadge>

              <ScreenList>
                {screens.map((screen) => {
                  const Icon = screen.icon;
                  const isActive = location.pathname === screen.path;

                  return (
                    <ScreenItem
                      key={screen.path}
                      $active={isActive}
                      onPress={() => handleNavigate(screen.path)}
                    >
                      <ScreenIconWrapper $lightColor={screen.lightColor}>
                        <Icon size={20} color={screen.textColor} />
                      </ScreenIconWrapper>
                      <ScreenInfo>
                        <ScreenName $active={isActive}>
                          {screen.label}
                          {isActive && <ActiveChip> Atual</ActiveChip>}
                        </ScreenName>
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
        )}
      </AnimatePresence>

      <FloatingButton
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        title="Navegação de Telas"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <X key="close" size={20} />
          ) : (
            <LayoutGrid key="grid" size={20} />
          )}
        </AnimatePresence>
      </FloatingButton>
    </>
  );
}
