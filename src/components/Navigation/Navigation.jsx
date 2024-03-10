import { UserMenu } from 'components/Navigation/User-menu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { MainTitle } from 'components/MainTitle/MainTitle';

export const Navigation = () => {
  const authentication = useSelector(state => state.auth.authentication);

  return (
    <header className={css.header}>
      <MainTitle />
      <div className={css.wrapperMenuLinks}>
        <nav className={css.navigation}>
          <NavLink
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          {authentication ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  `${css.headerLink} ${isActive ? css.active : ''}`
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  `${css.headerLink} ${isActive ? css.active : ''}`
                }
                to="/register"
              >
                Register
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${css.headerLink} ${isActive ? css.active : ''}`
                }
                to="/login"
              >
                Login
              </NavLink>
            </>
          )}
        </nav>
        {authentication && <UserMenu />}
      </div>
    </header>
  );
};
