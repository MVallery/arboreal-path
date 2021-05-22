import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import BookCover from "../assets/images/bookcover.jpg";
import ArborealPath from "./Characters";
import { Link as RSLink } from "react-scroll";

const Home = (props) => {
  return (
    <div id="home" ref={props.homeRef} className="home-container">
      <div className="home-gradient">
        <div className="home-book-title-container">
          <div className="home-book-button-container">
            <img src={BookCover} align="left"></img>
            <div className="home-button-container">
              <button>Preview</button>
              <RSLink
                to="characters"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button>Learn More</button>
              </RSLink>
            </div>
          </div>
          <div className="home-book-title">
            <h1> Arboreal Path </h1>

            <p>
              {/* The cost of magic is never cheap.<br/><br/>

Something Hali is all too familiar with. Renowned as a hero in her country, Hali had been seen as their only hope as a plague tore through the populace. Though her spell succeeded in curing the affliction, it had taken her unborn son in the process and created a monstrous shadow. Imprisoning the shadow inside a magical tattoo on her arm, Hali couldn’t contain its power before it killed her wife, adding another face to its collection.
<br/><br/>

With her family unable to find peace, Hali has a single goal—set them free. But the shadow has stolen her magic and Hali must now depend on others for assistance.<br/>
Alim—a former explorer of forgotten ruins who was born magicless—is roped into Hali’s plans with the promise of attaining the power of the stars.<br/>
As one of the few remaining with nature magic, Tio may hold the key to breaking into the realm of mystical beasts and spirits to unlock Alim’s magic.<br/>
As the three journeys collide, the bonds of their new friendship are tested as the world reminds them of the cost of magic.<br/> */}
              Magic is disappearing.
              <br />
              Technology is rising.
              <br />
              <br />
              Hali—a scholar of ancient magic—seeks to free her dead son and
              wife from the shadow monster trapped in her tattoo by any means
              necessary.
              <br />
              Alim—a former explorer of forgotten ruins who was born
              magicless—is roped into Hali’s plans with the promise of attaining
              the power of the stars.
              <br />
              Tio—one of the few remaining with nature magic—discovers the
              source of magic is dying and now must juggle his social anxieties
              with his mission as he creates a team to prevent it.
              <br />
              After a chance encounter brings the three together, their shared
              goal becomes clear. Break into the realm of mystical beasts and
              spirits.
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
};

export default Home;
