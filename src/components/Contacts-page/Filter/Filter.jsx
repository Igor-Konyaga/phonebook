import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/contactsReducer';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const filterName = e.target.value;
    dispatch(setFilter(filterName));
  };

  return (
    <div className={css.filterSection}>
        <input
          className={css.input}
          onChange={handleFilter}
          type="text"
          placeholder="find contacts by name"
        />
    </div>
  );
};
