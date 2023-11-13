import React from "react";
import "./about.css";


const About = () => {
  function handlenav(e) {
    // console.log(tag)
    // const navElement=document.querySelector(`.${tag}`)
    // navElement.classList.add("bottom-border")
    console.log(e);

    console.log(e.target.classList.add("bottom-border"));
  }
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          {/* <img
            className="a-img"
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          /> */}
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-desc">
          As a passionate and dedicated fresher frontend developer, I am eager
          to contribute my skills and knowledge to create engaging and
          user-friendly web experiences. With a strong foundation in HTML, CSS,
          and JavaScript, along with a commitment to continuous learning, I am
          ready to collaborate with a dynamic team to turn ideas into
          interactive, visually appealing websites.
        </p>
      
      </div>
    </div>
  );
};

export default About;
