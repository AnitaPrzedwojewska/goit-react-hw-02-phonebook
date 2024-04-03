export const ContactList = ({ contacts, filter }) => {
  return (
    <ul>
      {contacts.map(contact => (

          <li key={contact.id}>
            {contact.name}, {contact.number}
          </li>))}
    </ul>
  );
};
