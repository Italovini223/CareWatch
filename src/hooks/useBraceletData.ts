import { useState, useEffect } from 'react';
import { ref, onValue, DataSnapshot } from 'firebase/database';
import { rtdb } from '../lib/firebase';

export type BraceletReading = {
  batimentos: number;
  braceletSerial: string;
  queda: boolean;
  spo2: number;
  timestamp: number;
};

export function useBraceletData(braceletSerial: string | null | undefined) {
  const [reading, setReading] = useState<BraceletReading | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!braceletSerial) {
      setLoading(false);
      return;
    }

    const unsubscribe = onValue(ref(rtdb, 'pulseira_1'), (snapshot: DataSnapshot) => {
      if (!snapshot.exists()) {
        console.log('[useBraceletData] pulseira_1 vazia ou inexistente');
        setReading(null);
        setLoading(false);
        return;
      }

      // Varre TODAS as leituras e filtra pelo braceletSerial do usuário
      let latest: BraceletReading | null = null;
      let totalEntries = 0;
      let matchedEntries = 0;

      snapshot.forEach((child) => {
        totalEntries++;
        const data = child.val() as BraceletReading;

        if (data.braceletSerial === braceletSerial) {
          matchedEntries++;
          if (!latest || data.timestamp > latest.timestamp) {
            latest = data;
          }
        }
      });

      console.log(
        `[useBraceletData] total de entradas: ${totalEntries} | entradas do serial "${braceletSerial}": ${matchedEntries}`
      );
      console.log('[useBraceletData] leitura mais recente:', latest);

      setReading(latest);
      setLastUpdate(latest ? new Date() : null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [braceletSerial]);

  return { reading, lastUpdate, loading };
}
