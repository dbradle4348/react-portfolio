import React from "react";

function Nav() {
  return (
    <header>
      <h2>Daniel Bradley</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx2">
            <a href="#about">About</a>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
