import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useEffect } from 'react';
import { login } from '../app/counterSlice';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuthenticated) {
      const users = JSON.parse(localStorage.getItem('user') || '{}');
      const userType = localStorage.getItem('userType') as 'patient' | 'doctor';
      if (users && userType) {
        dispatch(login({ user: users, token: users.token, userType }));
      } else {
        navigate('/login');
      }
    }
  }, [isAuthenticated]);

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
