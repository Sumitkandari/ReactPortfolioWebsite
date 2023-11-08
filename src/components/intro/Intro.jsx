import React from "react";
import "./intro.css";
import Me from "../../img/me3.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Sumit Kandari</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Gamer</div>
              <div className="i-title-item">Fitness Freak</div>
            </div>
          </div>
          <p className="i-desc">
            I design an develop websites of all sizes, specializing in creating
            stylish, modern websites, web services.
          </p>
          <a href="https://drive.google.com/file/d/170tOyoLeTWXDTDbNOS6mCDxBapn6Z8in/view?usp=sharing">
            <button className="i-btn">Download Resume</button>
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
