import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useTheme } from 'styled-components/native';
import { auth } from '../lib/firebase';
import { AppRoutes } from './app.routes';
import { UserRoutes } from './user.routes';

export function Routes() {
  const { COLORS } = useTheme();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const navTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: COLORS.GRAY[50] },
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.GRAY[50] }}>
        <ActivityIndicator size="large" color={COLORS.BLUE[600]} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={navTheme}>
      {user ? <AppRoutes /> : <UserRoutes />}
    </NavigationContainer>
  );
}
