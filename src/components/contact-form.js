import React, { useState } from "react"
import "../styles/contact-form.css" // We'll create this CSS file next

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSnackbarOpen(true);
        // Automatically close the Snackbar after 3 seconds
        setTimeout(() => {
            setSnackbarOpen(false);
        }, 3000);
        // Reset form data
        setFormData({
            email: '',
            subject: '',
            message: ''
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {snackbarOpen && (
                <div className={`snackbar ${snackbarOpen ? 'open' : ''}`}>
                    Message sent!
                </div>
            )}
        </div>
    );
}

export default ContactForm
