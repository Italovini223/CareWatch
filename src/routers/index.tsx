import { createBrowserRouter } from 'react-router';
import {Dashboard} from '../screens/Dashboard';
import {BloodPressureHistory} from '../screens/BloodPressureHistory';
import {HeartRateHistory} from '../screens/HeartRateHistory';
import {FallsHistory} from '../screens/FallsHistory';
import {Login} from '../screens/Login';
import {ScreensOverview} from '../screens/ScreensOverview';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { Register } from '../screens/Register';

export const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/register',
    Component: Register,
  },
  {
    path: '/screens',
    Component: ScreensOverview,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/blood-pressure',
    element: (
      <ProtectedRoute>
        <BloodPressureHistory />
      </ProtectedRoute>
    ),
  },
  {
    path: '/heart-rate',
    element: (
      <ProtectedRoute>
        <HeartRateHistory />
      </ProtectedRoute>
    ),
  },
  {
    path: '/falls',
    element: (
      <ProtectedRoute>
        <FallsHistory />
      </ProtectedRoute>
    ),
  },
]);
