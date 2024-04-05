export const ContactList = ({ contacts, filter }) => {
  return (
    <ul>
      {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}, {contact.number}
          <button type="button"
            name={contact.id}
            // onClick={deleteContact}
          >Delete</button>
          </li>))}
    </ul>
  );
};
