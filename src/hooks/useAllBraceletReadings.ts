import { useState, useEffect } from 'react';
import { ref, onValue, DataSnapshot } from 'firebase/database';
import { rtdb } from '../lib/firebase';
import { BraceletReading } from './useBraceletData';

export type BraceletReadingWithKey = BraceletReading & { key: string };

export function useAllBraceletReadings(braceletSerial: string | null | undefined) {
  const [readings, setReadings] = useState<BraceletReadingWithKey[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!braceletSerial) {
      setLoading(false);
      return;
    }

    const unsubscribe = onValue(ref(rtdb, 'pulseira_1'), (snapshot: DataSnapshot) => {
      if (!snapshot.exists()) {
        setReadings([]);
        setLoading(false);
        return;
      }

      const matched: BraceletReadingWithKey[] = [];
      snapshot.forEach((child) => {
        const data = child.val() as BraceletReading;
        if (data.braceletSerial === braceletSerial) {
          matched.push({ ...data, key: child.key ?? '' });
        }
      });

      // Sort ascending by timestamp so the chart flows left → right chronologically
      matched.sort((a, b) => a.timestamp - b.timestamp);

      setReadings(matched);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [braceletSerial]);

  return { readings, loading };
}
