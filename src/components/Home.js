import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import BookCover from "../assets/images/bookcover.jpg";
import ArborealPath from "./Characters";
import { withStyles } from '@material-ui/core/styles';

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link as RSLink } from "react-scroll";

const Home = (props) => {
  const [retailMenu, setRetailMenu] = React.useState(false)
  const handleShowRetailMenu = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
    setRetailMenu(e.currentTarget)
  }
  const handleCloseRetailMenu = () => {
    setRetailMenu(false)
  }
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      {...props}
    />
  ));
  return (
    <div id="home" ref={props.homeRef} className="home-container">
      <div className="home-gradient">
        <div className="home-book-title-container">
          <div className="home-book-button-container">
            <img src={BookCover} align="left"></img>
            <div className="preview-button-container">
              <button>Preview</button>
            </div>
          </div>
          <div className="home-book-title">
            <h1> Arboreal Path </h1>

            
              {/* The cost of magic is never cheap.<br/><br/>

Something Hali is all too familiar with. Renowned as a hero in her country, Hali had been seen as their only hope as a plague tore through the populace. Though her spell succeeded in curing the affliction, it had taken her unborn son in the process and created a monstrous shadow. Imprisoning the shadow inside a magical tattoo on her arm, Hali couldn’t contain its power before it killed her wife, adding another face to its collection.
<br/><br/>

With her family unable to find peace, Hali has a single goal—set them free. But the shadow has stolen her magic and Hali must now depend on others for assistance.<br/>
Alim—a former explorer of forgotten ruins who was born magicless—is roped into Hali’s plans with the promise of attaining the power of the stars.<br/>
As one of the few remaining with nature magic, Tio may hold the key to breaking into the realm of mystical beasts and spirits to unlock Alim’s magic.<br/>
As the three journeys collide, the bonds of their new friendship are tested as the world reminds them of the cost of magic.<br/> */}
<p className="book-description">The cost of magic is never cheap.</p>

<p className="book-description2">Three unlikely friends collide in a quest to restore the world's dwindling magic.</p>
              <RSLink
                to="characters"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                <p className="book-learn-more">Learn more</p>
              </RSLink>
            
            <h2> Preorder Now! </h2>
            <div className="home-buy-now-container">
              <button>AMAZON</button>
              <button>BARNES & NOBLE</button>
              <button onClick={handleShowRetailMenu}>OTHER RETAILERS</button>
            </div>
            <StyledMenu
              disableScrollLock = {true}
              id="retail-menu"
              anchorEl={retailMenu}
              style={{position:'absolute'}}
              keepMounted
              open={Boolean(retailMenu)}
              onClose={handleCloseRetailMenu}
              getContentAnchorEl={null}
            >
              <MenuItem 
                onMouseEnter={(e) => {e.target.style.backgroundColor = '#d7d7d8'; e.target.style.color='white'}}
                onMouseLeave={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color='black'}}
                >Other site 1</MenuItem>
              <MenuItem>
                Other site 2
              </MenuItem>
              <MenuItem>Other site 3</MenuItem>

              <MenuItem>Other site 4</MenuItem>
            </StyledMenu>

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
