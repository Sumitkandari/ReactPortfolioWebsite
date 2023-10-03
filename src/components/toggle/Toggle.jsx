import React, { useContext } from 'react'
import "./toggle.css";
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import { ThemeContext } from '../../context';
const Toggle = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="t" style={{backgroundColor:!darkMode&&"black"}}>
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon"/>
        <div  style={{left:darkMode?"25px":0,transition:"0.6s",backgroundColor:!darkMode&&"#515050"}} className="t-button" onClick={()=>{
          theme.dispatch({type:"TOGGLE"})
        }} >

        </div>
    </div>
  )
}

export default Toggle