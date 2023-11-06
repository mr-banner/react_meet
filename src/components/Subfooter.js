import React from "react";
import "../components/subfooter.css";
import logo from "../img/local_meet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const Subfooter = () => {
  return (
    <>
      <section className="sub-footer">
        <div className=" container content-top flex">
          <h1>
            Build <span>team</span> and simply
          </h1>
          <h2>host new meetings </h2>
          <a href="#" className="primary-btn">
            Get started
          </a>
        </div>
        <div className=" container content-bottom flex">
          <div className="org">
            <a className="company-logo">
              <img src={logo} alt="Comapny logo" />
            </a>
            <p>
              This application made for professionals and institutes to host
              meetings effectivly with others.
            </p>
          </div>
          <div className="links">
            <h5>Quick Link</h5>
            <a>Home</a>
            <a>About</a>
          </div>
          <div className="social">
            <h5>Social Links</h5>
            <div className="social-links">
              <a>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
