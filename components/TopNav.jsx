"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className="navbar sm:">
      <div>
        <p>AISS</p>
      </div>
      <div className="navbar--items">
        <ul>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="home"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "navbar__content" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "navbar__content" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="skills"
              onClick={() => setActiveNav("#skills")}
              className={activeNav === "#skills" ? "navbar__content" : ""}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="portfolio"
              onClick={() => setActiveNav("#portfolio")}
              className={activeNav === "#portfolio" ? "navbar__content" : ""}
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "navbar__content" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/rolex.png"
              download
              className="bg-black px-4 py-2 cursor-pointer rounded-md"
            >
              Download CV
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
