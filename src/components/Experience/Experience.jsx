import React, { useContext } from "react";
// import { themeContext } from "../../Context";
import "./Experience.css";
// const Experience = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
// }
const Experience = () => {
  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle" >1+</div>
        <span>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">20+</div>
        <span>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle freelance">Freelance</div>
        <span>companies </span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience
