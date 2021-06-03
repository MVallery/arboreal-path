import React from 'react';

const CharacterCard = (props) => {
  let inactive

  let left;
  let right;
  if (props.character.name==='Tio'){
    left = 'Alim'
    right = 'Hali'
  } else if (props.character.name==='Hali'){
    left = 'Tio'
    right = 'Alim'
  } else {
    left = 'Hali'
    right = 'Tio'
  }
  return(
      <div key={props.character.name} className={`character-container ${props.cardBackground} ${props.containerStyle}`} >
        <a className="prev" onClick={ () => {props.onCharacterClick(left)}}><p className="arrow-name">{left}</p>&#10094;</a>
        <a className="next" onClick={ () => {props.onCharacterClick(right)}}><p className="arrow-name">{right}</p>&#10095;</a>
        <div className="character-img-description-container">
          <div className="flex-column image-name-container">
            <h1>{props.character.name}</h1>
            <a>
              <img
                className="character-img"
                style={{ ...props.pictureGlow,  opacity:0.65}}
                src={props.character.image}
                alt='character picture'
              ></img>
            </a>
          </div>

          <div
            id="expanded-text"
            className={`character-description ${props.characterDescription}`}
            style={props.characterStyle}
          >
            <span className='character-quote'>
              <span className='quotation-marks'>“</span>
                {props.character.quote}
              <span className='quotation-marks'>”</span>
            <br/><br/>
            </span>
              {props.character.description}
          </div>
        </div>
      </div>
    )
}

export default CharacterCard;