import React from "react";
import '../../styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {

    return (
        <div className="container">
            <div className="row about-section">
                <h1 className="about-title">About Me</h1>
                <p className="about-text">
                    Hi, my name is Jason and I attending the UCF coding bootcamp.  I have skills with both 
                    font-end and back-end web development.  Technologies range from HTML, CSS and Javascript, in 
                    addition to Node.js, React, Express.js.  

                    Please explore my projects and if you have any questions or would like to contact me, please 
                    use the contact link above!
                </p>
            </div>
        </div>
    );   

}