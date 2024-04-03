import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "Thinh",
    address: "Q9",
    age: "20",
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    // console.log(event, event.target.value);
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
    // console.log(event, event.target.value);
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} I'm from {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>Your age:</label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
