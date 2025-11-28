import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created a prediction model for burnout risk. The risk profile anaylses all parts of employees and using metrics to perform early detection and alert management with reccomendations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Wanachisha" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Wanachisha" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed a loan default prediction model. The model analyses consumer behave and uses the data to predict if the loan will be defaulted</p>
            </div>
        </div>
    </div>
    );
}

export default Project;