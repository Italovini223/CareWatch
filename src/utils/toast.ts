import { Alert, Platform, ToastAndroid } from 'react-native';

type ToastFn = (message: string) => void;

type ToastApi = {
  success: ToastFn;
  error: ToastFn;
};

let webToast: { success?: ToastFn; error?: ToastFn } | null = null;
if (Platform.OS === 'web') {
  webToast = require('sonner').toast;
}

const showNativeToast = (message: string, title: string) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
    return;
  }
  Alert.alert(title, message);
};

export const toast: ToastApi = {
  success: (message) => {
    if (Platform.OS === 'web' && webToast?.success) {
      webToast.success(message);
      return;
    }
    showNativeToast(message, 'Sucesso');
  },
  error: (message) => {
    if (Platform.OS === 'web' && webToast?.error) {
      webToast.error(message);
      return;
    }
    showNativeToast(message, 'Erro');
  },
};
