import { ContactForm } from './Contact-form/ContactForm';
import { ContactList } from './Contact-list/ContactList';
import css from './ContactsPage.module.css';
import { Filter } from './Filter/Filter';

const ContactsPage = () => {
  return (
    <section className={css.section}>
      <div className={css.wrapperFormFilter}>
        <Filter />
        <ContactForm />
      </div>
      <ContactList />
    </section>
  );
};

export default ContactsPage;
