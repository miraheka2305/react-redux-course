import React, { PureComponent } from "react";
import Person from "./person/Person";

export default class Persons extends PureComponent {
  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
  }
  //kenapa gamau jalan ini
  // componentWillMount() {
  //   console.log("[Persons.js] inside componentwillmount");
  // }
  componentDidMount() {
    // console.log("persons didmount");
    this.lastPersonRef.current.focus();
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(
  //     "[UPDATE Persons.js] inside this.componentWillReceiveProps",
  //     nextProps
  //   );
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "update persons.js inside shouldcomponentupdate",
  //     nextProps,
  //     "aha",
  //     nextState
  //   );
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.clicked
  //   );
  //   // return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("Update persons.js componentwillupdate", nextProps, nextState);
  // }
  // componentDidUpdate() {
  //   console.log("Update persons.js componentDidUpdate");
  // }
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          position={index}
          name={person.name}
          age={person.age}
          ref={this.lastPersonRef}
          // authenticated={this.props.isAuthenticated}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
