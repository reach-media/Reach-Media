import React from "react";
import "./WhoWeAre.css";

export default function WhoWeAre() {
  return (
    <div id="WhoWeAre_background">
      <div>
        <h1 id="fully_service_statement">
          We are a full-service software and digital marketing agency here to
          help you <span>Reach</span> your full potential.
        </h1>
        <p>
          Our methodology is simple: Provide Excellent solutions, build lasting
          relationships. We Learn about your vision, create solutios, and
          provide continious support.
        </p>
        <button type="submit" className="btn btn-danger free">
          BOOK A FREE CONSULTATION
        </button>
      </div>
    </div>
  );
}
