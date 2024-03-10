import { useForm } from 'react-hook-form';
import css from './RegisterPage.module.css';
import { Form } from 'components/Form/Form';

const RegisterPage = () => {
  const {
    register,

    formState: { errors },
  } = useForm();
  return (
    <div className={css.section}>
      <Form>
        <label className={css.label}>
          <span>Name</span>
          <input
            className={css.labelInput}
            {...register('name', { required: true })}
            type="text"
          />
          {errors.name && <span>This field is required</span>}
        </label>
      </Form>
    </div>
  );
};

export default RegisterPage;
