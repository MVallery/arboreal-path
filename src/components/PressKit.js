import React from 'react';
import Jason from '../assets/images/jason3.jpg';
import BookCover from "../assets/images/cover-3d.png";
import { withRouter } from "react-router-dom";

function Presskit(props) {
    return (
        <div className="presskit-main-container">
        <div className="about-background-container presskit-about-background-container">
        <div id='about' ref= {props.aboutRef} className="about-container presskit-about-container">
            <h1>AUTHOR </h1>
            <h2>Jason M. Vallery</h2>
            <div className="picture-description-container presskit-picture-description-container">
                <div className="author-photo-links-container">
                <img className="jason" src={Jason} align="right" alt="Author Image-Jason M. Vallery"></img>
                <a href="/AuthorFull2.jpg" target="_blank" rel="noreferrer">High Resolution Photo</a>
                <a href="/AuthorSmall2.jpg" target="_blank" rel="noreferrer">Low Resolution Photo</a>
                </div>
                <div className="about-paragraph-container author-content-section">
                
                <h3>BIO</h3>
                <p className="paragraph-1">
                It'd probably be advisable to erase me from the internet, but don't you dare try. 
                I will do everything in my power to make sure you don't succeed. If that day ever 
                comes I'll be content in exile, playing with my cats, delving into some video games, and catching up on books.
                </p><br/>



                <p className="paragraph-2">
                Creating characters, worlds, and stories has always been a favorite pastime of mine, 
                from text-based role-playing games, multi-user dungeons (MUDs), massively multiplayer role-playing games, 
                to short stories. Learning to apply those experiences towards writing was a fun and exciting challenge 
                which has resulted in my first novel, Arboreal Path. I look forward to continuing my journey as an author!         
                </p>   <br/>
                <div className="author-sub-section">
                <h3>AUTHOR LINKS</h3>
                Website: <a href="HTTPS://jasonmvallery.com" target="_blank" rel="noreferrer">HTTPS://jasonmvallery.com</a><br/>
                Twitter: <a href="HTTPS://twitter.com/jasonmvallery" target="_blank" rel="noreferrer">HTTPS://twitter.com/jasonmvallery</a><br/>
                Instagram: <a href="HTTPS://instagram.com/jasonmvallery" target="_blank" rel="noreferrer">HTTPS://instagram.com/jasonmvallery</a><br/><br/>

                Aboreal Path Presskit<br/>

                <h3>INTERVIEW TOPICS</h3>
                Aboreal Path<br/>
                Self-publishing<br/>
                Writing as a side-job<br/>
                Mixing humor and horror with fantasy<br/>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className="presskit-arborealpath-container">
            <div className="bookcover-links-container">
                <img src={BookCover} alt='Aboreal Path Cover'/>
                <a href="/APCoverFull.jpg" target="_blank" rel="noreferrer">High Resolution Photo</a>
                <a href="/APCoverSmall.jpg" target="_blank" rel="noreferrer">Low Resolution Photo</a>
            </div>
            <div className="arborealpath-content-container">
            <div className="arborealpath-description">
            <h1>Arboreal Path</h1>
                <p>
                <span style={{color:'orange', fontSize:'1.7rem'}}>The cost of magic is never cheap.</span><br/>
                    Something Hali’s all too familiar with. Renowned as a hero in her country, 
                    the populace looks to Hali for protection from a devastating plague. Though her 
                    spell cures the affliction, it also takes her unborn son, twisting him and the plague 
                    into a monstrous shadow. Hali imprisons the shadow inside a magical tattoo on her 
                    arm but can’t fully contain its power before it kills her wife, adding another face 
                    to its collection.<br/><br/>

                    Now cursed with an unending life, she finds unexpected friendship in Alim—a magicless 
                    explorer with an insatiable appetite—and Tio—a socially awkward druid—as she attempts 
                    to free her family. Caught up in Tio’s quest to restore the world’s dwindling magic, Hali 
                    finds herself at a crossroads. <br/><br/>

                    Once again, the world calls upon her to be a hero. Does she still have the resolve to answer, 
                    knowing what it might cost? Who will be sacrificed this time?<br/><br/>
                </p>
            </div>
            <div className="arborealpath-section-container">
                <div className="arborealpath-about-section">
                    <h3>About Arboreal Path</h3>
                    <p>
                        Author: Jason M Vallery<br/>
                        Genre: Epic Fantasy<br/>
                        Category: Adult<br/>
                        Page Count: 400<br/><br/>

                        Content Warning<br/>
                        People with sensitivities to the following <br/>
                        subjects may find Arboreal Path difficult to read:<br/>
                        Suicide<br/>
                        Death of an unborn child<br/>
                        Loss of life partner<br/>
                        Combat involving animals<br/><br/>

                        ISBN<br/>
                        978-1-7347479-1-1 (paperback)<br/>
                        978-1-7347479-2-8 (ebook)<br/>
                        978-1-7347479-0-4 (hardback)<br/><br/>
                    </p>
                </div>
                <div className="arborealpath-links-section">
                    <h3>Links</h3>
                    <p>
                        Stores:<br/>
                        <a href="https://books2read.com/u/mqgPxd?store=amazon" target="_blank" rel="noreferrer">Amazon</a> <br/>
                        <a href="https://books2read.com/u/mqgPxd?store=bn" target="_blank" rel="noreferrer">Barnes & Noble</a><br/>
                        <a href="https://books2read.com/u/mqgPxd?store=kobo" target="_blank" rel="noreferrer">Kobo Ebooks</a><br/>
                        <a href="https://www.booktopia.com.au/arboreal-path-jason-m-vallery/ebook/9781734747928.html" target="_blank" rel="noreferrer">Booktopia</a><br/>
                        <a href="https://www.chapters.indigo.ca/en-ca/books/arboreal-path/9781734747928-item.html" target="_blank" rel="noreferrer">Indigo</a><br/>
                    </p><br/>
                    <p>
                    Read the first 3 Chapters!<br/>
                    <a href="Arboreal_Path_Print_Preview.pdf" target="_blank" rel="noreferrer">Download PDF</a><br/>
                    <a href="Arboreal_Path_eBook_Preview.epub" target="_blank" rel="noreferrer">Download Epub</a><br/>

                    Website: <a href="https://arborealpath.com" target="_blank" rel="noreferrer">https://arborealpath.com</a><br/><br/><br/>

                    Reviews:
                    6 out of 5 stars. <br/><br/>

                    “Nine months of pregnancy
                    finally paid off” <br/>

                    - Jason’s Mom
                    </p>
                </div>
            </div>
            </div>
        </div> 

        </div>
    );
  }
  
  export default withRouter(Presskit);
  
