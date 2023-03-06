import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import "../styles/Footer.css";
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function Footer() {
   return (
        <footer className='footer'>
            <p>
                <ul>
                    <a href="https://github.com/j-faust">
                        <li className='footerlogo'>
                            <FaGithub />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/jason-faust-a57111141/">
                        <li className='footerlogo'>
                            <FaLinkedin />
                        </li>
                    </a>
                </ul>
            </p>
        </footer>
    );
}