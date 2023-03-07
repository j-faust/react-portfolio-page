// importing React and page styles
import React from "react";
import '../../styles/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// exporting Home component function for use 
export default function Home() {
    return (
        <div className="container">
            <div className="row col-md-5 welcome-cont">  
                <h2 className="welcome-text">Welcome to my Portfolio</h2>  
                <p>
                    My name is Jason and this is my Portfolio Page!  Please feel free to explore the page
                    and features! 

                <br /> <br />
                You may also contact my through the Contact tab!        
                </p>
            </div>
        </div>
    );
}