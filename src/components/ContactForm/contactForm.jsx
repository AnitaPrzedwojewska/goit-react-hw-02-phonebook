import { nanoid } from 'nanoid';
import { FormStyled, FormPair, LabelStyled } from './contactForm.styled';
import { Component } from 'react';

export class ContactForm extends Component {
  constructor() {
    super();

    this.changeInput = this.changeInput.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      name: '',
      value: ''
    }
  }

  changeInput = event => {
      const { name, value } = event.target;
      this.setState({ [name] : value });
    };

  submitForm = (event) => {
    this.props.onFormSubmit(event);
  }

  render() {
    const { name, number } = this.state;
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    return (
      <FormStyled onSubmit={this.submitForm}>
        <FormPair>
          <LabelStyled htmlFor={nameInputId}>Name</LabelStyled>
          <input
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            pattern="[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.changeInput}
            required
          />
        </FormPair>
        <FormPair>
          <LabelStyled htmlFor={numberInputId}>Number</LabelStyled>
          <input
            type="tel"
            name="number"
            id={numberInputId}
            value={number}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.changeInput}
            required
          />
        </FormPair>
        <button type="submit">Add contact</button>
      </FormStyled>
    );
  };
}

// export const ContactForm = ({ onFormSubmit }) => {
//   const nameInputId = nanoid();
//   const numberInputId = nanoid();
//   return (
//     <FormStyled onSubmit={onFormSubmit}>
//       <FormPair>
//         <LabelStyled htmlFor={nameInputId}>Name</LabelStyled>
//         <input
//           type="text"
//           name="name"
//           id={nameInputId}
//           // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </FormPair>
//       <FormPair>
//         <LabelStyled htmlFor={numberInputId}>Number</LabelStyled>
//         <input
//           type="tel"
//           name="number"
//           id={numberInputId}
//           // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </FormPair>
//       <button type="submit">Add contact</button>
//     </FormStyled>
//   );
// }
