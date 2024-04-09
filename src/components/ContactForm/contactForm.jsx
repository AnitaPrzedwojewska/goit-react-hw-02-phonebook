import { nanoid } from 'nanoid';
import { FormStyled, FormPair, LabelStyled, InputStyled, ButtonStyled } from './contactForm.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     name: '',
  //     value: ''
  //   }
  // }

  // changeInput = (event) => {
  //     const { name, value } = event.target;
  //     this.setState({ [name] : value });
  //   };

  submitForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const newContact = { name, number, id: nanoid() };
    this.props.onFormSubmit(newContact);
    event.currentTarget.reset();
    // this.setState({ name: '' });
    // this.setState({ number: '' });
  }

  render() {
    // const { name, number } = this.state;
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    return (
      <FormStyled onSubmit={this.submitForm}>
        <FormPair>
          <LabelStyled htmlFor={nameInputId}>Name:</LabelStyled>
          <InputStyled
            type="text"
            name="name"
            id={nameInputId}
            // value={name}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // onChange={this.changeInput}
            required
          />
        </FormPair>
        <FormPair>
          <LabelStyled htmlFor={numberInputId}>Number:</LabelStyled>
          <InputStyled
            type="tel"
            name="number"
            id={numberInputId}
            // value={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // onChange={this.changeInput}
            required
          />
        </FormPair>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    );
  };
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string
};