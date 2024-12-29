import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedUserTypes?: ('patient' | 'doctor')[];
}

export default function ProtectedRoute({
  children,
  allowedUserTypes,
}: ProtectedRouteProps) {
  const { isAuthenticated, userType } = useSelector(
    (state: RootState) => state.auth
  );
  const { loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedUserTypes && userType && !allowedUserTypes.includes(userType)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
