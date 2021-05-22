import React from 'react';
import Jason from '../assets/images/jason2.png';
import Instagram from '../assets/images/instagram-about-blue.png';
import Twitter from '../assets/images/twitter-about-blue.png';
import Goodreads from '../assets/images/goodreads-about.png';

const About = props => {
    return (
        <div className="about-background-container">
        <div id='about' ref= {props.aboutRef} className="about-container">
            <h1>AUTHOR </h1>
            <h2>Jason M. Vallery</h2>
            <div className="picture-description-container">
                <img className="jason" src={Jason} align="right"></img>
                <div className="about-paragraph-container">
                <p className="paragraph-1">It'd be advisable to erase me from the internet, but until my fated erasure comes I'm content to play with my cats, 
                delve into some video games, and write, write, write.</p>

                <p className="paragraph-2">Creating characters, worlds, and stories has always been a favorite pastime of mine, 
                from text-based role-playing games, multi-user dungeons (MUDs), massively multiplayer role-playing games, to short stories. 
                Learning to apply those experiences towards writing a novel was a fun challenge and I look forward to continuing my journey as an author.                
                </p>   
                </div>

            </div>
            <div className="social-media-container">
                <img className="social-media-about" src={Instagram}></img>
                <img className="social-media-about" src={Twitter}></img>
                <img className="social-media-about" src={Goodreads}></img>

            </div>

        </div>
        </div>
    );
  }
  
  export default About;