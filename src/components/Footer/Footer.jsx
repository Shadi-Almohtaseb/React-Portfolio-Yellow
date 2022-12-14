import React from 'react';
import './Footer.css';

import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="photo" style={{ width: "100%" }} />
      <div className="f-content">
        <span>shadi-40@hotmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"4rem"} />
          <Facebook color="white" size={"4rem"} />
          <Gitub color="white" size={"4rem"} />
        </div>
      </div>
    </div>
  )
}

export default Footer
