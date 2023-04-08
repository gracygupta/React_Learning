import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person";

class App extends Component {
  state = {
    person: [
      { name: "Gracy", age: 20 },
      { name: "Sunita", age: 49 },
      { name: "Shashwat", age: 19 },
    ],
  };

  switchHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 20 },
        { name: "Sunita", age: 49 },
        { name: "Shushu", age: 20 },
      ],
    });
  };

  changeHandler = (event) => {
    this.setState({
      person: [
        { name: event.target.value, age: 20 },
        { name: "Sunita", age: 49 },
        { name: "Shushu", age: 20 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchHandler.bind(this, "GRACY")}>
          Click Here
        </button>
        {this.state.person.map((person) => {
          return <Person name={person.name} age={person.age} />;
        })}
      </div>
    );
  }
}

export default App;
