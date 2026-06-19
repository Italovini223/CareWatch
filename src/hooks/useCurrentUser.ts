import { useState, useEffect } from 'react';
import { onValue, ref } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, rtdb } from '../lib/firebase';

export type UserData = {
  elderName: string;
  age: number | null;
  email: string;
  phone: string;
  braceletSerial: string;
  birthDate: string;
  passwordHash: string;
  createdAt: string;
};

export function useCurrentUser() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Espera o estado de auth estabilizar antes de assinar o RTDB
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setUserData(null);
        setLoading(false);
        return;
      }

      const userRef = ref(rtdb, `users/${user.uid}`);
      const unsubscribeDb = onValue(userRef, (snapshot) => {
        setUserData(snapshot.exists() ? (snapshot.val() as UserData) : null);
        setLoading(false);
      });

      return () => unsubscribeDb();
    });

    return () => unsubscribeAuth();
  }, []);

  return { userData, loading };
}
