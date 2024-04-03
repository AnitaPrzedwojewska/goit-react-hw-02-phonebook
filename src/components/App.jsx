import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper } from './app.styled';
import { ContactForm } from './ContactForm/contactForm';
// import { Search } from './Search/search';
import { ContactList } from './ContactList/contactList';

export class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   contacts: [],
    //   name: '',
    //   number: '',
    //   filter: ''
    // };

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, number, contacts } = this.state;
    const contactId = nanoid();

    contacts.push({ id: contactId, name: name, number: number });
    this.setState({ [name]: '' });
  };

  handleSearchChange = event => {
    const { filter } = event.target.value;
    this.setState({ filter: filter });
  }

  render() {
    return (
      <Wrapper>
        <h2>Phonebook</h2>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          contacts={this.state.contacts}
          onFormChange={this.handleFormChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <h2>Contacts</h2>
        {/* <Search filter={this.state.filter} onSearchChange={this.handleSearchChange} /> */}
        <ContactList contacts={this.state.contacts} filter={this.state.filter} />
      </Wrapper>
    );
  }
}
