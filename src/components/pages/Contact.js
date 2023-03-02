import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';



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
        <div>
            <form className="contactForm">
                <input 
                    value={email}
                    name="email"
                    onChange={handleContactForm}
                    type="email"
                    placeholder="email"
                />
                <input 
                    value={contactName}
                    name="contactName"
                    onChange={handleContactForm}
                    type="text"
                    placeholder="name"
                />
                <textarea 
                    value={message}
                    name="message"
                    onChange={handleContactForm}
                    type="text"
                />
                <button type="button"onClick={handleContactSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="errorText">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}