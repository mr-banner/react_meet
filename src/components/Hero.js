import React from "react";
import hero_1 from "../img/hero_1.png";
import "../components/hero.css";

export const Hero = () => {
  return (
    <>
      <section className="more-feature">
        <div className="container more-feature-section flex">
          <div className="f1-left">
            <img src={hero_1} alt="image" />
          </div>
          <div className="f1-right">
            <h4>So Many Possibilities</h4>
            <h3>Meet the pros just like you</h3>
            <p>
              Wether you're looking to assemble the team you have always dreamed
              of or that you're trying to out source a task for a specific
              project, this is the app for you. Create meetings with
              professionals by just a single click at your disposal. It has all
              the tools you need.
            </p>
            <li><a href ="/signup"className="hoover-links secondary-btn">Sign Up</a></li>
          </div>
        </div>
      </section>
      <section className="more-feature-2">
        <div className="container more-feature-section-2 flex">
          <div className="f1-right">
            <h4>Create meetings easily</h4>
            <h3 className="left">Control your most valuable time</h3>
            <p>
              The application allows you to create business meetings from the
              palm of your hands. Create meetings with colleauges and team
              members so easily by our application.
            </p>
          </div>
          <div className="f1-left">
            <img src={hero_1} alt="" />
          </div>
        </div>
      </section>

      <div id="line">
        <div id="red"></div>
        <div id="yellow"></div>
        <div id="blue"></div>
      </div>
    </>
  );
};
