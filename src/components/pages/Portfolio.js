import React from "react";
// importing Card Component
import Card from "../Card";
import '../../styles/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// function to Generate the Portfolio component
// Generating card and using props to display data on each card
export default function Portfolio(props) {   
    return (
        <div className="container">
            <div className="row">
                <div className=" col-md-3">
                    {/* using props to generate cards using the Card component */}
                    <Card imgsrc={require("./images/pexels-pixabay-209831.jpg")} title="Weather Dashboard App" 
                    projdesc="This Weather Dashboard App lets you check weather for your city and saves your previous searches for later use. 
                    It also give a 5 day forecast to plan your day!"
                    projlink="https://j-faust.github.io/weather-dashboard-challenge/" />
                </div>
                <div className="col-md-3">
                    <Card imgsrc={require("./images/pexels-sora-shimazaki-5668471.jpg")} title="Workday Planner App" 
                    projdesc="This Workday Planning App can help with planning and managing your day to day activities and meetings!" 
                    projlink="https://j-faust.github.io/workday-planner/"  />
                </div>
                <div className="col-md-3">
                    <Card imgsrc={require("./images/pexels-pixabay-39584 (1).jpg")} title="Random Password Generator" 
                    projdesc="The Random Password Generator will generate a random password for you to use!"
                    projlink="https://j-faust.github.io/javascript-module-challenge/" />
                </div>
                <div className="col-md-3">
                    <Card imgsrc={require("./images/pexels-ivan-samkov-4164849 (1).jpg")} title="Workout Hub" 
                    projdesc="Social Media App To Post Workouts and Interact with other Workout Enthusiasts" 
                    projlink="https://workout-hub-merng.herokuapp.com/"   /> 
                </div>
            </div>    
        </div>
        )

}