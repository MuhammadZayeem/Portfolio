import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/Avatar.jpeg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MuhammadZayeem" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhammad-zayeem-95026433b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Muhammad Zayeem</h1>
          <p>Pursuing Computer Science CUI 29'</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/MuhammadZayeem" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhammad-zayeem-95026433b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;