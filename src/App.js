import React from "react";
import Navbar from "./NavBar/Navbar";
import './App.css';
import ItemCount from "./ItemCount/ItemCount"


function App(){
  return(
    <>
      <Navbar />
      <ItemCount stock={5}/>
    </>
  );
}

export default App;