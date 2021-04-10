import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="mobileNav">
    <header className="flex-row px-1 navbar">
      <h2>Daniel Bradley</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx2">
            <a href="#about">About</a>
          </li>
          <li className='px-1'>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className='px-1'>
            <a href='#contact-form'>Contact</a>
          </li>
          <li className='px-1'>
            <a href='#resume'>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Nav;
