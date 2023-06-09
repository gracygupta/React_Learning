import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} year old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
