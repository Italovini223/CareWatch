import { Home, Activity, Heart, AlertTriangle } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavBar, NavInner, NavButton, NavLabel } from './styles';

const navItems = [
  { icon: Home, label: 'Início', routeName: 'Dashboard' },
  { icon: Activity, label: 'Pressão', routeName: 'BloodPressure' },
  { icon: Heart, label: 'Coração', routeName: 'HeartRate' },
  { icon: AlertTriangle, label: 'Quedas', routeName: 'Falls' },
];

export function Navigation() {
  const route = useRoute();
  const navigation = useNavigation<any>();

  return (
    <NavBar>
      <NavInner>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = route.name === item.routeName;
          return (
            <NavButton
              key={item.routeName}
              $active={isActive}
              onPress={() => navigation.navigate(item.routeName)}
            >
              <Icon size={24} />
              <NavLabel>{item.label}</NavLabel>
            </NavButton>
          );
        })}
      </NavInner>
    </NavBar>
  );
}
