import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./store";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
    </div>
  );
}

const render = () => {
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render();
Store.subscribe(render);
