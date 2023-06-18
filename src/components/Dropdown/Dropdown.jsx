import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleMenu}>
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Opção 1</a>
          <a href="#">Opção 2</a>
          <a href="#">Opção 3</a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;