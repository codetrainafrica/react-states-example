import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = { text: '' };
  }
  handleOnChange = (event) => {
    let upperCaseVal = event.target.value.toUpperCase();
    this.setState({ text: upperCaseVal });
  };

  render() {
    return (
      <form>
        <div>
          <label>Search</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
        </div>
      </form>
    );
  }
}

export default Form;
