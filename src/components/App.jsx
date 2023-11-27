import { Suspense, lazy, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { ProductsPage } from './Products-page/ProductsPage';
import { useDispatch } from 'react-redux';
import {RestrictedRoute} from './Restricted-route/RestrictedRoute';
import {PrivateRoute} from './Private-route/PrivateRoute';
import { refreshThunk } from 'redux/authReducer';

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
    <div>
      <Navigation />
      <Suspense
        fallback={
          <TailSpin
            height="60"
            width="60"
            color="#fd8451"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
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
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );

  //  <div className={css.section}>
  //    {error !== null ? (
  //      <p className={css.error}> {error}</p>
  //    ) : (
  //      <>
  //        <h1 className={css.title}>Phonebooks</h1>
  //        <ContactForm />
  //        <h2 className={css.title}>Contacts</h2>
  //        <Filter />
  //        <ContactList />
  //      </>
  //    )}
  //  </div>
};
