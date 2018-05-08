import React, { Component } from "react";
import Person from "./person/Person";

export default class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside this constructor", props);
  }
  //kenapa gamau jalan ini
  componentWillMount() {
    console.log("[Persons.js] inside componentwillmount");
  }
  componentDidMount() {
    console.log("persons didmount");
  }
  render() {
    console.log("persons inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
