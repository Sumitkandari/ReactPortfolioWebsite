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
        <div className="a-cardbg"></div>
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
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          As a passionate and dedicated fresher frontend developer, I am eager
          to contribute my skills and knowledge to create engaging and
          user-friendly web experiences. With a strong foundation in HTML, CSS,
          and JavaScript, along with a commitment to continuous learning, I am
          ready to collaborate with a dynamic team to turn ideas into
          interactive, visually appealing websites.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
        {/* <ul className="a-short-navbar">
          <li className="a-shortnavelement education" onClick={(e)=>handlenav(e)}>Education</li>
          <li className="a-shortnavelement workexp" onClick={(e)=>handlenav(e)}>Work Experience</li>
          <li className="a-shortnavelement project" onClick={(e)=>handlenav(e)}>Projects</li>
        </ul>
        <div className="a-education">
          <p>
            Bachelor of Technology Dehradun Institute of Technology
            University-Uttrakhand,India
          </p>
          <p>
            Senior Secondary Examination Kendriya Vidyalaya No.1 HBK-
            Uttrakhand,India
          </p>
          <p>
            Secondary Examination Kendriya Vidyalaya No.1 HBK- Uttrakhand,India
          </p>
        </div>
        <div className="a-workexp">
          <p>Associate PWC(PricewaterhouseCoopers)</p>
          <p>Intern FoodVybe</p>
        </div>
        <div className="a-projects">
          <p>Personal Portfolio</p>
          <p>Notetaking Web Application</p>
          <p>News Application</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
