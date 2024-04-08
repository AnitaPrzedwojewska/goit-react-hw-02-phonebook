import { Component } from 'react';
import { nanoid } from 'nanoid';
import { InputStyled } from './filter.styled';
import PropTypes from 'prop-types';

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onFilterChange(event);
  }

  searchInputId = nanoid();

  render() {
    const { filter } = this.props;
    return (
      <>
        <p>Find contacts by name:</p>
        <InputStyled
          type="input"
          name="filter"
          id={this.searchInputId}
          value={filter}
          onChange={this.handleChange}
        ></InputStyled>
      </>
    );
  }
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};