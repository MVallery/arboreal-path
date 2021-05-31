import React, {useRef} from "react";
import {BrowserRouter, Route, Link, Switch, useLocation } from "react-router-dom";
import logo from './logo.svg';
import { StickyContainer, Sticky } from "react-sticky";
import About from './components/About';
import Home from './components/Home';
import PressKit from './components/PressKit';
import World from './components/World'
import HomeCharactersTransition from './components/HomeCharactersTransition'
import Characters from './components/Characters';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './scss/main.css'
const App = () =>{
  return (
    <React.Fragment>
                <NavBar/>
     
        <Switch>
              <Route path="/" exact>
                <Home/>
                <HomeCharactersTransition/>
                <Characters/>
                <World />
                <About />
              </Route>
              <Route path="/presskit">
              <PressKit />
              </Route>
        </Switch>
    <Footer/>
    </React.Fragment>
  );
}
export default App;



