// app/routes/root.tsx
import { Outlet } from 'react-router';
import LoadingSpinner from '@/components/LoadingSpinner';

export function HydrateFallback() {
  return <LoadingSpinner />;
}

export default function RootLayout() {
  return <Outlet />;
}
