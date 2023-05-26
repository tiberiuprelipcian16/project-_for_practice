import React from "react";
import "../style/Header.scss";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex fr">
      <div className="logo">
        <img src={Logo} alt="Logo" />        
      </div>


      <div className="main flex fr">
        <a href="#home">Home</a>
        <a href="#page2">Products</a>
        <a href="#page3">Careers</a>
        <a href="#page4">Contact</a>

        <div className="hamburger flex fc f23">
          <span></span>
          <span></span>

        </div>
      </div>
    </header>
  );
};

export default Header;
