import React from 'react'
import coverImage from "../../assets/cover/cover-image.png";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hi! I'm a full stack web developer, national guard veteran, musical theater performer, and long-time hiking enthusiast. Check out some of my work in the links above and if you have any questions or would like to hire me for a project, hit that contact button and let's chat!
      </p>
      </div>
    </section>
  )
}

export default About