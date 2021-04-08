import React from "react";

function Nav() {
  return (
    <header className="flex-row px-1">
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
            <span>Contact</span>
          </li>
          <li className='px-1'>
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
