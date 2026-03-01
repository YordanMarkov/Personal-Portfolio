import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './HeroSection.css';
import Portrait from '../images/Portrait.jpg';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';
import phone from '../images/phone.svg';
import mail from '../images/mail.svg';

function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    emailjs.send('service_zf95hkc', 'template_40qzthm', formData, 'MZaC4_B2btYLW7amB')
      .then((result) => {
        console.log('Email sent:', result.text);
        setFormData({ name: '', email: '', message: '' });
        setSuccessMessage('Thanks for reaching out! I will get back to you soon.');
        setShowSuccess(true);
        setIsLoading(false);
  
        setTimeout(() => {
          handleClose();
        }, 3000);
      }, (error) => {
        console.error('Email error:', error.text);
        setSuccessMessage("Something went wrong. Please try again later.");
        setShowSuccess(true);
        setIsLoading(false);
  
        setTimeout(() => {
          handleClose();
        }, 3000);
      });
  };    

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowForm(false);
      setIsClosing(false);
      setSuccessMessage('');
      setShowSuccess(false);
    }, 300);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Hello,<br />I am <span>Yordan</span>.</h1>
        <button className="contact-btn" onClick={() => setShowForm(true)}>Contact</button>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/yordan-markov" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/markovyordan" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="tel:+359882064129">
            <img src={phone} alt="Phone" />
          </a>
          <a href="mailto:yordanmarkov2004@gmail.com">
            <img src={mail} alt="Email" />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={Portrait} alt="Portrait" />
      </div>

      {showForm && (
        <div className={`contact-modal ${isClosing ? 'fade-out' : 'fade-in'}`}>
          <div className={`modal-content ${showSuccess ? 'fade-success' : ''}`}>
            <span className="close" onClick={handleClose}>&times;</span>

            {showSuccess ? (
              <div className="success-message">{successMessage}</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? <span className="spinner"></span> : 'Send'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;