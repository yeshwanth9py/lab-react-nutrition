import logo from './logo.svg';
import './App.css';
import Display from './Display';
import React, { useEffect, useState } from "react";
import data from "./resources/FoodData";

function App() {
  const [search, setSearch] = useState("");
  const [searchvals, setSearchvals] = useState(data); // Initialize to 'data' directly, not [data]

  function fun1(e) {
    setSearch(e.target.value);
    let tempdata = data.filter((el) => { // Use 'data' directly for filtering
      return el.name.startsWith(e.target.value);
    });
    setSearchvals(tempdata);
  }

  return (
    <div className="App">
      <h2>Search</h2>
      <input
        type="text"
        placeholder="search here"
        style={{ marginRight: "10px" }}
        value={search}
        onChange={(e) => {
          fun1(e);
        }}
      />
      <Display prop={searchvals} />
    </div>
  );
}

export default App;
