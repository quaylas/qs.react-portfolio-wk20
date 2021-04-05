import React, { useState } from 'react';

function Contact () {
    const [formState, setFormState] = useState({ fullName: '', email: '', message: '' });
    const { fullName, email, message } = formState;

    function handleChange(e){
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section className="about-me-section grid-outer">
        <h2>Contact Me</h2>
        <form id="contact-form" className="contact-me-content grid-content" onSubmit={handleSubmit} >
            <div>
                <input type="text" name="fullName" placeholder="Name" defaultValue={fullName} onChange={handleChange} />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email Address" defaultValue={email} onChange={handleChange} />
            </div>
            <div>
                <textarea name="message" rows="5" placeholder="Message" defaultValue={message} onChange={handleChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
        </section>
    );
}

export default Contact;