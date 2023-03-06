import React from "react";
import {  BsCloudDownload } from 'react-icons/bs';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Resume() {
    return (
        <div className="container-fluid justify-content-center">
            <div id="res-top" className="col-md-4 row res-title">
                <div className="flex-row">
                    <h2 className="section-title">My Developer Proficiencies</h2>
                </div>
                <div className="flex-row">
                    <div className="download-res">
                        <div className="dllogo">
                            <BsCloudDownload />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row resume-body">
                <div className="col-md-4 col1 article">
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

