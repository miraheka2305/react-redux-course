import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/persons/Persons";
import Cockpit from "../components/cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] inside this constructor", props);
    this.state = {
      persons: [
        { id: "per1", name: "mirah", age: 21 },
        { id: "per2", name: "adhi", age: 22 },
        { id: "per3", name: "matias", age: 21 }
      ],
      otherState: "some other value",
      showPersons: false
    };
  }
  //kenapa gamau jalan ini
  componentWillMount() {
    console.log("[App.js] inside componentwillmount");
  }
  componentDidMount() {
    console.log("afterrender");
  }
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
    console.log("indiside render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
      // {/* output the list of persons *};
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
