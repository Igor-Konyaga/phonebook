import css from './LoginPage.module.css';
import { Form } from 'components/Form/Form';

const LoginPage = () => {
  return (
    <div className={css.section}>
      <Form login />
    </div>
  );
};

export default LoginPage;
