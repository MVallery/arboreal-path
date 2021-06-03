import Hali from '../assets/images/Hali2.png';
import Alim from '../assets/images/Alim2y.png';
import Tio from '../assets/images/Tio2.png';

import React, { useState } from "react";
import CharacterCard from './CharacterCard';
const ArborealPath = props => {
    const [characterList, setCharacterList] = useState([
        {name:'Tio', 
            description: 
                `One of the last born with the gift of nature magic, Tio tasks himself with solving the mystery behind why his 
                people's magic is disappearing. When he discovers the other elements will soon meet the same fate, Tio abandons 
                his preferred life of solitude and juggles his social anxieties with his mission as he builds a team to restore magic.`,
            quote: ` That's your one hug. Don't come at me again or you're getting headbutted.`,
            image:Tio},
        {name:'Hali', 
            description:
            `Nobody is more familiar with the hidden costs of magic than Hali. When her spell to cure a deadly, magic-eating plague 
            creates a monster that takes her unborn son and then her wife, Hali imprisons the monster in a magical tattoo. With the 
            monster sapping her magic, she must now teach somebody else how to fuel her forbidden spell and give her family peace.`,
            quote:` I’d much rather be on a beach with a good novel. Or at least holed up in Wilton’s dinky excuse for a library.`,
            image:Hali}, 
        {name:'Alim', 
            description: 
            `Born magicless, Alim has always dreamed of having magic of their own. When they learn such a dream is not as impossible 
            as it seemed, Alim is ready to break into the realm of spirits and mystical beasts to master calling upon the power of the stars.`,
            quote:` Don't like crowds? Let me be your bulwark. Point me in the right direction and I'll cut a path for you.`,
            image:Alim}]);

    const [backgroundStyle, setBackgroundStyle] = useState('hali-background-color');
    const [tioCardBackground, setTioCardBackground] = useState('inactive-style')
    const [alimCardBackground, setAlimCardBackground] = useState('inactive-style')
    const [haliCardBackground, setHaliCardBackground] = useState('hali-card-background')
    
    const onCharacterClick = (character) => {
        switch (character){
            case 'Tio':
                setTioCardBackground('tio-card-background')
                setAlimCardBackground('inactive-style')
                setHaliCardBackground('inactive-style')
                setBackgroundStyle('tio-background-color')
                break;
            case 'Alim':
                setAlimCardBackground('alim-card-background')
                setTioCardBackground('inactive-style')
                setHaliCardBackground('inactive-style')
                setBackgroundStyle('alim-background-color')
                break;
            default:
                setHaliCardBackground('hali-card-background')
                setAlimCardBackground('inactive-style')
                setTioCardBackground('inactive-style')
                setBackgroundStyle('hali-background-color')
                break;
            
        }
    }

    return (
        <React.Fragment>
            <div className="characters-fade-container" id='characters' ref={props.arborealPathRef}>
                <div className="characters-main-container">
                    <div className={`characters-container ${backgroundStyle}`}> 
                        {/* {displayCharacterCards} */}
                        <CharacterCard //Tio
                            characterDescription='character-description-tio'
                            character={characterList[0]} 
                            cardBackground= {tioCardBackground}
                            pictureGlow ={{backgroundImage: 'radial-gradient(#5dd85d, #137b2a00, rgba(55, 154, 53, 0))'}}
                            onCharacterClick={onCharacterClick}
                            />
                        <CharacterCard //Hali
                            characterDescription= 'character-description-hali'
                            character={characterList[1]} 
                            cardBackground={haliCardBackground}
                            pictureGlow = {{backgroundImage: 'radial-gradient(black, #80007f, rgba(128, 0, 128, 0), transparent)'}}
                            onCharacterClick={onCharacterClick}
                            />
                        <CharacterCard //Alim
                            characterDescription= 'character-description-alim'
                            character={characterList[2]} 
                            cardBackground={alimCardBackground}
                            pictureGlow ={{backgroundImage: 'radial-gradient(#e0dd15, rgba(232, 23, 226, 0.08), transparent)'}} 
                            onCharacterClick={onCharacterClick}
                            />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
  }
  export default ArborealPath;

