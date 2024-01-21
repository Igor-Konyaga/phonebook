import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authReducer';
import css from './RegisterPage.module.css'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {

    dispatch(registerThunk(data));

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.form__wrepperLabel}>
		<label className={css.label}>
        <span>Email</span>
        <input className={css.labelInput} {...register('email', { required: true })} type="email" />
        {errors.email && <span>This field is required</span>}
      </label>

      <label className={css.label}>
        <span >Name</span>
        <input className={css.labelInput} {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </label>

      <label className={css.label}>
        <span >Password</span>
        <input className={css.labelInput}
          {...register('password', { required: true, minLength: 8 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>
		</div>

      <button className={css.form__button} type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterPage;
