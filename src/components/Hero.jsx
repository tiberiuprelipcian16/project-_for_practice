import React from "react";
import Header from "./Header";
import "../style/Hero.scss";

const Hero = () => {
  return (
    <section className="flex fc">
      <Header />

      <div className="contentHero flex fc">
        <h1>Digital intelligence for a safer world</h1>
        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
        <button>Get started</button>
      </div>

      <div className="scroll">
        <img src="https://www.orthopedicare.com/wp-content/themes/socius/images/scroll-down.gif" alt="Scroll Gif" />
      </div>
    </section>
  );
};

export default Hero;
