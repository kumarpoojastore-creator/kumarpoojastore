import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const contact = contactRef.current;
    if (!contact) return;

    const items = contact.querySelectorAll('.contact-section');
    
    // Set initial visibility
    items.forEach(item => {
      const element = item as HTMLElement;
      element.style.opacity = '1';
      element.style.visibility = 'visible';
      element.style.display = 'block';
    });
    
    // Use setTimeout to ensure ScrollTrigger is ready
    setTimeout(() => {
      gsap.from(items, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contact,
          start: 'top 85%',
          toggleActions: 'play none none none',
          markers: false
        },
        onComplete: () => {
          items.forEach(item => {
            (item as HTMLElement).style.opacity = '1';
          });
        }
      });
    }, 100);
  }, []);

  return (
    <section 
      ref={contactRef} 
      className="contact" 
      data-scroll-section
    >
      <div className="container">
        <div className="contact-content">
          <div className="contact-section">
            <h3 className="contact-label">Call / WhatsApp</h3>
            <a href="tel:+919489830438" className="contact-link">+91 94898 30438</a>
            <a href="tel:+919489657260" className="contact-link">+91 94896 57260</a>
          </div>

          <div className="contact-section">
            <h3 className="contact-label">Email</h3>
            <a href="mailto:kumarpoojastore@gmail.com" className="contact-link">kumarpoojastore@gmail.com</a>
          </div>

          <div className="contact-section">
            <h3 className="contact-label">Store Address</h3>
            <p className="contact-text">
              Kumar Pooja Store<br />
              Ambai Road, Opp. TPV Multiplex<br />
              Alangulam, Tamil Nadu
            </p>
          </div>

          <div className="contact-section">
            <h3 className="contact-label">Google Maps</h3>
            <a 
              href="https://maps.app.goo.gl/jsHqrF89j5cmVFXn8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              https://maps.app.goo.gl/jsHqrF89j5cmVFXn8
            </a>
          </div>

          <div className="contact-section">
            <h3 className="contact-label">Working Hours</h3>
            <p className="contact-text">
              Monday – Sunday<br />
              7:00 AM to 10:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

