import React from "react";
import "./WhatWeDo.css";
import { Link } from "react-router-dom";

import Pic from "../assets/343b0ec396800d1cbd0c0e6939e5afca_XL-compressor.jpg";
export default function WhatWeDo() {
  return (
    <div>
      <div id="what">
        <div id="what_we_do">
          <h1>You Have Bright Ideas. We Bring Them To Life</h1>
          <h2>A One-Stop Solution for All Your Online Needs</h2>
        </div>
      </div>
      <h1>How We Work</h1>
      <div className="technique">
        <div className="word_side">
          <h1 className="technique_description">Discovery And Research</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cupiditate veritatis, facilis incidunt, debitis minus aperiam, nulla
            pariatur ea praesentium consequatur deleniti sed numquam? Nihil
            iusto possimus a consectetur sunt!
          </p>
          <Link to="/contactus">
            <h3>Work With Us</h3>
          </Link>
        </div>
        <div className="picture_side">
          <img src={Pic} alt="" />
        </div>
      </div>
      <div className="technique">
        <div className="picture_side">
          <img src={Pic} alt="" />
        </div>
        <div className="word_side">
          <h1 className="technique_description">Design And Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cupiditate veritatis, facilis incidunt, debitis minus aperiam, nulla
            pariatur ea praesentium consequatur deleniti sed numquam? Nihil
            iusto possimus a consectetur sunt!
          </p>
          <Link to="/contactus">
            <h3>Work With Us</h3>
          </Link>
        </div>
      </div>
      <div className="technique">
        <div className="word_side">
          <h1 className="technique_description">Testing And Launch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cupiditate veritatis, facilis incidunt, debitis minus aperiam, nulla
            pariatur ea praesentium consequatur deleniti sed numquam? Nihil
            iusto possimus a consectetur sunt!
          </p>
          <Link to="/contactus">
            <h3>Work With Us</h3>
          </Link>
        </div>
        <div className="picture_side">
          <img src={Pic} alt="" />
        </div>
      </div>
    </div>
  );
}
