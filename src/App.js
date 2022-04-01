import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Container from "./components/Container";
import ItemListContainer from "./components/ItemListContainer";


function App(){
  return(
    <>
      <Navbar />
      <ItemListContainer />
      <Container />
    </>
  );
}

export default App;