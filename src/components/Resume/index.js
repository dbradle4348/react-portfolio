import React from 'react';
import danielbradley1pageresume from '../../assets/Resume/danielbradley1pageresume.pdf';

function Resume() {
    return (
        <section>
        <h1 id="resume">Resume</h1>
        <p>Download one page resume here: <a href={danielbradley1pageresume} target="_blank" download>Download Resume</a></p>
        </section>
    )
}

export default Resume;