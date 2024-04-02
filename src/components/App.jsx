import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper } from './app.styled';
import { PhoneBookForm } from './PhoneBookForm/phoneBookForm';
import { Contacts } from './Contacts/contacts';

export class App extends Component {
  constructor() {
    super();

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      contacts: [],
      name: '',
    };
  }

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, contacts } = this.state;
    const contactId = nanoid();

    contacts.push({ contactId, name });
    this.setState({ [name]: '' });
  };

  render() {
    return (
      <Wrapper>
        <h2>Phonebook</h2>
        <PhoneBookForm
          name={this.state.name}
          contacts={this.state.contacts}
          onFormChange={this.handleFormChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </Wrapper>
    );
  }
}
