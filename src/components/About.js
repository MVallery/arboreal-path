import React from 'react';
import Jason from '../assets/images/jason.png';

const About = props => {
    return (
        <div id='about' ref= {props.aboutRef} className="about-container">
<h1>Jason M. Vallery</h1>
{/* <img className="jason" src={Jason} align="right"></img> */}
<p>This is a paragraph about Jason. He is the coolest of them all. He knows how to play viddy, and how to write a booky book.
    Sometimes he is a lame-o but sometimes he's the okayest.
</p>
</div>
    );
  }
  
  export default About;