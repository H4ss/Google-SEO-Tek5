import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact-form"

export default function Contact() {
  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `var(--teal)`, // Set the image as background
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the background image
        color: 'var(--white)',
        minHeight: 'calc(50vh - 80px)', // Subtract the height of the navbar
        padding: '1rem'
      }}>
        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3em' }}>Want to get in touch ? </h1>
        <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.5em' }}>
          We'll always be here to listen
        </p>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
        <ContactForm />
      </div>
    </Layout>
  )
}
