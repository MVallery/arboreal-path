import React, {useState} from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import BookCover from "../assets/images/bookcover.jpg";

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Link as RSLink } from "react-scroll";

const Home = (props) => {
  const [previewDropdown, setPreviewDropdown] = useState({class:'preview-dropdown-closed', position:'open-down', backgroundColor:'white'})
  const[retailDropdown, setRetailDropdown] = useState({class:'retail-dropdown-closed', backgroundColor:'white'})
  const handlePreviewClickAway = (e) =>{
      setPreviewDropdown({...previewDropdown, class:'preview-dropdown-closed', backgroundColor:'white'})
  }
  const handleRetailClickAway = (e) => {
    if (retailDropdown.class==='retail-dropdown-open'){
      if (!e.target.className.includes('retail')){
        setRetailDropdown({...retailDropdown, class:'retail-dropdown-closed', backgroundColor:'white'})
      }
    }

  }
  const togglePreviewDropdown = (e) => {
    let position = 'open-down';
    if(window.pageYOffset<116){ //checks if button is too close to bottom of screen
      position = 'open-up'
    } 
      if (previewDropdown.class === 'preview-dropdown-closed'){
        setPreviewDropdown({...previewDropdown, class:'preview-dropdown-open', position:position, backgroundColor:'#c7c7c7'})
      } else{
        setPreviewDropdown({...previewDropdown, class:'preview-dropdown-closed', position:position, backgroundColor:'white'})
      }


  }
  const toggleRetailDropdown = (e) => {
    if (retailDropdown.class === 'retail-dropdown-closed'){
      setRetailDropdown({...retailDropdown, class:'retail-dropdown-open', backgroundColor:'#c7c7c7'})
    } else {
      setRetailDropdown({...retailDropdown, class:'retail-dropdown-closed', backgroundColor:'white'})
    }
  }

  return (
    <div id="home" ref={props.homeRef} className="home-container" >
      <div className="home-gradient">
        <div className="home-book-title-container">
          <div className="home-book-button-container">
            <img src={BookCover} align="left"></img>
            <div className="preview-button-container">
              <ClickAwayListener onClickAway={handlePreviewClickAway}>
              <button onClick={togglePreviewDropdown}style={{backgroundColor:previewDropdown.backgroundColor}}>Preview
              <i className="fa fa-caret-down fa-fw"></i>
              </button>
              </ClickAwayListener>
              <div className={`dropdown-menu ${previewDropdown.class} ${previewDropdown.position}`}>
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
              </div>
            </div>
          </div>
          <div className="home-book-title">
            <h1> Arboreal Path </h1>

              <p className="book-description">The cost of magic is never cheap.</p>

              <p className="book-description2">Three unlikely friends collide in a quest to restore the world's dwindling magic.</p>
              <RSLink
                to="characters"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                style={{width:'100px'}}
              >
                <p className="book-learn-more">Learn more</p>
              </RSLink>
            
            <h2> Preorder Now! </h2>
            <div className="home-buy-now-container">
              <a className="retail-link amazon" href="https://www.amazon.com/" target="_blank">AMAZON</a>
              <a className="retail-link" href="https://www.barnesandnoble.com/" target="_blank">BARNES & NOBLE</a>
              <div className="retail-dropdown-container">
                <ClickAwayListener onClickAway={handleRetailClickAway}>
                  <button className="retail-link retail-button" onClick={toggleRetailDropdown} style={{backgroundColor:retailDropdown.backgroundColor}}>OTHER RETAILERS
                    <i className="fa fa-caret-down fa-fw"></i>
                  </button>
                </ClickAwayListener>
            
                <div className={`dropdown-menu ${retailDropdown.class}`}>
                  <a className="retail" href="https://www.powells.com/" target="_blank">Powells</a>
                  <a className="retail">Link 2</a>
                  <a className="retail">Link 3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
