import React from 'react';
import { FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';


export default function Contact() {
  return (
    <main className="main-content">
      <section className="contact-info">
        <h1>Contact Me</h1>
        <p>
          <i className="fas fa-envelope"></i>{' '}
          <a href="mailto:Tiberius.James84@gmail.com">Tiberius.James84@gmail.com</a>
        </p>
        <p>
          <i className="fas fa-phone"></i> (515) 650-3134
        </p>
        <p>
          <a href="/src/assets/TJames.pdf" className="btn-glow" download>
            <i className="fas fa-download"></i> Download My Resume (PDF)
          </a>
        </p>
      </section>

      <section id="contactForm">
        <h2>Send Me a Message</h2>
        <small>I’ll get back to you as quickly as possible.</small>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Comment"></textarea>
          <div className="form-buttons">
            <input className="formBtn" type="submit" value="Send" />
            <input className="formBtn" type="reset" value="Reset" />
          </div>
        </form>
      </section>
    </main>
  );
}
