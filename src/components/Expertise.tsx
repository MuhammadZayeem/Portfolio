import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "CSS3",
    "HTML5",
    "Javascript",
    "C++",
    "System Architecture",
    "Data Structures & Algorithm",
    "OOP Design Patterns",
];

const labelsSecond = [
    "SQL",
    "Database Design",
        "Database Design",
    "Normalization",
    "File I/O",
        "Data Architecture",
];

const labelsThird = [
    "JavaFx",
        "Analytics",
    "Git",
    "Github",
    "Tools",
"CSS3",
    "HTML5",
    "Javascript",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack Web & Desktop Development</h3>
                    <p>I develop complete applications across web and desktop platforms. My expertise spans frontend development with HTML, CSS, and JavaScript for responsive interfaces, combined with robust backend systems in Java and C++. I architect end-to-end solutions using OOP principles and enterprise design patterns.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Database Design & Full-Stack Integration</h3>
                    <p> I design scalable SQL databases and integrate them seamlessly with frontend and backend systems. My expertise includes database architecture, normalization, optimization, and comprehensive CRUD operations. I build data-driven applications with strong data integrity and validation frameworks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Interactive User Interfaces & Systems</h3>
                    <p>I create responsive web interfaces and sophisticated desktop applications with powerful business logic. I specialize in designing intuitive dashboards, implementing authentication systems, real-time monitoring, and comprehensive logging. My applications prioritize user experience, security, and operational efficiency. Experienced with version control and modern development workflows.</p>
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