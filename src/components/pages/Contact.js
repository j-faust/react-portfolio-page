import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
// import { validateName } from "../../utils/helpers";
import '../../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Contact() {
    const [email, setEmail] = useState('');
    const [contactName, setContactName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleContactForm = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'email') {
            setEmail(inputValue);
        } else if(inputType === 'contactName') {
            setContactName(inputValue);
        } else {
            setMessage(inputValue);
        }
    }
    
    const handleContactSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Please enter a valid email!');
            return;
        }
        

        setContactName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="container">
            <h3 className="contact-welcome justify-content-center">Fill Out Below to Contact Me</h3>
            <form className="contactForm col">
                <div className="form-group row justify-content-center col-md-4">
                <input 
                    className="text-input"
                    value={email}
                    name="email"
                    onChange={handleContactForm}
                    type="email"
                    placeholder="email"
                />
                </div>
                <div className="form-group row justify-content-center col-md-4">
                <input 
                    className="text-input"
                    value={contactName}
                    name="contactName"
                    onChange={handleContactForm}
                    type="text"
                    placeholder="name"
                />
                </div>
                <div className="form-group row justify-content-center col-md-4">
                <textarea 
                    className="text-input"
                    value={message}
                    name="message"
                    onChange={handleContactForm}
                    type="text"
                />
                </div>
                <button type="button" onClick={handleContactSubmit} className="btn btn-secondary col-md-2">Submit</button>
            </form>
            {errorMessage && (
                <div className="error-text">
                    <p className="errorText">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}