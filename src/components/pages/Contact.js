// importing React and useState method
import React, { useState } from "react";
// importing helper function
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// exporting the Contact function and 
export default function Contact() {
    // setting variables and usestate for the form inputs
    const [email, setEmail] = useState('');
    const [contactName, setContactName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // handle the contact form 
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
    // handle submit on the contact form
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

    // display the form styling for the component
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