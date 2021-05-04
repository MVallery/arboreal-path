import Hali from '../assets/images/Hali2.png';
import Alim from '../assets/images/Alim2.png';
import Tio from '../assets/images/Tio2.png';
import {CSSTransition} from 'react-transition-group';

import Map from '../assets/images/map.jpg';
import React, { useState } from "react";

const ArborealPath = props => {
    const [haliSelect, setHaliSelect] = useState([])
    const [tioSelect, setTioSelect] = useState([])
    const [alimSelect, setAlimSelect] = useState([])
    const [mapSelect, setMapSelect] = useState("")
    const [characterList, setCharacterList] = useState([])


    const onCharacterClick = (name) => {
       if (name === "Hali") {
            setHaliSelect(["Hali's Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",0.85]);
            setAlimSelect(["", 0.5, false]);
            setTioSelect(["", 0.5]);
            setMapSelect(["", 0.5]);

        }
        if (name === "Tio") {
            setTioSelect(["Tio's Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
            "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
            "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
            "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
            "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",0.85]);
            setAlimSelect(["", 0.5, false]);
            setHaliSelect(["", 0.5]);
            setMapSelect(["", 0.5]);

        }
        if (name === "Alim") {
            setAlimSelect(["Alim's Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" + 
            "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
            "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
            "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident," + 
            "sunt in culpa qui officia deserunt mollit anim id est laborum.", 0.85, true]);
            setHaliSelect(["", 0.5]);
            setTioSelect(["", 0.5]);
            setMapSelect("");

        }
        if (name === "Map") {
            setMapSelect("World Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
            setAlimSelect("");
            setTioSelect("");
            setHaliSelect("");

        };
        
    };
    const haliStyle = haliSelect&&haliSelect[0] ? {height:'300px', display:'flex'}: {height:'0px', opacity:'0'}
    const tioStyle = tioSelect&&tioSelect[0] ? {height:'300px', display:'flex'}: {height:'0px', opacity:'0'}
    const alimStyle = alimSelect&&alimSelect[0] ? {height:'300px', display:'flex'}: {height:'0px', opacity:'0'}

    const haliBackgroundStyle = haliSelect && haliSelect[0] ? {backgroundImage: 'radial-gradient(#720180d9, #511052e8)'}:null;
    const tioBackgroundStyle = tioSelect && tioSelect[0] ? {backgroundImage:'radial-gradient(#008000c7, #075d07c4)'}:null;
    const alimBackgroundStyle = alimSelect && alimSelect[0] ? {backgroundImage:'radial-gradient(#e817e2e0, #cc35bab5)'}:null;

    const haliPictureGlow = haliSelect && haliSelect[0] ? {backgroundImage: 'radial-gradient(black, purple, rgba(128, 0, 128, 0.36), transparent)'}:null;
    const tioPictureGlow = tioSelect && tioSelect[0] ? {backgroundImage: 'radial-gradient(green, rgba(55, 154, 53, 0))'}:null;
    const alimPictureGlow = alimSelect && alimSelect[0] ? {backgroundImage: 'radial-gradient(#e00b9e, transparent)'}:null
    return (
        
        <div className="characters-main-container" id='characters' ref={props.arborealPathRef}>
        {/* <h1 style={{textAlign:"center"}}>Characters</h1> */}
        
        <div className="characters-container">
            
            <div onClick= {() => {onCharacterClick("Hali");}}  >
                <div className="character-container hali" style={haliBackgroundStyle}>
            <h1>Hali</h1>
            <a onClick= {() => {onCharacterClick("Hali");}}>
            <img className="character-content" style={{...haliPictureGlow,opacity:haliSelect[1]}} src={Hali}></img></a>
            <div id= "expanded-text" className="character-description character-description-hali" style={haliStyle}>
            {haliSelect[0]}
            </div>
            </div>
            </div>

            <div onClick={() => {onCharacterClick("Tio");}}>
            <div className="character-container tio" style={tioBackgroundStyle}>

            <h1>Tio</h1>
            <a onClick= {() => {onCharacterClick("Tio");}}>
            <img className="character-content" style={{...tioPictureGlow,opacity:tioSelect[1]}} src={Tio}></img></a>
            <div id= "expanded-text" className="character-description character-description-tio" style={tioStyle}>
            {tioSelect[0]}
            </div>
            </div>
            </div>

            <div onClick={() => {onCharacterClick("Alim");}} >
            <div className="character-container alim" style={alimBackgroundStyle}>

            <h1>Alim</h1>
            <a onClick= {() => {onCharacterClick("Alim");}}>

            <img className="character-content" style={{...alimPictureGlow, opacity:alimSelect[1]}} src={Alim}></img></a>
            <CSSTransition in={alimSelect[2]} timeout={300} classNames="alim">
                <view>
            <div id= "expanded-text" className="character-description character-description-alim" style={alimStyle}>
            {alimSelect[0]}
            </div>
            </view>
            </CSSTransition>
            </div>
            </div>
            </div>
        </div>     
    );
  }
  export default ArborealPath;

