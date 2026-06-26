import { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

import { onAuthStateChanged } from 'firebase/auth';
import { ref, update } from 'firebase/database';
import { auth, rtdb } from './src/lib/firebase';
import { registerFallDetectionTask } from './src/tasks/fallDetectionTask';
import { Routes } from './src/navigation';
import theme from './src/theme';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

async function registerForPushNotificationsAsync(): Promise<string | null> {
  if (!Device.isDevice) {
    console.log('[PUSH] Notificações requerem dispositivo físico.');
    return null;
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#2563EB',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    console.log('[PUSH] Permissão negada pelo usuário.');
    return null;
  }

  const projectId =
    Constants.expoConfig?.extra?.eas?.projectId ?? Constants.easConfig?.projectId;

  const token = await Notifications.getExpoPushTokenAsync({ projectId });
  console.log('========================================');
  console.log('[EXPO PUSH TOKEN]', token.data);
  console.log('========================================');
  return token.data;
}

export default function App() {
  const WebToaster = Platform.OS === 'web' ? require('sonner').Toaster : null;
  const notificationListener = useRef<Notifications.EventSubscription | null>(null);
  const responseListener = useRef<Notifications.EventSubscription | null>(null);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      const token = await registerForPushNotificationsAsync();
      if (token) {
        await update(ref(rtdb, `users/${user.uid}`), { expoPushToken: token });
      }
      await registerFallDetectionTask();
    });

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      console.log('[PUSH] Notificação recebida:', notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('[PUSH] Usuário tocou na notificação:', response);
    });

    return () => {
      unsubscribeAuth();
      notificationListener.current?.remove();
      responseListener.current?.remove();
    };
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        {WebToaster ? <WebToaster richColors position="top-center" /> : null}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}


