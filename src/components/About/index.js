import React from 'react'
import coverImage from "../../assets/cover/cover-image.png";
import DanielBradleyHeadshot from "../../assets/cover/DanielBradleyHeadshot.JPG"

function About() {

  return (
    <section className="my-5" >
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <h1 id="about">About Me</h1>
      <div className="my-2 flex-row">
        <img src={DanielBradleyHeadshot} className="my-2" style={{ width: "25%" }} alt="headshot" />
        <p>
          Hi! I'm a full stack web developer, national guard veteran, musical theater performer, and long-time hiking enthusiast. Check out some of my work in the links above and if you have any questions or would like to hire me for a project, hit that contact button and let's chat!
        </p>
      </div>
    </section>
  )
}

export default About