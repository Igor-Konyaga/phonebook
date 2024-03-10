import css from './MainTitle.module.css';
import { LiaSearchSolid } from 'react-icons/lia';

export const MainTitle = () => {
  return (
    <div className={css.mainTitleSection}>
      <div className={css.wrapperIcon}>
        <LiaSearchSolid />
      </div>
      <h1 className={css.mainTitle}>Telephone directory</h1>
    </div>
  );
};
