import React from "react";
import './App.css';
import Menu from "./components/Menu";
import data from "./data/recipes.json"

function App() {
  console.log(data);
  return (
    <div>
      <header className="App-header">
        <h1>Recipe Menu</h1>
      </header>

      <Menu recipes={data} />
    </div>
  );
}

export default App;
