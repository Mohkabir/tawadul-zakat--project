import React, { useEffect, useState } from "react";
// import logo from '../assets/img/footer-logo.png'
import logo from "../assets/img/islam-logo.jpeg";
const Footer = () => {
  const [media, setMedia] = useState(false);

  useEffect(() => {
    window.innerWidth >= 760 ? setMedia(true) : setMedia(false);
  }, [window.innerWidth]);

  const detectSize = () => {
    window.innerWidth >= 760 ? setMedia(true) : setMedia(false);
  };

  window.onresize = detectSize;

  console.log(media);

  return (
    <footer>
      <div className="caf">
        <div className="caf-items max-width">
          <div className="footer-logo">
            <img src={logo} alt="footer logo" />
          </div>
          <div className="contact text-max">
            <h3>CONTACT</h3>
            <ul>
              <p className="tel">Contact Tel: +44 (0)121 605 5555</p>
              <li>General Enquiries</li>
              <li>Complaints & Concerns</li>
              <li>Media Enquiries</li>
              <li>Privacy Statement</li>
            </ul>
          </div>
          <div className="address text-max">
            <h3>ADDRESS</h3>
            <p>
              Islamic Relief Worldwide 19 Rea St South Digbeth Birmingham, B5
              6LB United Kingdom
            </p>
          </div>
          <div className="follow text-max">
            <h3>FOLLOW US</h3>
            <div className="icons">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
