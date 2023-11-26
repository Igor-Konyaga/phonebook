import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ children, redirectTo = '/products' }) => {
  const authentication = useSelector(state => state.auth.authentication);

  return authentication ? <Navigate to={redirectTo} replace /> : children;
};
