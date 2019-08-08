import React from "react";
import "./Header.css";
//imported files
import Icon from "../images/hamburger_icon2.png";
import Logo from "../images/reach-logo.jpg";

export default function Header() {
  return (
    <div>
      <nav>
        <div id="logo">
          <img src={Logo} alt="" id="logo_img" />
          <h2 id="media_h2">Media</h2>
        </div>
        <div id="hamburger_icon">
          <img src={Icon} alt="" />
        </div>
      </nav>
    </div>
  );
}
