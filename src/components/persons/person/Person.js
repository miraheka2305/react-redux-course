import React, { Component } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/AuxHOC";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside this constructor", props);
  }
  //kenapa gamau jalan ini
  componentWillMount() {
    console.log("[Person.js] inside componentwillmount");
  }
  componentDidMount() {
    console.log("person didmount");
  }
  render() {
    console.log("person inside render");

    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        {/* props.children itu digunain utk menambahkan content pada component tsb dari luar */}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
    // return [
    //   <p key="1" onClick={this.props.click}>
    //     I'm {this.props.name} and I am {this.props.age} years old{" "}
    //   </p>,
    //   <p key="2">{this.props.children}</p>,
    //   // {/* props.children itu digunain utk menambahkan content pada component tsb dari luar */}
    //   <input
    //     key="3"
    //     type="text"
    //     onChange={this.props.changed}
    //     value={this.props.name}
    //   />
    // ];
  }
}

export default withClass(Person, classes.Person);
