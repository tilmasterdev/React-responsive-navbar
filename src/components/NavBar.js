import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./NavBar.css";
import { PiPhoneCallFill } from "react-icons/pi";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <div className="company-info">
            <h1>Tallyaddons</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="right">
          <div className="contact-info">
            <div className="contact-item">
              <PiPhoneCallFill className="icon"/>
              <h2>+9190935 00450</h2>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="icon"/>
              <h2>+9190935 00450</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
