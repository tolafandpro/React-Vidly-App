import React from "react";
import './App.css';
import Movies from "./components/Movies";
import NavBar from "./components/navbar";


function App() {
  return (
    <div className="App">
      < NavBar/>
      <Movies/>
     
    </div>
  )
}

export default App;
