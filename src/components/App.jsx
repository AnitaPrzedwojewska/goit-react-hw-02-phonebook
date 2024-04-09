import React, { Component } from 'react';
import { Wrapper } from './app.styled';
import { ContactForm } from './ContactForm/contactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/contactList';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: ''
    };

    this.changeFilter = this.changeFilter.bind(this);
    this.addContact = this.addContact.bind(this);
    this.filterContacts = this.filterContacts.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  changeFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  addContact = (newContact) => {
    const { contacts } = this.state;
    const existContact = contacts.find(contact => contact.name === newContact.name);

    if (existContact) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    this.setState({ contacts: [...contacts, newContact] });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return (filter.trim() === '') ? contacts : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  }

  deleteContact = event => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== event.target.name),
    });
  };

  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilterChange={this.changeFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onFilterChange={this.filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
