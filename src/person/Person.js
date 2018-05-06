import React from "react";
import "./Person.css";

const person = props => {
  const style = {
    "@media (min-width :500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      {/* props.children itu digunain utk menambahkan content pada component tsb dari luar */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
