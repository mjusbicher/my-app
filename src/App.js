import React from "react";
import Navbar from "./components/NavBar/Navbar";
import './App.css';
import ItemListContainer from "./components/Items/ItemListContainer"
import ItemDetailContainer from "./components/Items/ItemDetailContainer";


function App(){
  return(
    <>
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
}

export default App;