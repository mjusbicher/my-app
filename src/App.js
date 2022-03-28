import React from "react";
import logo from './logo.svg';
import Navbar from "./components/Navbar.jsx";
import './App.css';
import {Button, ThemeProvider, createTheme, Typography} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import {orange} from '@material-ui/core/colors'


const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    }
  }
})

function App(){
  return(
      <ThemeProvider theme={theme}>
        <Navbar/>
        <div>
          <header className="App-header">
            <Typography variant="h1">
              Bienvenidos
            </Typography>
            <Button
            startIcon={<SaveIcon/>}
            size="large"
            href="#"
            variant="contained"
            color="primary">
              Hello Rouda
            </Button>
          <img src={logo} className="App-logo" alt="logo"/>
          </header>
        </div>
      </ThemeProvider>
  );
}

export default App;