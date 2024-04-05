import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper } from './app.styled';
import { ContactForm } from './ContactForm/contactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/contactList';
// import { ToastContainer, toast } from 'react-toastify';
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = event => {
    event.preventDefault();
    const { contacts } = this.state;
    const name = event.target.name.value;
    const number = event.target.number.value;
    const existContact = contacts.find(contact => contact.name === name);

    if (existContact) {
      console.log('Contact to ', name, ' is already in contacts!');
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = { name: name, number: number, id: nanoid() };
    this.setState({ contacts: [...contacts, newContact] });
    event.target.reset();
  };

  deleteContact = event => {
    const { id } = event.target.name;
    const { contacts } = this.state;
    const newContacts = contacts.splice(contacts.indexOf(id), 1);
    console.log('newContacts: ', newContacts);
  };

  render() {
    const { filter, contacts } = this.state;
    console.log('filter: ', filter)
    console.log('contacts: ', contacts);
    // let filteredContacts = contacts.filter(contact => contact.name.toLower().includes(filter.toLower));
    // console.log('filteredContacts: ', filteredContacts);
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm
          onFormSubmit={this.handleAddContact}
        />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onSearchChange={this.handleFormChange}
          // onSearchChange={this.handleSearchChange}
        />
        <ContactList
          // contacts={filteredContacts}
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </Wrapper>
    );
  }
}
