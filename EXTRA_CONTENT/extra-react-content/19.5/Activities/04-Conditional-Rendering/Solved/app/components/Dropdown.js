import React, { Component } from "react";

class Dropdown extends Component {
  constructor() {
    super();
    // This component has an "open" state that's either true or false
    this.state = {
      open: false
    };
    // Binding or custom methods to this class to preserve the "this" keyword.
    // handleDropdownSelect gets passed as a callback and toggleDropdown gets called from inside handleDropdownSelect
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
  }
  // This method will toggle this component's "open" state
  toggleDropdown() {
    this.setState({
      open: !this.state.open
    });
  }
  // This method calls the parent component's (Panel's) handleDropdownSelect method
  handleDropdownSelect(option) {
    this.props.handleSelect(option);
    // Then it closes the dropdown
    this.toggleDropdown();
  }
  // renderList returns one li tag for each option prop we're passed
  // Using option.value ("SHOW_CAT", "SHOW_LOREM", etc)
  // If we were dynamically adding and removing these li tags, we'd worry about
  // using a uuid. No chance of name collisions here.
  renderList() {
    return this.props.options.map(option => (
      <li
        onClick={() => this.handleDropdownSelect(option)}
        key={option.value}
      >
        <a>{option.text}</a>
      </li>
    ));
  }
  // If our component's open state is true, give the dropdown div a class of "open"
  // otherwise the "open" class is removed. This lets us toggle our dropdown open and
  // closed without jQuery
  render() {
    return (
      <div
        style={this.props.style}
        className={`dropdown ${this.state.open ? "open" : null}`}
      >
        <button
          onClick={this.toggleDropdown}
          className="btn btn-default dropdown-toggle"
          id="dropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {this.props.selected.text}
          <span className="caret" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown">
          {/* Here we render all of our li option tags */}
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
