import { UserMenu } from 'components/Navigation/User-menu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const authentication = useSelector(state => state.auth.authentication);

  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
        {authentication ? (
          <>
            <NavLink className={css.headerLink} to="/contacts">
              Contacts
            </NavLink>
            <NavLink className={css.headerLink} to="/products">
              Products
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className={css.headerLink} to="/register">
              Register
            </NavLink>
            <NavLink className={css.headerLink} to="/login">
              Login
            </NavLink>
          </>
        )}
      </nav>
      {authentication && <UserMenu />}
    </header>
  );
};
