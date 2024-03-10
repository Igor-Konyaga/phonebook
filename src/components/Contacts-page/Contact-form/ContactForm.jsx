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
    console.log('contact: ', contact);

    dispatch(fetchAddContact(contact));

    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={css.label}>
        {/* <span>Name</span> */}
        <input
          className={css.input}
          {...register('name', { required: true })}
          type="text"
			 placeholder='enter name'
        />
        {errors.name && <span>This field is required</span>}
      </label>

      <label className={css.label}>
        {/* <span>Number</span> */}
        <input
          className={css.input}
          {...register('number', { required: true })}
          type="text"
			 placeholder='enter number'
        />
        {errors.number && <span>This field is required</span>}
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

//  <form onSubmit={handleSubmit} className={css.form}>
//    <label className={css.label}>
//      Name
//      <input className={css.input} type="text" name="name" required />
//    </label>
//    <label className={css.label}>
//      Number
//      <input className={css.input} type="tel" name="number" required />
//    </label>

//    <button className={css.btn} type="submit">
//      {isLoadingForm ? (
//        <RotatingLines
//          strokeColor="grey"
//          strokeWidth="4"
//          animationDuration="0.75"
//          width="18"
//          visible={true}
//        />
//      ) : (
//        ' add contact'
//      )}
//    </button>
//  </form>
