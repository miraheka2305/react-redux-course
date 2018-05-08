import React, { Component } from "react";
import classes from "./Person.css";

export default class Person extends Component {
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
      <div className={classes.Person}>
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
      </div>
    );
  }
}
