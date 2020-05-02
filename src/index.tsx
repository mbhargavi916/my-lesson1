import * as React from "react";
import ReactDom from "react-dom";
import { Header } from "./Header";
import { Filter } from "./Filter";
import { List } from "./List";

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <List />
    </div>
  );
}

function MyName() {
  return <h3>Do you know how to spell my name?</h3>;
}

ReactDom.render(<App />, document.getElementById("root"));
