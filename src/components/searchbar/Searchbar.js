import React, { Component } from "react";
import { SearchbarStyled, SearchformStyled } from "./SearchbarStyled";

class Searchbar extends Component {
  state = { query: "", page: 1 };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  handleInputChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  render() {
    return (
      <SearchbarStyled className="Searchbar">
        <SearchformStyled className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </SearchformStyled>
      </SearchbarStyled>
    );
  }
}

export default Searchbar;
