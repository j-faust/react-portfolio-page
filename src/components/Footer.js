// importing React and logos for Footer
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import "../styles/Footer.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


// exporting Footer component
export default function Footer() {
   return (
    <div className='container'>
        <div className='row col-md-4'>
        <footer className='footer'>
            <p>
                    <a href="https://github.com/j-faust">
                            <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/jason-faust-a57111141/">
                            <FaLinkedin />
                    </a>
            </p>
        </footer>
     </div>
    </div>
    );
}