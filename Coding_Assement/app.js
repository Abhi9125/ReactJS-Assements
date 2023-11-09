import React from "react";
import ReactDOM from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJetFighterUp } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
//Task 2 -- Create a Header Component from scratch using Functional Component with JSX
const Header = () => {
  return (
    <header id="header">
      <div className="icon">
        <FontAwesomeIcon icon={faJetFighterUp} />
      </div>
      <div className="input-box">
        <h1>Create a Header Component with logo and user icon</h1>
        <input type="text" placeholder="Search box" className="input"></input>
      </div>
      <div className="user">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
};
// const TaskTwo = <h1>I'm Heading 1.</h1>;
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Header />);
