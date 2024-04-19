import React from "react";
import "./Footer.css";
import {
  FaXTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sb__footer section_padding">
          <div className="sb__footer-links">
            <div className="sb__footer-links-div">
              <h4>Our Team</h4>
              <a className="footer-a" href="/employee">
                <p>Employees</p>
              </a>
              <a className="footer-a" href="/">
                <p>Partners</p>
              </a>
            </div>
            <div className="sb__footer-links-div">
              <h4>Resources</h4>
              <a className="footer-a" href="/">
                <p>Resource Center</p>
              </a>
              <a className="footer-a" href="/">
                <p>Testimonials</p>
              </a>
            </div>

            <div className="sb__footer-links-div">
              <h4>Company</h4>
              <a className="footer-a" href="/">
                <p>About</p>
              </a>
              <a className="footer-a" href="/">
                <p>Contact</p>
              </a>
            </div>

            <div className="sb__footer-links-div">
              <h4>Follow us</h4>
              <div className="socialmedia">
                <a className="footer-a" href="/">
                  <image className="socialIcons">
                    <FaFacebookF />
                  </image>
                </a>

                <a className="footer-a" href="https://wa.link/g1immo">
                  <image className="socialIcons">
                    <FaWhatsapp />
                  </image>
                </a>

                <a className="footer-a" href="/">
                  {" "}
                  <image className="socialIcons">
                    <FaXTwitter />
                  </image>
                </a>

                <a className="footer-a" href="/">
                  <image className="socialIcons">
                    <FaInstagram />
                  </image>
                </a>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>
                &copy;{new Date().getFullYear()} TallyAddons. All rights
                reserved
              </p>
            </div>
            <div className="sb_footer-below-links">
              <a className="footer-a" href="/">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </a>
              <a className="footer-a" href="/">
                <div>
                  <p>Privacy Policy</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
