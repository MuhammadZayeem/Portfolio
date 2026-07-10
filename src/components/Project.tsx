import React from "react";
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
                <a href="https://github.com/MuhammadZayeem/Cpp-Project-Parking-Management-System-" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MuhammadZayeem/Cpp-Project-Parking-Management-System-" target="_blank" rel="noreferrer"><h2>ParkSync</h2></a>
                <p>A system that automates vehicle entry, slot allocation, and billing for parking lots. Features real-time slot availability, automated billing, secure admin panel, and persistent data storage.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MuhammadZayeem/Part-Vault" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MuhammadZayeem/Part-Vault" target="_blank" rel="noreferrer"><h2>PartVault</h2></a>
                <p>A desktop application for automobile workshops to manage spare parts inventory, track suppliers, monitor stock levels, generate demand lists, and generate reports with role-based access control.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MuhammadZayeem/Cpp-project-Student-Record-Management-System" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MuhammadZayeem/Cpp-project-Student-Record-Management-System" target="_blank" rel="noreferrer"><h2>AcademiXe</h2></a>
                <p>An application for managing student information, academic records, and grade calculation with add/update/delete functionality, search, sorting, and file storage capabilities.</p>
        </div>
                </div>

    </div>
    );
}
export default Project;