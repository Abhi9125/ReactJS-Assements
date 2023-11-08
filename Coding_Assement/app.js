import React from "react";
import ReactDOM from "react-dom/client";

const TaskThree = () => (
  <div className="title">
    <h1 className="Heading1">I'm heading 1.</h1>
    <h2 className="Heading2">I'm heading 2</h2>
    <h3 className="Heading3">I'm Heading 3</h3>
  </div>
);
// const TaskTwo = <h1>I'm Heading 1.</h1>;
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<TaskThree />);
