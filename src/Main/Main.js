import React from "react";
import "./Main.css";
import Carousel from "../Carousel/Carousel";
import ChooseUs from "../ChooseUs/ChooseUs";
export default function Main() {
  return (
    <div>
      <main>
        <div>
          <p id="main_para">We Advance Your Business With Great Software</p>
        </div>
      </main>
      <div id="business_statement">
        <h1>Cutting-edge Software And Digital Marketing Solutions</h1>
      </div>
      <div id="services_provided">
        {/* <div id="what_weProvide">
          <h1>We Provide All The Tools You'll Need To Thrive Online</h1>
        </div> */}
        <div id="my_services">
          <div className="service">
            <i className="fas fa-3x fa-laptop-code" />
            <div className="service_h4">
              <h4> Beautiful Web Design</h4>
            </div>
          </div>
          <div className="service">
            <i className="fas fa-tv fa-3x" />
            <div className="service_h4">
              <h4>Web Development</h4>
            </div>
          </div>
          <div className="service">
            <i className="fas fa-bullseye fa-3x middle_icons" />
            <div className="service_h4">
              <h4>Strategic Digital Marketing</h4>
            </div>
          </div>
          <div className="service">
            <i className="fas fa-3x fa-hashtag middle_icons" />
            <div className="service_h4">
              <h4>Social Media Management</h4>
            </div>
          </div>
          <div className="service">
            <i className="fab fa-3x fa-searchengin" />
            <div className="service_h4">
              <h4>Search Engine Optimization</h4>
            </div>
          </div>
          <div className="service">
            <i className="far fa-3x fa-building" />
            <div className="service_h4">
              <h4>Branding</h4>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <ChooseUs />
    </div>
  );
}
