import Hali from '../assets/images/Hali2.png';
import Alim from '../assets/images/Alim2y.png';
import Tio from '../assets/images/Tio2.png';

import React, { useState } from "react";
import CharacterCard from './CharacterCard';
const ArborealPath = props => {
    const [characterList, setCharacterList] = useState([
        {name:'Tio', description: "Tio's Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
        "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
        "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
        "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
        "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:Tio},
        {name:'Hali', description:"Hali's Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
        "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
        "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
        "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
        "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image:Hali}, 
        {name:'Alim', description: "Alim's Lorem ipsum dolor sit amet, consectetur adipiscing elit," + 
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" + 
        "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
        "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
        "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident," + 
        "sunt in culpa qui officia deserunt mollit anim id est laborum.", image:Alim}]);


    const [backgroundStyle, setBackgroundStyle] = useState('hali-background-color');
    const onLeftClick = () => {
        const temp = JSON.parse(JSON.stringify(characterList));
        const lastElement = temp.pop();
        temp.unshift(lastElement)
        setCharacterList(temp)
        let newBackgroundstyle = temp[1].name==='Tio'? 'tio-background-color' : temp[1].name==='Alim'? 'alim-background-color'  : 'hali-background-color';
        setBackgroundStyle(newBackgroundstyle)
    }
    const onRightClick = () => {
        const temp = JSON.parse(JSON.stringify(characterList));
        const firstElement = temp.shift();
        temp.push(firstElement)
        setCharacterList(temp)
        let newBackgroundstyle = temp[1].name==='Tio'? 'tio-background-color' : temp[1].name==='Alim'? 'alim-background-color'  : 'hali-background-color'
        setBackgroundStyle(newBackgroundstyle)

    }

    const displayCharacterCards = characterList.map((character, index)=> {
        let pictureGlow;
        let cardBackground;
        let characterDescription;

        if (character.name==='Tio'){
            pictureGlow = {backgroundImage: 'radial-gradient(#5dd85d, #137b2a00, rgba(55, 154, 53, 0))'};
            cardBackground = 'tio-card-background'
            characterDescription = 'character-description-tio'
        } else if (character.name==='Alim'){
            pictureGlow = {backgroundImage: 'radial-gradient(#ea26ae, #e817e214, transparent)'};
            pictureGlow = {backgroundImage: 'radial-gradient(#e0dd15, rgba(232, 23, 226, 0.08), transparent)'}
            cardBackground = 'alim-card-background'
            characterDescription = 'character-description-alim'
        } else {
            pictureGlow = {backgroundImage: 'radial-gradient(black, #80007f, rgba(128, 0, 128, 0), transparent)'};
            cardBackground = 'hali-card-background'
            characterDescription = 'character-description-hali'
        }
        return (
            <CharacterCard 
                key={character.name} 
                characterList={characterList} 
                characterDescription={characterDescription} 
                character={character} 
                cardBackground={cardBackground} 
                pictureGlow ={pictureGlow} 
                index={index} 
                onRightClick={onRightClick} 
                onLeftClick={onLeftClick}/>
        )
    }) 
    return (
        <React.Fragment>
            <div className="characters-fade-container" id='characters' ref={props.arborealPathRef}>
            <div className="characters-main-container">
                <div className={`characters-container ${backgroundStyle}`}> 
                    
                    {displayCharacterCards}
                </div>
            </div>
            </div>
        </React.Fragment>
    );
  }
  export default ArborealPath;

