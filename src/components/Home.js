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
          <div className="home-book-button-container">
          <img src={BookCover} align="left"></img>
          <div className='home-button-container'>
              <button>Preview</button>
              <RSLink to="characters" spy={true} smooth={true} offset={0} duration={500}>
                <button>Learn More</button>
              </RSLink>
      

            </div>
            </div>
          <div className="home-book-title">
          <h1> Arboreal Path </h1>

            <p>
            Air, water, earth, fire, nature. Humans are born gifted with one of these five elemental powers. Until an earth-rending Quake devastated the northern lands and blocked them from the mainland with phantom-infested waters for a half-millennia. Every generation since, less and less people are born with magic and the nature gift is bordering on extinction.<br/>

Hali, a book-loving scholar specialized in ancient spells, is attempting to create a powerful rune to release her dead son and wife from the shadow spirit wearing their faces. With her magic eaten by the shadow, she must now teach somebody else her unique style of magic. <br/>

Alim, a magicless warrior with an endless appetite, gets roped into learning Hali's magic. Though they can't wait to fulfill their dream of having magic of their own, attaining mastery will require Alim to pass the trials of the spirits.<br/>

Tio, a socially anxious druid gifted with nature magic, discovers the source of magic is dying. He seeks to build a team to restore it, but will his druid-loathing country help or hinder?<br/>

Three journeys collide to form an unlikely friendship. After breaking into the realm of mystical beasts and spirits, the bonds of their friendship are tested as each learns the cost of magic is never cheap.<br/>
            </p>
            <h2> Preorder Now! </h2>
            <div className="home-buy-now-container">
            <button>AMAZON</button>
            <button>BARNES & NOBLE</button>
            <button>BARNES & NOBLE</button>


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
  
