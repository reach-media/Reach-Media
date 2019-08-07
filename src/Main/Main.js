import React from "react";
import "./Main.css";
export default function Main() {
  return (
    <div>
      <main>
        <p>We advance your business with great software</p>
      </main>
      <div id="business_statement">
        <h1>Cutting-edge Software And Digital Marketing Solutions</h1>
      </div>
      <div id="services_provided">
        <div className="service">
          <i class="fas fa-3x fa-laptop-code" />
          <div className="service_h4">
            <h4> Beautiful Web Design</h4>
          </div>
        </div>
        <div className="service">
          <i class="fas fa-tv fa-3x" />
          <div className="service_h4">
            <h4>Web Development</h4>
          </div>
        </div>
        <div className="service">
          <i class="fas fa-bullseye fa-3x" />
          <div className="service_h4">
            <h4>Strategic Digital Marketing</h4>
          </div>
        </div>
        <div className="service">
          <i class="fas fa-3x fa-hashtag" />
          <div className="service_h4">
            <h4>Social Media Management</h4>
          </div>
        </div>
        <div className="service">
          <i class="fab fa-3x fa-searchengin" />
          <div className="service_h4">
            <h4>Search Engine Optimization</h4>
          </div>
        </div>
        <div className="service">
          <i class="far fa-3x fa-building" />
          <div className="service_h4">
            <h4>Branding</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
