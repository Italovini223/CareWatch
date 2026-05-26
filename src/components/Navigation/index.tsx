import { Home, Activity, Heart, AlertTriangle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import { NavBar, NavInner, NavButton, NavLabel } from './styles';

const navItems = [
  { icon: Home, label: 'Início', path: '/' },
  { icon: Activity, label: 'Pressão', path: '/blood-pressure' },
  { icon: Heart, label: 'Coração', path: '/heart-rate' },
  { icon: AlertTriangle, label: 'Quedas', path: '/falls' },
];

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <NavBar>
      <NavInner>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavButton
              key={item.path}
              $active={isActive}
              onPress={() => navigate(item.path)}
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
