import { ContactForm } from './Contact-form/ContactForm';
import { ContactList } from './Contact-list/ContactList';
import { Filter } from './Filter/Filter';

const ContactsPage = () => {
  return (
    <div>
      Contacts Page
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
