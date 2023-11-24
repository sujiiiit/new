import React, { useState, useEffect } from "react";
import Logo from "./logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.addEventListener("click", toggleMenu);

    // Cleanup the event listener on component unmount
    return () => {
      menuBtn.removeEventListener("click", toggleMenu);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <button className="btn-icon tgico-menu tgico menu-btn"></button>
          <Logo />

          <ul className={`menu-items ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Achievements</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Admin</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
