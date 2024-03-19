import { useForm } from 'react-hook-form';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk, registerThunk } from 'redux/authReducer';
import { useEffect } from 'react';
import Notiflix from 'notiflix';

export const Form = ({ children, login }) => {
  const isAuthentication = useSelector(state => state.auth.authentication);
  const error = useSelector(state => state.auth.error);

  useEffect(() => {
    if (error) {
      return Notiflix.Notify.failure('Error');
    }
    if (isAuthentication) {
      return Notiflix.Notify.success('Registration succes');
    }
  }, [error, isAuthentication]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    if (login) {
      dispatch(loginThunk(data));
      reset();
      return;
    }
    dispatch(registerThunk(data));
    reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.form__wrepperLabel}>
        <label className={css.label}>
          <span>Email</span>
          <input
            className={css.labelInput}
            {...register('email', { required: true })}
            type="email"
          />
          {errors.email && <span>This field is required</span>}
        </label>

        {children}

        <label className={css.label}>
          <span>Password</span>
          <input
            className={css.labelInput}
            {...register('password', { required: true, minLength: 8 })}
            type="password"
          />
          {errors.password && <span>This field is required</span>}
        </label>
      </div>

      <button className={css.form__button} type="submit">
        {login ? 'Sign Up' : 'Sign In'}
      </button>
    </form>
  );
};
