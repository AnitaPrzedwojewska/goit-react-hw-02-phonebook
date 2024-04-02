import { Component } from 'react';
import { nanoid } from 'nanoid';

export class PhoneBookForm extends Component {
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

  nameInput = nanoid();

  render() {
    const { name } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInput}>Name</label>
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
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
