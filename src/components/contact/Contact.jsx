import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import Github from "../../img/github.png"
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  const [done,setDone]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_mhq3w32",
      "template_15xin7b",
      formRef.current,
      "980FK8qRwcznt5rU3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
        );
        for(let i=0;i<formRef.current.length;i++){

          formRef.current[i].value=""
        }
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Checkout my Socials</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7895907663
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a  target="_blank" href="https://www.linkedin.com/in/sumit-kandari/">https://www.linkedin.com/in/sumit-kandari/</a>
              
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />

              Dehradun, Uttarakhand, India
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
              <a target="_blank" href="https://github.com/Sumitkandari">https://github.com/Sumitkandari</a>
              
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>So far did you enjoy?</b> Get in touch. Always available for
            work if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor:darkMode&&"#333", color:darkMode&&"white"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor:darkMode&&"#333",color:darkMode&&"white"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor:darkMode&&"#333",color:darkMode&&"white"}} type="text" placeholder="Email" name="user_email" />
            <textarea  style={{backgroundColor:darkMode&&"#333",color:darkMode&&"white"}} rows="5" placeholder="Message" name="message"></textarea>
            <button className="c-btn">Submit</button>
            <br/>
            {
                done?"Thankyou for you feeback":""
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
