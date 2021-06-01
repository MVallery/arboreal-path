import React from 'react';
import Jason from '../assets/images/jason3.jpg';
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
                <p className="paragraph-1">
                It'd probably be advisable to erase me from the internet, but don't you dare try. 
                I will do everything in my power to make sure you don't succeed. If that day ever 
                comes I'll be content in exile, playing with my cats, delving into some video games, and catching up on books.
                </p>



                <p className="paragraph-2">
                Creating characters, worlds, and stories has always been a favorite pastime of mine, 
                from text-based role-playing games, multi-user dungeons (MUDs), massively multiplayer role-playing games, 
                to short stories. Learning to apply those experiences towards writing was a fun and exciting challenge 
                which has resulted in my first novel, Arboreal Path. I look forward to continuing my journey as an author!         
                </p>   
                </div>

            </div>
            <div className="social-media-container">
                <a href="https://www.goodreads.com/jasonmvallery" target="_blank"><img className="social-media-about" src={Goodreads} alt='goodreads'></img></a>
                <a href="https://twitter.com/JasonMVallery" target="_blank"><img className="social-media-about" src={Twitter} alt='twitter'></img></a>
                <a href="https://www.instagram.com/jasonmvallery" target="_blank"><img className="social-media-about" src={Instagram} alt='instagram'></img></a>

            </div>

        </div>
        </div>
    );
  }
  
  export default About;