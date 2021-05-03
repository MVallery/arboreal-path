import React from 'react';
import WorldMap from '../assets/images/world-map.jpg'
const World = () => {
  return (
    <React.Fragment>
      <div id="world" className="world-main-container">
        <div className="world-main-container-gradient">
      <h1>World</h1>
      <img className="world-map" src={WorldMap} />
      </div>
      </div>
    </React.Fragment>
  )
}

export default World;