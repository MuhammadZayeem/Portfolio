import React from "react";

import cert01 from "../assets/images/cert01.png";
import cert02 from "../assets/images/cert02.png";
import cert03 from "../assets/images/cert03.png";

import "../assets/styles/Certification.scss";

function Certification() {
    return (
        <div className="certifications-container" id="certifications">
            <h1>Certifications</h1>

            <div className="certifications-grid">

                <div className="certificate">
                    <a href="https://www.coursera.org/account/accomplishments/verify/RFNM7GAHXI51" target="_blank" rel="noreferrer">
                        <div className="certificate-image">
                            <img
                                src={cert01}
                                className="zoom"
                                alt="Front-End Development"
                            />
                        </div>
                    </a>

                    <a href="https://www.coursera.org/account/accomplishments/verify/RFNM7GAHXI51" target="_blank" rel="noreferrer">
                        <h2>Front-End Development</h2>
                    </a>

                    <p>
                        <strong>Issued by:</strong> Coursera
                        <br /><br />
                        Gained hands-on experience building responsive and interactive websites using HTML, CSS, JavaScript, and modern UI design principles.
                    </p>
                </div>

                <div className="certificate">
                    <a href="https://www.coursera.org/account/accomplishments/verify/3P8CFWW7MXZI" target="_blank" rel="noreferrer">
                        <div className="certificate-image">
                            <img
                                src={cert02}
                                className="zoom"
                                alt="Programming with C++"
                            />
                        </div>
                    </a>

                    <a href="https://www.coursera.org/account/accomplishments/verify/3P8CFWW7MXZI" target="_blank" rel="noreferrer">
                        <h2>Programming with C++</h2>
                    </a>

                    <p>
                        <strong>Issued by:</strong> SimpliLearn-Coursera
                        <br /><br />
                       Mastered core C++ concepts including object-oriented programming, data structures, file handling, and algorithms.
                    </p>
                </div>

                <div className="certificate">
                    <a href="https://www.coursera.org/account/accomplishments/verify/S7YAH8WTS680" target="_blank" rel="noreferrer">
                        <div className="certificate-image">
                            <img
                                src={cert03}
                                className="zoom"
                                alt="Programming with Python"
                            />
                        </div>
                    </a>

                    <a href="https://www.coursera.org/account/accomplishments/verify/S7YAH8WTS680" target="_blank" rel="noreferrer">
                        <h2>Programming with Python</h2>
                    </a>

                    <p>
                        <strong>Issued by:</strong> University of Michigan
                        <br /><br />
                        Learned Python fundamentals, object-oriented programming, data structures, file handling, and automation techniques.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Certification;