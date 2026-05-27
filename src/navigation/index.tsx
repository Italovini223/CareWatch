import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { AppRoutes } from './app.routes';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { ScreensOverview } from '../screens/ScreensOverview';
import { ProtectedRoute } from '../components/ProtectedRoute';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ScreensOverview: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabs() {
  return (
    <ProtectedRoute>
      <AppRoutes />
    </ProtectedRoute>
  );
}

export function Routes() {
  const { COLORS } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = COLORS.GRAY[50];

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ScreensOverview" component={ScreensOverview} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}