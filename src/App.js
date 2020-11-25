import {Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { StickyContainer, Sticky } from "react-sticky";
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
      <div className="container">
        {/* <Sticky> */}
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
      <img className="social" border="0" alt="facebook" src={TwitterIcon}></img></a>
      </li>
     

      <li>
      <a href="https://instagram.com">
      <img className="social" border="0" alt="facebook" src={InstagramIcon}></img></a>
      </li>
      
</ul>
{/* </Sticky> */}
</div>

)}

// let navbar = document.querySelectorAll("ul-nav");
// if 
// for(var i = 0; i < navbar.length; i++) {
//  navbar[i].style.position = 'fixed';
//  navbar[i].style.top = '0';
//  navbar[i].style.width = '100%';
//  navbar[i].style.paddingTop = '60px';


// }

// const normalBackground = () => {
//     for (var i = 0; i < navbar.length; i++){
//      navbar[i].style.borderColor = 'grey';
//     }
//   }
// setTimeout (normalBackground, 2000)



// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementsByClassName("ul-nav");
// // navbar

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.style.position = 'fixed';
//     navbar.style.top = '0';
//     navbar.style.width = '100%';
//     navbar.style.paddingTop = '60px';
//   } else {
//     navbar.style.position = '';
//     navbar.top = '';
//     navbar.style.width = '';
//     navbar.style.paddingTop = '0px';  }
// }







  return (
    // <StickyContainer>

    <main>
      {/* {var content-scroll = document.getElementById("character-content");
character-content.scrollIntoView({ behavior: "auto", block: "end" });} */}
      <img className ="img-header" src={BannerImage}></img>

      
      {NavBar()}
      
      
      {/* <Switch> */}
          <Route path="/" component= {Home} exact />
          <Route path="/about" component= {About} />
          <Route path="/presskit" component= {PressKit} />
          <Route path="/contact" component= {Contact} />
          <Route path="/arboreal-path" component= {ArborealPath} />
          {/* <Route path="" component= {ErrorMessage}/> */}

      {/* </Switch> */}
      <p className= "bottom">Copyright © 2020 |  Arcane Moose Production</p>
{/* 
      <div className="bottom-wrapper">
        <div className="push">
     
        </div>
      </div>
        <div className="bottom">


        </div> */}
    </main>
    // </StickyContainer>
      
  );
}

export default App;
