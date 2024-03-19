import { useForm } from 'react-hook-form';
import css from './ContactForm.module.css';
// import Notiflix from 'notiflix';
// import { RotatingLines } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
// import { addContact, setIsLoadingForm } from 'redux/authReducer';
import { fetchAddContact } from 'redux/contactsReducer';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  //   const isLoadingForm = useSelector(
  //     state => state.contactsReducer.setIsLoadingForm
  //   );

  const onSubmit = contact => {
    dispatch(fetchAddContact(contact));

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={css.input}
        {...register('name', { required: true })}
        type="text"
        placeholder="enter name"
      />
      {errors.name && <span>This field is required</span>}

      <input
        className={css.input}
        {...register('number', { required: true })}
        type="text"
        placeholder="enter number"
      />
      {errors.number && <span>This field is required</span>}

      <button className={css.btn} type="submit">
        Add
      </button>
    </form>
  );
};
