import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';

function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);

            if(!isValid){
                setErrorMessage('email address is not valid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value){
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // console.log(formState);
    function handleSubmit(e){
        e.preventDefault();
    };

    return (
        <section className="about-me-section grid-outer">
        <h2>Contact Me</h2>
        <form id="contact-form" className="contact-me-content grid-content" onSubmit={handleSubmit} >
            <div>
                <input type="text" name="name" placeholder="Name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email Address" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
                <textarea name="message" rows="5" placeholder="Message" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type='submit'>Submit</button>
        </form>
        </section>
    );
}

export default Contact;