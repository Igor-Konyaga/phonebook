import { ContactForm } from './Contact-form/ContactForm';
import { ContactList } from './Contact-list/ContactList';
import { Filter } from './Filter/Filter';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <section className={css.section}>
      <ContactForm />
      <Filter />
      <ContactList />
    </section>
  );
};

export default ContactsPage;
