import React from "react";
import "./ChooseUs.css";

//files
import B2B from "../images/B2B-View-Case-Studies.png";
export default function ChooseUs() {
  return (
    <div>
      <div id="facts">
        <div className="first_andthird_statements">
          <div>
            <h1 className="numbers">120+</h1>
            <p className="first_and_third">Great Sites Published</p>
          </div>
        </div>
        <div className="second_andfourth_statements">
          <div>
            <h1 className="numbers_1">90+</h1>
            <p>Lasting Relationships</p>
          </div>
        </div>
        <div className="first_andthird_statements">
          <div>
            <h1 className="numbers">145+</h1>
            <p>Brands Launched</p>
          </div>
        </div>

        <div className="second_andfourth_statements">
          <div>
            <h1 className="numbers_1">80+</h1>
            <p>Businesses Optimized For Marketing</p>
          </div>
        </div>
      </div>
      <div id="why_partner_withUs">
        <div id="wh_us">
          <h1>Why Partner with Us</h1>
          <p>
            With us you will get an experienced team that to build and maintain
            your presense online.
          </p>
          <br />
          <br />
          <p>Our goal is for you to run your business as easily as possible.</p>
        </div>
        <div id="why_us_pic" />
      </div>
    </div>
  );
}
