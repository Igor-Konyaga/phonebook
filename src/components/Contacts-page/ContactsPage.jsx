import { ContactForm } from './Contact-form/ContactForm';
import { ContactList } from './Contact-list/ContactList';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <section className={css.section}>
      <ContactForm />
      <ContactList />
    </section>
  );
};

export default ContactsPage;
