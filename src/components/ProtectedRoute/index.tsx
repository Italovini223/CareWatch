import React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const DEMO_USER = {
  email: 'demo@carewatch.com',
  password: 'demo123',
  braceletSerial: 'CW01-2024-A1B2',
  name: 'Maria Silva',
  createdAt: new Date().toISOString(),
};

function ensureDemoUser() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (!users.find((u: any) => u.email === DEMO_USER.email)) {
    users.push(DEMO_USER);
    localStorage.setItem('users', JSON.stringify(users));
  }
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    ensureDemoUser();
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(DEMO_USER));
  }

  return <>{children}</>;
}
