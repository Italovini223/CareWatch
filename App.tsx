import { ThemeProvider } from 'styled-components';

import { RouterProvider } from 'react-router';
import { router } from './src/routers';

import { Toaster } from 'sonner';


import theme from './src/theme'

import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
  return (
    <SafeAreaProvider>

    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-center" />
    </ThemeProvider>

    </SafeAreaProvider>
  );
}


