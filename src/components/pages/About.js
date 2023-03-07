// importing React and styles for home page
import React from "react";
import '../../styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// exporting the About component
export default function About() {

    return (
        <div className="container">
            <div className="row about-section col-md-5">
                <h1 className="about-title">About Me</h1>
            </div>
            <div className="row col-md-5">
                <div><img src={require("./images/icons8-male-user-50.png")} alt="blank avatar profile"></img></div>
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