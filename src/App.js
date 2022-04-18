import React from "react";
import Navbar from "./components/NavBar/Navbar";
import './App.css';
import ItemListContainer from "./components/Items/ItemListContainer"
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;