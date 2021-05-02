import React from 'react';
import {Router, Route, Link, Switch } from "react-router-dom";
import BookCover from '../assets/images/cover-header.png';
import ArborealPath from './ArborealPath';
import './home.css'

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
            <button>A</button>
            <button>BN</button>
            <button>O</button>

            </div>
            <div className='home-button-container'>
              <button>Preview</button>
              <button>Learn More</button>
              <button>Press Kit</button>


            </div>
              {/* <Link to="/arboreal-path">
                Explore the characters
              </Link> */}
          </div>
          </div>
          <main>
            <Switch>
              <Route path="/arboreal-path" component={ArborealPath} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
  
  export default Home;
  
