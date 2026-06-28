import { Navigate } from 'react-router';

export default function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
