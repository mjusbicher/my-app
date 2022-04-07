import React from "react";
import Navbar from "./NavBar/Navbar";
import './App.css';
import ItemListContainer from "./Items/ItemListContainer"


function App(){
  return(
    <>
      <Navbar />
      <ItemListContainer/>
    </>
  );
}

export default App;