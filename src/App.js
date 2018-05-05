import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";
import Radium, { StyleRoot } from "radium";
class App extends Component {
  state = {
    persons: [
      { id: "per1", name: "mirah", age: 21 },
      { id: "per2", name: "adhi", age: 22 },
      { id: "per3", name: "matias", age: 21 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // masih ga paham sih ini
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    //why its better?
    persons.splice(personIndex, 1);
    // remove element from an array
    this.setState({ persons: persons });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* output the list of persons */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Welcome</h1>
          <p className={classes.join(" ")}>
            I want to start learn about ReactJS
          </p>
          <button style={style} onClick={this.togglePersonHandler}>
            Toggle Persons{" "}
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
