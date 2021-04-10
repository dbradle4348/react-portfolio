import React from 'react';
import danielbradley1pageresume from '../../assets/Resume/danielbradley1pageresume.docx.pdf'

function Resume() {
    return (
        <section>
        <h1 id="resume">Resume</h1>
        <p>Download one page resume here: <a href={danielbradley1pageresume} target="_blank" rel="noreferrer" download>Download Resume</a></p>
        <h4>Developer Proficiencies:</h4>
        <p>HTML, CSS, Javascript, Node.js, React, Mongodb, SQL, [I'll fill this out better later]</p>
        </section>
    )
}

export default Resume;