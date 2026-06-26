import * as admin from 'firebase-admin';
import { onValueCreated } from 'firebase-functions/v2/database';

admin.initializeApp();

const db = admin.database();

export const alertaQueda = onValueCreated(
  { ref: '/pulseira_1/{readingId}', region: 'us-central1' },
  async (event) => {
    const reading = event.data.val() as {
      queda: boolean;
      braceletSerial: string;
      batimentos: number;
      spo2: number;
      timestamp: number;
    };

    if (!reading.queda) return null;

    // Busca todos os usuários para achar quem tem esse braceletSerial
    const usersSnap = await db.ref('users').once('value');
    if (!usersSnap.exists()) return null;

    const tokens: string[] = [];

    usersSnap.forEach((userSnap) => {
      const user = userSnap.val();
      if (
        user.braceletSerial === reading.braceletSerial &&
        user.expoPushToken
      ) {
        tokens.push(user.expoPushToken);
      }
    });

    if (tokens.length === 0) {
      console.log('[alertaQueda] Nenhum token encontrado para', reading.braceletSerial);
      return null;
    }

    // Envia via Expo Push API
    const messages = tokens.map((token) => ({
      to: token,
      sound: 'default',
      title: '🚨 Queda Detectada!',
      body: `Uma queda foi detectada. BPM: ${reading.batimentos} | SpO₂: ${reading.spo2}%`,
      data: {
        braceletSerial: reading.braceletSerial,
        timestamp: reading.timestamp,
      },
      priority: 'high',
      channelId: 'default',
    }));

    const response = await fetch('https://exp.host/push/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate',
      },
      body: JSON.stringify(messages),
    });

    const result = await response.json();
    console.log('[alertaQueda] Expo Push response:', JSON.stringify(result));
    return null;
  }
);
