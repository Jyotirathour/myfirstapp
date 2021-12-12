import { createTheme,ThemeProvider } from '@mui/material';
import {useState} from "react";
import { BrowserRouter,Routes, Route, Link , Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Header from './components/header';
import EventHandling from './components/eventhandling';
import Signup from './components/signup';
import ManageUsers from './components/manageUser';
function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const myCustomTheme = createTheme({
    palette:{
      mode: darkTheme ? "dark" : "light",
      secondary:{
        main: '#c76000',
      }
  }
  })
  return (
    <ThemeProvider theme={myCustomTheme}>
    <div >
           <BrowserRouter>

        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}  /> 

         <Routes>
           <Route element = {<Home/>} path = "/home"/> 
           <Route element = {<Login />} path = "/login"/>
           <Route element = {<EventHandling />} path = "/event"/>
           <Route element = {<Signup/>} path = "/signup"/>
           <Route element = {<ManageUsers/>} path = "/manageusers"/>
           
           
           <Route path="/" element={<Navigate replace to="/home" />}>
             

           </Route>

         </Routes>

         
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
};

export default App;
