import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './Restricted-route/RestrictedRoute';
import { PrivateRoute } from './Private-route/PrivateRoute';
import { refreshThunk } from 'redux/authReducer';
import { SharedLayout } from './SharedLayout/SharedLayout';

const RegisterPage = lazy(() => import('./Register-page/RegisterPage'));
const LoginPage = lazy(() => import('./Login-page/LoginPage'));
const ContactsPage = lazy(() => import('./Contacts-page/ContactsPage'));
const HomePage = lazy(() => import('./Home-page/HomePage'));

export const App = () => {
  //   const error = useSelector(state => state.contactsReducer.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
