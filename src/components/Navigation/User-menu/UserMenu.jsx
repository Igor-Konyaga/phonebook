import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logoutThunk } from 'redux/authReducer';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector(state => state.auth.user.email);
  return (
    <div className={css.userMenu}>
      <p>{userEmail}</p>
      <button onClick={() => dispatch(logoutThunk())} className={css.btn}>
        Logout
      </button>
    </div>
  );
};
