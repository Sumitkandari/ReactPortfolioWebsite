import React from "react";
import "./productlist.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Design and Develop. It's Sumit</h1>
        <p className="pl-desc">
          Here are my some of my details.
        </p>
      </div>
      {/* <div className="pl-list">
            {
              products.map((data,index)=>{
                console.log(data.id)
                return <Product img={data.img}  key={data.id}/>
              })
            }
            
        </div> */}
      <div className="pl-wrapper">
        <div className="pl-w-card">
          <h1 style={{position:"relative",zIndex:"3"}}>Education</h1>
          <div className="pl-education">
            <h2 className="pl-w-title">Bachelor of Technology</h2>
            <p>Dehradun Institute of Technology University-Uttrakhand,India</p>
          </div>
          <div className="pl-education">
            <h2 className="pl-w-title">Senior Secondary Examination</h2>
            <p>Kendriya Vidyalaya No.1 HBK- Uttrakhand,India</p>
          </div>
          <div className="pl-education">
            <h2 className="pl-w-title">Secondary Examination</h2>
            <p>Kendriya Vidyalaya No.1 HBK- Uttrakhand,India</p>
          </div>
        </div>
       
        <div className="pl-w-card">
          <h1 style={{position:"relative",zIndex:"3"}}>Work Experience</h1>
          <div className="pl-work">
            <h2>Associate</h2>
            <h3 className="pl-w-title">PWC(PricewaterhouseCoopers)</h3>
            <p>
             - Developed and maintained the server-side logic and core
              functionality of web applications using C# as the primary
              programming language.
            </p>
            <p>
              - I worked closely with the front-end devs and the rest of the team
              to connect the front-end to the backend, making sure everything
              runs smoothly.
            </p>
          </div>
          <div className="pl-work">
            <h2>Intern</h2>
            <h3 className="pl-w-title">FoodVybe</h3>
            <p>
              - Collaborated with the product team to brainstorm and implement
              innovative use cases for geofencing.
            </p>
          </div>
        </div>
        <div className="pl-w-card">
          <h1 style={{position:"relative",zIndex:"3"}}>Projects</h1>
          <div className="pl-projects">
            <h2 className="pl-w-title">Personal Portfolio</h2>
            <p>
              - Personal portfolio which features an adaptive design and
              highlights my professional abilities and skills
            </p>
          </div>
          <div className="pl-projects">
            <h2 className="pl-w-title">Notetaking Web Application</h2>
            <p>
              - Developed a comprehensive note-taking application to improve
              personal productivity and organization.
            </p>
          </div>
          <div className="pl-projects">
            <h2 className="pl-w-title">News Application</h2>
            <p>
              - Developed a feature-rich news application to provide users with
              up-to-date news articles, personalized content recommendations,
              and an intuitive user experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
