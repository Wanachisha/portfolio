import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Pandas",
    "NumPy",
    "Jupyter",
    "Streamlit",
    "Tensorflow"

];

const labelsSecond = [
    "Google Analytics",
    "Facebook Business",
    "Linkedin ads",
    "SEO Tools"
];

const labelsThird = [
    "MySQL",
    "PostgreSQL",
    "Database Design",
    "Data Modelling"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Data Science</h3>
                    <p>I have built a prediction model for burnout risk. The risk profile anaylses all parts of employees and using metrics to perform early detection and alert management with reccomendations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Digital Markting</h3>
                    <p>Developed data-driven marketing strategies that drive brand awareness and customer engagement. By leveraging analytics and targeted campaigns.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Database Management</h3>
                    <p>design and optimize database systems that ensure data integrity and performance. Through efficient query optimization and proper indexing strategies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;