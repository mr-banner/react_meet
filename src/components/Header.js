import React from "react";
import "../components/header.css";
import main from "../img/main.png";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container header-section flex">
          <div className="header-left">
            <h4>Take Matters Into Your Own Hands.</h4>
            <h1><span>Expand</span> your horizin through networking</h1>
            <p>
              Ever wondered what it would be like to hand pick the members on
              your team? Now it is your chance.Build a profile and start chatting
              with professionals.
            </p>
            <a className="primary-btn">Get Started</a>
          </div>
          <div className="header-right">
            <img src={main} alt="Hero logo" />
          </div>
        </div>
      </header>
    </>
  );
};
