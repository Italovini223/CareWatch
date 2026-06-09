import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { useTheme } from "styled-components/native"

import { Login } from "../screens/Login/"
import { Register } from "../screens/Register"


type UserRoutes = {
    Login: undefined;
    Register: undefined;
}

export type UserNavigatorRoutesProps = BottomTabNavigationProp<UserRoutes>

const { Navigator, Screen } = createBottomTabNavigator<UserRoutes>();

export function UserRoutes() {
  const { COLORS } = useTheme();

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
        name="Login"
        component={Login}
        options={{
          tabBarShowLabel: false,
        }}
      />

      <Screen 
        name="Register"
        component={Register}
        options={{
          tabBarShowLabel: false,
        }}
      />

    
    </Navigator>
  )
}