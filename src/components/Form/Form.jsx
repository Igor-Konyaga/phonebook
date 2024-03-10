import { useForm } from 'react-hook-form';
import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk, registerThunk } from 'redux/authReducer';

export const Form = ({ children, login }) => {
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
