import React, { useRef, useState } from "react";
import WorldMap from '../assets/images/world-map2.jpg'
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import MapIcon from '../assets/images/figleaf2.png';
import ImageGradient from 'material-ui/svg-icons/image/gradient';
import {mapLocationList} from './worldMapLocations';

const World = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMapElement, setActiveMapElement] = useState(null)
  
  const mapDescription = (location, e) => {
    if (location === activeMapElement){
      setAnchorEl(null)
      setActiveMapElement(null)
    } else{

    setAnchorEl(e.currentTarget);
    setActiveMapElement(location);

    }
  }
  const handleClickAway = (e) =>{
    if (e.target.className==='world-map'){
      setAnchorEl(null)
      setActiveMapElement(null)
    } 
  }
  const handleLocation = () => {
    const newLocationList = mapLocationList.map(location=> {
    const activeMapIcon = activeMapElement === location? 'active-map-element': null

      return(
      <div key={location.name} className={`map-locations map-${location.name.replace(' ', '-')} ${activeMapIcon}`} onClick={(e)=>mapDescription(location,e)}>
        <img src={MapIcon}/>
      </div>
      )
    })
    return newLocationList
  }
  const open = Boolean(anchorEl);

  return (//
    <React.Fragment>
                {activeMapElement?(
                    <Popper style={{zIndex:5}} open={open} anchorEl={anchorEl} placement={activeMapElement.position} transition> 
                    {({ TransitionProps}) => (
                      <ClickAwayListener onClickAway={handleClickAway}>

                      <Fade {...TransitionProps} timeout={350}>
                        <div className='description'><h2>{activeMapElement.name}</h2><p>{activeMapElement.description}</p></div>
                      </Fade>
                      </ClickAwayListener>

                    )}
                  </Popper>
                ):null}

        <div id="world" className="world-main-container">
          <div className="world-main-container-gradient">
            <h1>Explore The World</h1>
                <div className="world-map-container">
                  <img className="world-map" src={WorldMap} />
                    {handleLocation()}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default World;