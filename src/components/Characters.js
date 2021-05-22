import Hali from '../assets/images/Hali2.png';
import Alim from '../assets/images/Alim2y.png';
import Tio from '../assets/images/Tio2.png';

import React, { useState } from "react";
import CharacterCard from './CharacterCard';
const ArborealPath = props => {
    const [characterList, setCharacterList] = useState([
        {name:'Tio', 
            description: `One of the last to be born with the gift of nature magic, Tio tasks himself with the lofty goal of 
                solving the mystery behind nature magic's disappearance. Instead he finds nature magic isn't alone. Soon, all magic 
                will be gone. Tio abandons his preferred life of solitude, juggling his social anxieties with his mission as he builds 
                a team to prevent magic from disappearing.`,
            quote: ` That's your one hug. Don't come at me again or you're getting headbutted.`,
            image:Tio},
        {name:'Hali', 
            description:`Cleansing the deadly, magic-eating plague ravaging her country didn't go as planned. Hali's cure 
                only twisted the plague into a monstrous shadow. First it killed her unborn son, then her wife, adding their 
                faces to the shadow's collection as a permanent reminder of her failure. With the shadow trapped in a tattoo 
                on Hali's arm, she is dead set on freeing her family. But with the shadow absorbing Hali's magic, she must find 
                somebody else to learn how to fuel her spell.`,
            quote:` I’d much rather be on a beach with a good novel. Or at least holed up in Wilton’s dinky excuse for a library.`,
            image:Hali}, 
        {name:'Alim', 
            description: `After an early retirement from collecting artifacts in a forgotten country's ruins, Alim learns of a librarian 
                giving lessons on ancient magic despite being born magicless. Wishing to make a difference for people without having magic 
                of their own, Alim seeks the teacher out only to get roped into a special type of magic. In order for Alim to master calling 
                upon the power of the stars, they must break into the realm of spirits and mystical beasts.`,
            quote:` Don't like crowds? Let me be your bulwark. Point me in the right direction and I'll cut a path for you.`,
            image:Alim}]);


    const [backgroundStyle, setBackgroundStyle] = useState('hali-background-color');
    const onLeftClick = () => {
        onRightClick();
        onRightClick();
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

