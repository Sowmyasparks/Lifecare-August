import React from "react";
import Logo from "../../images/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className='logo_align'><img src={Logo} height={32} width={184} alt="Lifecare Logo" /> </div>
      <nav className='hideWhenSmall' aria-label="Navigation Links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#team">Team</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </nav>
      <button>Book a session</button>
    </header>
  );
};

export default Header;
