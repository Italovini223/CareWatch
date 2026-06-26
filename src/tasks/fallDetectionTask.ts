import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Notifications from 'expo-notifications';
import { ref, query, orderByChild, limitToLast, get } from 'firebase/database';
import { rtdb } from '../lib/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FALL_DETECTION_TASK = 'FALL_DETECTION_TASK';

const LAST_ALERTED_KEY = '@carewatch:lastFallAlertedTimestamp';

TaskManager.defineTask(FALL_DETECTION_TASK, async () => {
  try {
    const snapshot = await get(
      query(ref(rtdb, 'pulseira_1'), orderByChild('timestamp'), limitToLast(1))
    );

    if (!snapshot.exists()) return BackgroundFetch.BackgroundFetchResult.NoData;

    let latest: { queda: boolean; batimentos: number; spo2: number; timestamp: number } | null = null;
    snapshot.forEach((child) => {
      latest = child.val();
    });

    if (!latest || !latest.queda) return BackgroundFetch.BackgroundFetchResult.NoData;

    // Evita re-alertar a mesma queda
    const lastAlerted = await AsyncStorage.getItem(LAST_ALERTED_KEY);
    if (lastAlerted === String(latest.timestamp)) {
      return BackgroundFetch.BackgroundFetchResult.NoData;
    }

    await AsyncStorage.setItem(LAST_ALERTED_KEY, String(latest.timestamp));

    await Notifications.scheduleNotificationAsync({
      content: {
        title: '🚨 Queda Detectada!',
        body: `Uma queda foi detectada. BPM: ${latest.batimentos} | SpO₂: ${latest.spo2}%`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.MAX,
        data: { timestamp: latest.timestamp },
      },
      trigger: null,
    });

    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

export async function registerFallDetectionTask() {
  const status = await BackgroundFetch.getStatusAsync();
  if (
    status === BackgroundFetch.BackgroundFetchStatus.Restricted ||
    status === BackgroundFetch.BackgroundFetchStatus.Denied
  ) {
    console.log('[FallTask] Background fetch não permitido neste dispositivo.');
    return;
  }

  const isRegistered = await TaskManager.isTaskRegisteredAsync(FALL_DETECTION_TASK);
  if (!isRegistered) {
    await BackgroundFetch.registerTaskAsync(FALL_DETECTION_TASK, {
      minimumInterval: 60, // checar a cada 60 segundos
      stopOnTerminate: false,
      startOnBoot: true,
    });
    console.log('[FallTask] Tarefa registrada.');
  }
}
