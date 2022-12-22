import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Table />
      </div>
    </div>
  );
}

export default App;
