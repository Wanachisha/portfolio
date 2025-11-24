import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-nwrapper">
          <img src={`${process.env.PUBLIC_URL}/headshot.jpg`} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Wanachisha" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/wanachishamunjunga/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Wana Chisha Munjunga</h1>
          <p>Data Scientist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Wanachisha" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/wanachishamunjunga/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;