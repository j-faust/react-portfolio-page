// importing required files
import React from "react";
import {  BsCloudDownload } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Resume.css';

// function for the Resume component
export default function Resume() {
    // returning the resume section as part of the Resume function
    return (
        <div className="container-fluid justify-content-center res-container">
            <div id="res-top" className="col-md-5 row res-title">
                <div className="flex-row">
                    <h2 className="section-title">My Developer Proficiencies</h2>
                </div>
                <div className="flex-row">
                    <div className="download-res">
                        {/* download icon for resume */}
                        <div className="dllogo">
                            <BsCloudDownload />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row resume-body">
                <div className="col-md-5 col1 article">
                    <p className="col-title">Front End Proficiencies</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                        </ul>
                </div>
                <div className="col-md-4 col2 article">
                    <div className="col-title">Back End Proficiencies</div>
                        <ul>
                            <li>Node.JS</li>
                            <li>Express.JS</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                            <li>Model View Controller Layout</li>
                            <li>NoSQL</li>
                            <li>Progressive Web Apps</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

