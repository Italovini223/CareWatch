import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { useTheme } from "styled-components/native"

import { Dashboard } from "../screens/Dashboard/index.native"
import { BloodPressureHistory } from "../screens/BloodPressureHistory/index.native"
import { HeartRateHistory } from "../screens/HeartRateHistory/index.native"
import { FallsHistory } from "../screens/FallsHistory/index.native"

import { Home, Activity, Heart, AlertTriangle } from 'lucide-react-native';

type AppRoutes = {
  Dashboard: undefined;
  BloodPressure: undefined;
  HeartRate: undefined;
  Falls: undefined;
  ScreensOverview: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { COLORS } = useTheme();
  const iconSize = 26;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.GRAY[400],
        tabBarActiveTintColor: COLORS.BLUE[600],
        tabBarStyle: {
          display: 'none',
        },
      }}
    >

      <Screen 
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => <Home size={iconSize} color={color} />
        }}
      />

      <Screen 
        name="BloodPressure"
        component={BloodPressureHistory}
        options={{
          tabBarIcon: ({ color }) => <Activity size={iconSize} color={color} />
        }}
      />

      <Screen
        name="HeartRate"
        component={HeartRateHistory}
        options={{
          tabBarIcon: ({ color }) => <Heart size={iconSize} color={color} />
        }}
      />

      <Screen
        name="Falls"
        component={FallsHistory}
        options={{
          tabBarIcon: ({ color }) => <AlertTriangle size={iconSize} color={color} />
        }}
      />
    </Navigator>
  )
}