import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/persons/Persons";
import Cockpit from "../components/cockpit/Cockpit";
import Aux from "../hoc/AuxHOC";
import withClass from "../hoc/withClass";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "per1", name: "mirah", age: 22 },
        { id: "per2", name: "adhi", age: 22 },
        { id: "per3", name: "matias", age: 21 }
      ],
      otherState: "some other value",
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }
  // componentWillMount() {
  //   console.log("[App.js] inside componentwillmount");
  // }
  // componentDidMount() {
  //   console.log("afterrender");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "update app.js inside shouldcomponentupdate",
  //     nextProps,
  //     "aha",
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("Update app.js componentwillupdate", nextProps, nextState);
  // }
  // componentDidUpdate() {
  //   console.log("Update app.js componentDidUpdate");
  // }
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  // loginHandler = () => {
  //   this.setState({
  //     authenticated: true
  //   });
  // };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          // isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          // login={this.loginHandler}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
