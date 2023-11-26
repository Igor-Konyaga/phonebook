import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const authentication = useSelector(state => state.auth.authentication);

  return authentication ? children : <Navigate to={redirectTo} replace />;
};


