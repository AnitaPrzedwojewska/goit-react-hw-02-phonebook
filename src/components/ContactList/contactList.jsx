export const ContactList = ({ contacts, filter, onFilterChange, onDeleteContact }) => {
  const filteredContacts = onFilterChange();
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}, {contact.number}
          <button type="button" name={contact.id} onClick={onDeleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
