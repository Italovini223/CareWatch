import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

import { Routes } from './src/navigation';
import theme from './src/theme';



export default function App() {
  const WebToaster = Platform.OS === 'web' ? require('sonner').Toaster : null;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        {WebToaster ? <WebToaster richColors position="top-center" /> : null}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}


