import React from 'react';
import Whiskey_Ice from "../../assets/Work/Whiskey_Ice.jpg";
import weights from "../../assets/Work/weights.jpg"
import myTeam from "../../assets/Work/myTeam.jpg"
import githubImage from "../../assets/Work/githubImage.png"

function Portfolio() {
  
    return (
    <section>
      <h1 id="portfolio">Portfolio</h1>
      <p>Here's some of my work! Click on the image to see the deployed application or the image title to see the GitHub repository. If the application is for Node.js only, the link will take you to the repository where you can find installation information in the corresponding ReadMe.</p>
    <div className='flex-row px-2 space-between'>
        <div>
        <a href="https://kenneththelarson.github.io/urban-fiesta/" target="_blank" rel="noopener noreferrer">
            <img src={Whiskey_Ice} alt="urban-fiesta" width='300'/>
        </a>
            <a href="https://github.com/kenneththelarson/urban-fiesta" target="_blank" rel="noopener noreferrer">
            <p>Urban Fiesta</p>    
        </a>
        </div>
        <div>
        <a href="https://gym-rats-1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={weights} alt="gym-rats" width='300'/>
        </a>
        <a href="https://github.com/bbec0689/gym-rats" target="_blank" rel="noopener noreferrer">
            <p>Gym Rats</p>
            </a>
        </div>
        <div>
        <a href="https://github.com/dbradle4348/my-team" target="_blank" rel="noopener noreferrer">
            <img src={myTeam} alt="my-team" width='300'/>
            <p>My Team</p>
        </a>    
        </div>
        <div>
        <a href="https://github.com/dbradle4348/README-Generator" target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="readme-generator" width='300'/>
            <p>ReadMe Generator</p>
        </a>    
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