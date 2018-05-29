import React from "react";

const name = "Anantpatelaeioussss";
const letters = name.length;
const thoughts = "Not sure";
const replace = name.replace(/[aeiou]/ig,"");

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {letters} letters</h2>
        <h2>I think React {thoughts}</h2>
        <h2>Name without vowels here {replace}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
