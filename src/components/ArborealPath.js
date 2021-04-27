import Hali from '../assets/images/hali.jpg';
import Alim from '../assets/images/alim.jpg';
import Tio from '../assets/images/tio.jpg';
import {CSSTransition} from 'react-transition-group';

import Map from '../assets/images/map.jpg';
import React, { useState } from "react";
import './ArborealPath.css';

function ArborealPath() {
    const [haliSelect, setHaliSelect] = useState([])
    const [tioSelect, setTioSelect] = useState([])
    const [alimSelect, setAlimSelect] = useState([])
    const [mapSelect, setMapSelect] = useState("")
    const [characterList, setCharacterList] = useState([])


    const onCharacterClick = (name) => {
       if (name === "Hali") {
            setHaliSelect(["Hali's Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",1]);
            setAlimSelect(["", 0.2, false]);
            setTioSelect(["", 0.2]);
            setMapSelect(["", 0.2]);

        }
        if (name === "Tio") {
            setTioSelect(["Tio's Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
            "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
            "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
            "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
            "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",1]);
            setAlimSelect(["", 0.2, false]);
            setHaliSelect(["", 0.2]);
            setMapSelect(["", 0.2]);

        }
        if (name === "Alim") {
            setAlimSelect(["Alim's Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" + 
            "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
            "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
            "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident," + 
            "sunt in culpa qui officia deserunt mollit anim id est laborum.", 1, true]);
            setHaliSelect(["", 0.2]);
            setTioSelect(["", 0.2]);
            setMapSelect("");

        }
        if (name === "Map") {
            setMapSelect("World Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
            setAlimSelect("");
            setTioSelect("");
            setHaliSelect("");

        };
        
    };

    return (
        
        <div><h1 style={{textAlign:"center"}}>Arboreal Path</h1>
        
        <div className="ap-container">
            
            <div onClick= {() => {onCharacterClick("Hali");}} style={{opacity:haliSelect[1]}} >
                <div className="character-container" style={{transition:haliSelect&&haliSelect[0] ? 'height 2s': 'height 0s',
                                                            height: haliSelect && haliSelect[0] ? '700px' : '450px' }}>
            <h1>Hali</h1>
            <a onClick= {() => {onCharacterClick("Hali");}}>
            <img className="character-content" src={Hali}></img></a>
            <div id= "expanded-text">
            {haliSelect[0]}
            </div>
            </div>
            </div>

            <div onClick={() => {onCharacterClick("Tio");}}style={{opacity:tioSelect[1]}}>
            <div className="character-container tio" style={{transition:tioSelect&&tioSelect[0] ? 'height 2s': 'height 0s',
                                                             height: tioSelect && tioSelect[0] ? '700px' : '450px' }}>

            <h1>Tio</h1>
            <a onClick= {() => {onCharacterClick("Tio");}}>
            <img className="character-content" src={Tio}></img></a>
            <div id= "expanded-text">
            {tioSelect[0]}
            </div>
            </div>
            </div>

            <div onClick={() => {onCharacterClick("Alim");}} style={{opacity:alimSelect[1]}}>
            <div className="character-container" style={{transition:alimSelect&&alimSelect[0] ? 'height 2s': 'height 0s',
                                                         height: alimSelect && alimSelect[0] ? '700px' : '450px' }}>

            <h1>Alim</h1>
            <a onClick= {() => {onCharacterClick("Alim");}}>

            <img className="character-content" src={Alim}></img></a>
            <CSSTransition in={alimSelect[2]} timeout={300} classNames="alim">
                <view>
            <div id= "expanded-text">
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

