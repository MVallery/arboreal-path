import {Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Home from './components/home';
import PressKit from './components/presskit';
import ArborealPath from './components/arboreal-path';
import Contact from './components/contact';
import ErrorMessage from './components/error-message'







function App() {
var  NavBar = () => {
    return (
      <div class="container">
      <ul class="ul-nav">
        <li>
        <Link to="/">HOME</Link>
        </li>
        <li>
        <Link to="/about">ABOUT</Link>
        </li>
        <li>
        <Link to="/presskit">PRESSKIT</Link>
        </li>
        <li>
        <Link to="/contact">CONTACT</Link>
        </li>
        {/* <li>
        <Link to="/">ARBOREAL PATH</Link>
        </li> */}
      </ul>
  </div>)}








  return (
    <main>
      {NavBar()}
      <Switch>
          <Route path="/" component= {Home} exact />
          <Route path="/about" component= {About} />
          <Route path="/presskit" component= {PressKit} />
          <Route path="/contact" component= {Contact} />
          <Route path="/arboreal-path" component= {ArborealPath} />
          <Route component= {ErrorMessage}/>

      </Switch>
    </main>
      
  );
}

export default App;
