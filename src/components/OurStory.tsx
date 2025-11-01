import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OurStory.css';

gsap.registerPlugin(ScrollTrigger);

const OurStory: React.FC = () => {
  const storyRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    const title = story.querySelector('.story-title');
    const subtitle = story.querySelector('.story-subtitle');
    const text = story.querySelector('.story-text');
    const features = story.querySelectorAll('.feature-item');

    // Set initial visibility
    if (title) (title as HTMLElement).style.opacity = '1';
    if (subtitle) (subtitle as HTMLElement).style.opacity = '1';
    if (text) (text as HTMLElement).style.opacity = '1';
    features.forEach(item => {
      (item as HTMLElement).style.opacity = '1';
      (item as HTMLElement).style.visibility = 'visible';
    });

    setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: story,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });

      if (title) {
        tl.from(title, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      if (subtitle) {
        tl.from(subtitle, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out'
        }, '-=0.4');
      }

      if (text) {
        tl.from(text, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.3');
      }

      tl.from(features, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      }, '-=0.2');

      tl.call(() => {
        features.forEach(item => {
          (item as HTMLElement).style.opacity = '1';
        });
      });
    }, 100);
  }, []);

  return (
    <section 
      ref={storyRef} 
      className="our-story" 
      data-scroll-section
    >
      <div className="container">
        <h2 className="story-title">Our Story</h2>
        <h3 className="story-subtitle">About Kumar Pooja Store</h3>
        
        <div ref={contentRef} className="story-content">
          <p className="story-text">
            Serving Alangulam and beyond since 2005, Kumar Pooja Store has been the trusted source for authentic South Indian pooja essentials. With over 50+ carefully curated products, we honor our rich spiritual heritage by providing only the highest quality traditional items. Every product is selected with devotion and tested for authenticity, ensuring that your sacred rituals are performed with genuine materials that respect our ancient traditions.
          </p>
        </div>

        <div ref={featuresRef} className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">✨</div>
            <h4 className="feature-title">Quality Products</h4>
            <p className="feature-description">Handpicked authentic items</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">📅</div>
            <h4 className="feature-title">20+ Years</h4>
            <p className="feature-description">Trusted tradition</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h4 className="feature-title">Fast Delivery</h4>
            <p className="feature-description">Quick WhatsApp orders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

