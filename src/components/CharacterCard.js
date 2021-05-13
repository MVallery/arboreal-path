import React from 'react';

const CharacterCard = (props) => {
  if (props.index === 1) {
    return(
      <div
        className={`character-container ${props.cardBackground} ${props.containerStyle}`} 
      >
      <a className="prev" onClick={ () => {props.onLeftClick()}}><p className="arrow-name">{props.characterList[0].name}</p>&#10094;</a>
      <a className="next" onClick={ () => {props.onRightClick()}}><p className="arrow-name">{props.characterList[2].name}</p>&#10095;</a>
        <h1>{props.character.name}</h1>
        <a>
          <img
            className="character-content"
            style={{ ...props.pictureGlow, opacity: 0.85 }}
            src={props.character.image}
          ></img>
        </a>
        <div
          id="expanded-text"
          className={`character-description ${props.characterDescription}`}
          style={props.characterStyle}
        >
          {props.character.description}
        </div>
      </div>
    ) 
  } else {
    return(
    <div className={`character-container inactive-style`} >
    </div>
    )
  }
}

export default CharacterCard;