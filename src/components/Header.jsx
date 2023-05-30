import React from "react";
import "../style/Header.scss";
import Logo from "../assets/logo.svg";
import LogoHover from "../assets/logoHover.svg";

function changeLogoOver() {
  document.getElementById("img").style.display = "none";
  document.getElementById("imgHover").style.display = "inherit";
}

function changeLogoDown() {
  document.getElementById("img").style.display = "inherit";
  document.getElementById("imgHover").style.display = "none";
}

const Header = () => {
  return (
    <header className="flex fr">
      <div
        className="logo"
        onMouseOver={changeLogoOver}
        onMouseDown={changeLogoDown}
        id="logo"
      >
        <img src={Logo} id="img" alt="Logo" />
        <img src={LogoHover} id="imgHover" alt="Logo" />
      </div>

      <div className="main flex fr">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#team">Team</a>
        <a href="#reviews">Reviews</a>
        <a href="#careers">Careers</a>
        <a href="#contact">Contact</a>

        <div className="hamburger flex fc f23">
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
