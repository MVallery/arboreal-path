import Hali from '../assets/images/hali.jpg';
import Tio from '../assets/images/tio.jpg';
import Alim from '../assets/images/alim.jpg';
import Map from '../assets/images/map.jpg';
import React, { useState } from "react";


function ArborealPath() {
    const [haliSelect, setHaliSelect] = useState("")
    const [tioSelect, setTioSelect] = useState("")
    const [alimSelect, setAlimSelect] = useState("")
    const [mapSelect, setMapSelect] = useState("")

    const onCharacterClick = (name) => {
        if (name === "Hali") {
            setHaliSelect("Hali's description text");
            setAlimSelect("");
            setTioSelect("");
            setMapSelect("");
            // tioText = ""
            // alimText = ""
            // mapText = ""
        }
        if (name === "Tio") {
            setTioSelect("Tio's description text")
            setAlimSelect("");
            setHaliSelect("");
            setMapSelect("");
            // alimText = ""
            // mapText = ""
            // haliText = ""
        }
        if (name === "Alim") {
            setAlimSelect("Alim's description text")
            setHaliSelect("");
            setTioSelect("");
            setMapSelect("");
            // tioText = ""
            // mapText = ""
            // haliText = ""
        }
        if (name === "Map") {
            setMapSelect("World description text")
            setAlimSelect("");
            setTioSelect("");
            setHaliSelect("");
            // tioText = ""
            // alimText = ""
            // haliText = ""
        }
        
    }

    return (
        <div><h1>Arboreal Path</h1>
        <div className="ap-container">
             
            <div className="character-container">
            <h1>Hali</h1>
            <a onClick= {() => {onCharacterClick("Hali");}}>
            <img className="character-content" src={Hali}></img></a>
            {haliSelect}
            </div>

            <div className="character-container">
            <h1>Tio</h1>
            <a onClick= {() => {onCharacterClick("Tio");}}>
            <img className="character-content" src={Tio}></img></a>.
            {tioSelect}
            </div>

            <div className="character-container">
            <h1>Alim</h1>
            <a onClick= {() => {onCharacterClick("Alim");}}>
            <img className="character-content" src={Alim}></img></a>
            {alimSelect}
            </div>

            <div className="character-container">
            <h1>Map</h1>
            <a onClick= {() => {onCharacterClick("Map");}}>
            <img className="character-content" src={Map}></img></a>
            {mapSelect}
            </div>



        





        


            </div>
        </div>     
    );
  }
  
  export default ArborealPath;
  
