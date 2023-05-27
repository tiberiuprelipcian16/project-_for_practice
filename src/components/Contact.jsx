import React from "react";
import "../style/Contact.scss";
import Logo from "../assets/logo.svg";
import { FaPhone, FaMailBulk, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contactSection flex f22">
      <div className="contactContainer f22 fc">
        <div className="top flex fr">
          <img src={Logo} alt="Logo Company" />
        </div>

        <div className="middle flex fr">
          <div className="left fc f21">
            <div className="leftTop">
              <h1>Let's talk</h1>
              <h2>Ask us anything or just say hi ...</h2>
            </div>

            <div className="leftBottom flex fc ">
              <a href="tel:">
                <FaPhone />
                &nbsp; &nbsp;&nbsp; 12 345 678 910
              </a>
              <a href="mailto:">
                <FaMailBulk />
                &nbsp;&nbsp;&nbsp;contact@pntcompany.com
              </a>
            </div>
          </div>

          <div className="right">
            <form action="">
              <div className="topForm formElemet fr">
                
                <div className="input fc ">
                  <p>Name</p>
                  <input type="text" />
                </div>

                <div className="input fc">
                  <p>Email</p>
                  <input type="email" name="" id="" />
                </div>
              </div>

              <div className="middleForm formElemet fc">
                <div className="input fc ">
                  <p>Message</p>
                  <input type="text" />
                </div>
              </div>

              <div className="bottomForm">
                <button>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bottom fr f33">
            <div className="social flex">
                <a href=""><span><FaInstagramSquare/></span></a>
                <a href=""><span><FaFacebookSquare/></span></a>
                <a href=""><span><FaLinkedin/></span></a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
