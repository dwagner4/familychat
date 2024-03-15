
import React, { useState } from "react";
import './menu.css'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container" onClick={toggleMenu}>
      <svg className="menu-icon" viewBox="0 0 24 24">
        <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>

      <div className={`menu-items ${isOpen ? "open" : ""}`}>
        <div className="menu-item">Item 1</div>
        <div className="menu-item">Item 2</div>
        <div className="menu-item">Item 3</div>
        <div className="menu-item">Item 4</div>
      </div>
    </div>
  )
}

export default Menu

