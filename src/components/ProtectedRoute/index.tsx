import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const DEMO_USER = {
  email: 'demo@carewatch.com',
  password: 'demo123',
  braceletSerial: 'CW01-2024-A1B2',
  name: 'Maria Silva',
  createdAt: new Date().toISOString(),
};

async function ensureDemoUser() {
  const usersRaw = await AsyncStorage.getItem('users');
  const users = JSON.parse(usersRaw || '[]');
  if (!users.find((u: any) => u.email === DEMO_USER.email)) {
    users.push(DEMO_USER);
    await AsyncStorage.setItem('users', JSON.stringify(users));
  }
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = (await AsyncStorage.getItem('isAuthenticated')) === 'true';
      if (!isAuthenticated) {
        await ensureDemoUser();
        await AsyncStorage.setItem('isAuthenticated', 'true');
        await AsyncStorage.setItem('currentUser', JSON.stringify(DEMO_USER));
      }
      setReady(true);
    };

    checkAuth();
  }, []);

  if (!ready) return null;

  return <>{children}</>;
}
