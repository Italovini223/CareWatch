import { ThemeProvider } from 'styled-components';

import theme from './src/theme'

import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider } from 'react-native-safe-area-context';



import { Home } from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaProvider>

    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

    </SafeAreaProvider>
  );
}


