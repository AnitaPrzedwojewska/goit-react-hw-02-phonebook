import { Component } from "react";
import { nanoid } from "nanoid";

export class Search extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSearchChange(event);
  }

  searchInputId = nanoid();

  render() {
    const { filter } = this.props;
    return (
      <>
        <p>Find contacts by name:</p>
        <input
          type="input"
          name="filter"
          id={this.searchInputId}
          value={filter}
          onChange={this.handleChange}></input>
      </>
    );
  }
};
