import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormStyled, FormPair, LabelStyled } from './contactForm.styled';

export class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onFormChange(event);
  }

  handleSubmit(event) {
    this.props.onFormSubmit(event);
  }

  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    const { name, number } = this.props;
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <FormPair>
          <LabelStyled htmlFor={this.nameInputId}>Name</LabelStyled>
          <input
            type="text"
            name="name"
            id={this.nameInput}
            value={name}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </FormPair>
        <FormPair>
          <LabelStyled htmlFor={this.numberInputId}>Number</LabelStyled>
          <input
            type="tel"
            name="number"
            id={this.numberInputId}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </FormPair>
        <button type="submit">Add contact</button>
      </FormStyled>
    );
  }
}
