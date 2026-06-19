import { Home, Activity, Heart, AlertTriangle } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavBar, NavInner, NavButton, NavLabel, NAV_HEIGHT } from './styles';

export { NAV_HEIGHT };

const navItems = [
  { icon: Home, label: 'Início', routeName: 'Dashboard' },
  { icon: Activity, label: 'Pressão', routeName: 'BloodPressure' },
  { icon: Heart, label: 'Coração', routeName: 'HeartRate' },
  { icon: AlertTriangle, label: 'Quedas', routeName: 'Falls' },
];

export function Navigation() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const { COLORS } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <NavBar $bottomInset={insets.bottom}>
      <NavInner>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = route.name === item.routeName;
          const iconColor = isActive ? COLORS.BLUE[600] : COLORS.GRAY[600];
          return (
            <NavButton
              key={item.routeName}
              $active={isActive}
              onPress={() => navigation.navigate(item.routeName)}
            >
              <Icon size={24} color={iconColor} />
              <NavLabel>{item.label}</NavLabel>
            </NavButton>
          );
        })}
      </NavInner>
    </NavBar>
  );
}
