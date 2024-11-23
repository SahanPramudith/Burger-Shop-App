import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import Form from './contactForm/Form';
import './Contact.css';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const sendEmail = (e) => {
        console.log(email, name);

        e.preventDefault();

        emailjs
            .send(
                'service_kh2gk6b',     // Replace with your EmailJS service ID
                'template_53phanl',    // Replace with your EmailJS template ID
                {
                    user_name: name,
                    user_email: email,
                },
                '_wT6EWr79IrQrmF5i'         // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    alert("Registration successful! Welcome email sent.");
                    window.location.reload()

                },
                (error) => {
                    console.error("Error sending email:", error.text);

                }
            );
        clear()
    };

    function clear() {
        email(null),
        email(null)
    }


    return (
        <div>
            {/* Banner Section */}
            {/* <MenueBanner img={'src/assets/bgimg.jpeg'} heding={"Contact Us"} /> */}

            {/* Contact Information Section */}
            <div className="container my-5">
                <div className="row g-4">
                    {/* Location Card */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-card d-flex align-items-center p-3">
                            <img src="src/assets/contact-1.png" alt="Location" className="contact-icon me-3" />
                            <div>
                                <div variant="h6">Location</div>
                                <div variant="body1">744/A, Nupe<br />Matara</div>
                            </div>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-card d-flex align-items-center p-3">
                            <img src="src/assets/icon-8.png" alt="Email" className="contact-icon me-3" />
                            <div>
                                <div variant="h6">Email Address</div>
                                <div variant="body1">info@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-card d-flex align-items-center p-3">
                            <img src="src/assets/icon-9.png" alt="Contact" className="contact-icon me-3" />
                            <div>
                                <div variant="h6">Contact Us</div>
                                <div variant="body1">074-1600386<br />041-3598452</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="container">
                <div className="container my-5">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <form onSubmit={sendEmail} className="row g-3">
                        {/* Full Name */}
                        <div className="col-md-6">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input onChange={(val) => setName(val.target.value)} type="text" className="form-control" id="fullName" placeholder="Enter your name" />
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input onChange={(val) => setEmail(val.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>

                        {/* Subject */}
                        <div className="col-12">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                        </div>

                        {/* Message */}
                        <div className="col-12">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Type your message"></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-primary px-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


