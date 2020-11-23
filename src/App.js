import {Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Home from './components/home';
import PressKit from './components/presskit';
import ArborealPath from './components/arboreal-path';
import Contact from './components/contact';
import ErrorMessage from './components/error-message'
import BannerImage from './assets/images/ap-header.png'
import TwitterIcon from './assets/images/twitter.png'
import InstagramIcon from './assets/images/instagram.png'






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
                         
        <li>  
      <a href="https://twitter.com">
      <img class="social" border="0" alt="facebook" src={TwitterIcon}></img></a>
      </li>
     
     

      <li>
      <a href="https://instagram.com">
      <img class="social" border="0" alt="facebook" src={InstagramIcon}></img></a>
      </li>
     
     
     
             
</ul>
</div>
)}








  return (
    
    <main>
      {/* {var content-scroll = document.getElementById("character-content");
character-content.scrollIntoView({ behavior: "auto", block: "end" });} */}
      <img className ="img-header" src={BannerImage}></img>
      {NavBar()}
      <Switch>
          <Route path="/" component= {Home} exact />
          <Route path="/about" component= {About} />
          <Route path="/presskit" component= {PressKit} />
          <Route path="/contact" component= {Contact} />
          <Route path="/arboreal-path" component= {ArborealPath} />
          <Route component= {ErrorMessage}/>

      </Switch>
      <p className= "bottom">Copyright © 2020 |  Arcane Moose Production</p>

    </main>
      
  );
}

export default App;
