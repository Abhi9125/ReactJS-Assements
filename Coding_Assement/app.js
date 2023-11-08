import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement(
  "div",
  { className: "title" },

  [
    React.createElement("h1", { id: "heading1" }, "I am heading 1"),
    React.createElement("h2", { id: "heading2" }, "I am heading 2"),
    React.createElement("h3", { id: "heading3" }, "I am heading 3"),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(header);
