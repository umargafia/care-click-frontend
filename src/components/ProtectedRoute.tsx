import { Navigate, useLocation } from 'react-router-dom';
import authService from '../services/auth.service';

interface ProtectedRouteProps {
  children: React.ReactNode;
  roles?: string[];
}

export default function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
  const user = authService.getCurrentUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
} 