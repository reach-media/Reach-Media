import React from "react";
import "./ChooseUs.css";

//files
import B2B from "../images/B2B-View-Case-Studies.png";
export default function ChooseUs() {
  return (
    <div id="partner">
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
      <div className="why_partner_withUs">
        <div className="why_us">
          <h1>Why Partner With Us</h1>
          <p>
            With us, you will get an experienced team dedicated to building and
            maintainingy your presense online.
          </p>
          {/* <br /> */}
          <p>Our goal is for you to run your business as easily as possible.</p>
        </div>
        <div id="why_us_pic" />
      </div>
      <div className="why_partner_withUs">
        <div id="why_us_pic2" />
        <div className="why_us">
          <h1>Meet With Us</h1>
          <p>
            During Our Meeting, we will learn all about your business needs,
            customer tendencies, and overall vision to tailor a strategy just
            for your business or website.
          </p>
        </div>
      </div>
      <h1 id="connect">LET'S CONNECT!</h1>
    </div>
  );
}
