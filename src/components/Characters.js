import Hali from '../assets/images/Hali2.png';
import Alim from '../assets/images/Alim2.png';
import Tio from '../assets/images/Tio2.png';
import {CSSTransition} from 'react-transition-group';

import Map from '../assets/images/map.jpg';
import React, { useState } from "react";

const ArborealPath = props => {
    const [haliSelect, setHaliSelect] = useState([]);
    const [tioSelect, setTioSelect] = useState(["Tio's Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
    "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
    "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
    "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",0.85]);
    const [alimSelect, setAlimSelect] = useState([]);
    const [slideIndex, setSlideIndex] = useState(1);
    const [mapSelect, setMapSelect] = useState("");
    const [characterList, setCharacterList] = useState([]);
    const [backgroundStyle, setBackgroundStyle] = useState('tio-background-color');
    // let [showHaliContainer, showAlimContainer, showTioContainer] = [{display:'none'}, {display:'none'}, {display:'none'}]


    const onCharacterClick = (name) => {
       if (name === "Hali") {
            setHaliSelect(["Hali's Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",0.85]);
            setAlimSelect(["", 0, false]);
            setTioSelect(["", 0.]);
            setBackgroundStyle('hali-background-color');
        }
        if (name === "Tio") {
            setTioSelect(["Tio's Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
            "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
            "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
            "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
            "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",0.85]);
            setAlimSelect(["", 0, false]);
            setHaliSelect(["", 0]);
            setBackgroundStyle('tio-background-color');

        }
        if (name === "Alim") {
            setAlimSelect(["Alim's Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" + 
            "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
            "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
            "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident," + 
            "sunt in culpa qui officia deserunt mollit anim id est laborum.", 0.85, true]);
            setHaliSelect(["", 0]);
            setTioSelect(["", 0]);
            setBackgroundStyle('alim-background-color');


        }

        
    };

    // showSlides(slideIndex);
    console.log(slideIndex)
    function plusSlides(n) {
        setSlideIndex(slideIndex+n)

        console.log(slideIndex)
      showSlides(slideIndex+n);
    }
    
    function showSlides(n) {
        console.log(n)
      var i;
    //   if (n > slides.length) {slideIndex = 1}    
    //   if (n < 1) {slideIndex = slides.length}
      if (n === 2){
        onCharacterClick("Hali")
    //   showHaliContainer = {display:'flex'}

      } else if (n === 3 || n < 1){
        onCharacterClick("Alim")
    //   showAlimContainer = {display:'flex'} 

      } else  {
        onCharacterClick("Tio")
        setSlideIndex(1)
    //   showTioContainer = {display:'flex'} 

      }
    }
    const haliStyle = haliSelect&&haliSelect[0] ? {height:'200px', display:'flex'}: {height:'0px', opacity:'0'}
    const tioStyle = tioSelect&&tioSelect[0] ? {height:'200px', display:'flex'}: {height:'0px', opacity:'0'}
    const alimStyle = alimSelect&&alimSelect[0] ? {height:'200px', display:'flex'}: {height:'0px', opacity:'0'}

    const haliBackgroundStyle = haliSelect && haliSelect[0] ? {backgroundImage: 'radial-gradient(#720180d9, #511052e8)'}:null;
    const tioBackgroundStyle = tioSelect && tioSelect[0] ? {backgroundImage:'radial-gradient(#008000c7, #075d07c4)'}:null;
    const alimBackgroundStyle = alimSelect && alimSelect[0] ? {backgroundImage:'radial-gradient(#e817e2e0, #cc35bab5)'}:null;

    const haliPictureGlow = haliSelect && haliSelect[0] ? {backgroundImage: 'radial-gradient(black, #80007f, rgba(128, 0, 128, 0), transparent)'}:null;
    const tioPictureGlow = tioSelect && tioSelect[0] ? {backgroundImage: 'radial-gradient(#5dd85d, #137b2a00, rgba(55, 154, 53, 0))'}:null;
    const alimPictureGlow = alimSelect && alimSelect[0] ? {backgroundImage: 'radial-gradient(#ea26ae, #e817e214, transparent)'}:null
    const haliContainerStyle = haliSelect&&haliSelect[0] ? 'hali-container-style-active': 'hali-container-style-inactive'
    const alimContainerStyle = alimSelect&&alimSelect[0] ? 'alim-container-style-active': 'alim-container-style-inactive'
    const tioContainerStyle = tioSelect&&tioSelect[0] ? 'tio-container-style-active': 'tio-container-style-inactive'
    return (
        
        <div className="characters-main-container" id='characters' ref={props.arborealPathRef}>
        {/* <h1 style={{textAlign:"center"}}>Characters</h1> */}
        {/* onClick= {() => {onCharacterClick("Hali");}} */}
        <div className={`characters-container ${backgroundStyle}`}>

            <div onClick= {() => {;}}  >
                <div className={`character-container hali ${haliContainerStyle} ${haliContainerStyle}`}>
                <a className="prev" onClick={ () => {plusSlides(-1)}}><p className="arrow-name">TIO</p>&#10094;</a>
<a className="next" onClick={ () => {plusSlides(1)}}><p className="arrow-name">ALIM</p>&#10095;</a>
            <h1>Hali</h1>
            <a>
            <img className="character-content" style={{...haliPictureGlow, opacity:haliSelect[1]}} src={Hali}></img></a>
            <div id= "expanded-text" className="character-description character-description-hali" style={haliStyle}>
            {haliSelect[0]}
            </div>
            </div>
            </div>

            <div>
            <div className={`character-container tio ${tioContainerStyle}`}>
            <a className="prev" onClick={ () => {plusSlides(-1)}}><p className="arrow-name">ALIM</p>&#10094;</a>
<a className="next" onClick={ () => {plusSlides(1)}}><p className="arrow-name">HALI</p>&#10095;</a>

            <h1>Tio</h1>
            <a >
            <img className="character-content" style={{...tioPictureGlow,opacity:tioSelect[1]}} src={Tio}></img></a>
            <div id= "expanded-text" className="character-description character-description-tio" style={tioStyle}>
            {tioSelect[0]}
            </div>
            </div>
            </div>

            <div >
            <div className={`character-container alim ${alimContainerStyle}`} >
            <a className="prev" onClick={ () => {plusSlides(-1)}}><p className="arrow-name">HALI</p>&#10094;</a>
<a className="next" onClick={ () => {plusSlides(1)}}><p className="arrow-name">TIO</p>&#10095;</a>

            <h1>Alim</h1>
            <a>

            <img className="character-content" style={{...alimPictureGlow, opacity:alimSelect[1]}} src={Alim}></img></a>
            {/* <CSSTransition in={alimSelect[2]} timeout={300} classNames="alim"> */}
                <view>
            <div id= "expanded-text" className="character-description character-description-alim" style={alimStyle}>
            {alimSelect[0]}
            </div>
            </view>
            {/* </CSSTransition> */}
            </div>
            </div>
            </div>
        </div>     
    );
  }
  export default ArborealPath;

