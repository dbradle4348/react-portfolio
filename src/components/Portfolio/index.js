import React from 'react';
import Whiskey_Ice from "../../assets/Work/Whiskey_Ice.jpg";
import weights from "../../assets/Work/weights.jpg"
import myTeam from "../../assets/Work/myTeam.jpg"
import githubImage from "../../assets/Work/githubImage.png"

function Portfolio() {
  
    return (
    <section>
      <h1 id="portfolio">Portfolio</h1>
      <p>Some of my work:</p>
    <div className='flex-row px-2 space-between'>
        <div>
        <a href="https://kenneththelarson.github.io/urban-fiesta/" target="_blank" rel="noopener noreferrer">
            <img src={Whiskey_Ice} alt="urban-fiesta" width='300'/>
        </a>
            <p>Urban Fiesta</p>
        </div>
        <div>
        <a href="https://gym-rats-1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={weights} alt="gym-rats" width='300'/>
        </a>
            <p>Gym Rats</p>
        </div>
        <div>
        <a href="https://github.com/dbradle4348/my-team" target="_blank" rel="noopener noreferrer">
            <img src={myTeam} alt="my-team" width='300'/>
        </a>
            <p>My Team</p>
        </div>
        <div>
        <a href="https://github.com/dbradle4348/README-Generator" target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="readme-generator" width='300'/>
        </a>
            <p>ReadMe Generator</p>
        </div>
        <div>
        <a href="https://gym-rats-1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={weights} alt="gym-rats" width='300'/>
        </a>
            <p>Stand-In</p>
        </div>
        <div>
        <a href="https://gym-rats-1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={weights} alt="gym-rats" width='300'/>
        </a>
            <p>Stand-In</p>
        </div>
    </div>
    
    </section>
  );
}

export default Portfolio;