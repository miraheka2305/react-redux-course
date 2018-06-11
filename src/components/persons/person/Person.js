import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/AuxHOC";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  //kenapa gamau jalan ini
  // componentWillMount() {
  //   console.log("[Person.js] inside componentwillmount");
  // }
  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }
  focus() {
    this.inputElement.current.focus();
  }
  render() {
    return (
      <Aux>
        {/* {this.props.authenticated ? <p>I'm authenticated!</p> : null} */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

//make the type of propsm can't apply in functional
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
