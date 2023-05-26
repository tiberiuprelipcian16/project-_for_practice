import React from "react";
import "../style/Footer.scss";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex fc">
      <div className="content fr">
        <div className="c1 fc">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="c2 fc">
          <a href="#home">Internship</a>
          <a href="#products">Job</a>
          <a href="#careers">Training</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="c3 fc">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
          
        </div>
      </div>

      <div className="policy fr f22">
        <p>© {currentYear} PNT Company. All rights reserved.   </p>
       &nbsp; &nbsp;
        <a href="#contact">Privacy policy </a>
      </div>
    </footer>
  );
};

export default Footer;
