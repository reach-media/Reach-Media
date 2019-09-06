import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import Subscribe from "./Dialogue";

export default function Footer() {
  return (
    <footer className="footer">
      <article className="article">
        <section className="contact">
          <h3>TALK TO US</h3>
          <p className="paragraph">832-952-7770</p>
          <p className="paragraph"> reachmedia@gmail.com</p>
        </section>
        <section className="contact love">
          <h3>KEEP UP WITH REACH MEDIA</h3>
          <div className="icons">
          <a href="https://www.facebook.com/reachmediawin/?eid=ARB8I2huo0LAQAOiuJc5tbgl-dtAKO0T3FVDYuwnlNRnHlIadFrJyY3G6TC4ihQCMWy8lBiwLsOxbmlr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a href="https://twitter.com/ReachMedia3" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/reachmediawin/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/reach-media-691428191/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
        </div> 
          {/* <Subscribe /> */}
        </section>
      </article>
      <section className="social">
        <div className="content">
          <p>
            <a className="copyright">
              Copyright &#169; {new Date().getFullYear()}{" "}
            </a>
            <a className="large">Reach Media</a>
          </p>
          <p className="pipe">&#x7c;</p>
          <p className="large">Terms and Conditions</p>
          <p className="pipe">&#x7c;</p>
          <p className="large">Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
}
