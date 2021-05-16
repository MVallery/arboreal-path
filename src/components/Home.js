import React from 'react';
import {Router, Route, Link, Switch } from "react-router-dom";
import BookCover from '../assets/images/bookcover.jpg';
import ArborealPath from './Characters';
import {Link as RSLink} from 'react-scroll';


const Home= props=> {

    return (
      <div id='home' ref={props.homeRef} className="home-container">
        <div className="home-gradient">
            <div className="home-book-title-container">
          <img src={BookCover} align="left"></img>
          <div className="home-book-title">
            <h1> Arboreal Path </h1>
            <h2>Available for pre-order soon</h2>
            <div className="home-buy-now-container">
              <p>Buy now:</p>
            <button>AMAZON</button>
            <button>BARNES & NOBLE</button>

            </div>
            <div className='home-button-container'>
              <button>Preview</button>
              <RSLink to="characters" spy={true} smooth={true} offset={0} duration={500}>
                <button>Learn More</button>
              </RSLink>
      

            </div>
              {/* <Link to="/arboreal-path">
                Explore the characters
              </Link> */}
          </div>
          </div>

        </div>
      </div>
    );
  }
  
  export default Home;
  
