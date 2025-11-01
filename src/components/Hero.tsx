import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const positioningRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    .from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from(positioningRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .from(ctaRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.3');

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (hero) {
        const heroHeight = hero.offsetHeight;
        const scrolled = scrollY / heroHeight;
        if (scrollY < heroHeight) {
          gsap.to(hero, {
            y: scrollY * 0.5,
            opacity: 1 - scrolled * 0.5,
            duration: 0.1,
            ease: 'none'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hi, I want to order pooja items from Kumar Pooja Store — send me today's price list."
  );
  const whatsappUrl = `https://wa.me/919489657260?text=${whatsappMessage}`;

  return (
    <section 
      ref={heroRef} 
      className="hero" 
      data-scroll-section
      data-scroll
      data-scroll-speed="-2"
    >
      <div className="hero-background">
        {/* Change the image path here to update background */}
        <img src="/images/hero-brass-pooja.jpg" alt="Brass Pooja Elements" className="hero-image" onError={(e) => {
          // Fallback to store-front if hero image not found
          const target = e.target as HTMLImageElement;
          target.src = '/images/store-front.jpg';
        }} />
        <div className="hero-overlay"></div>
        <div className="hero-glow"></div>
      </div>
      <div className="hero-content container">
        <h1 ref={titleRef} className="hero-title">
          Kumar Pooja Store
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Authentic Pooja Essentials For Every Ritual
        </p>
        <p ref={positioningRef} className="hero-positioning">
          Everything You Need For Every Pooja — All In One Place.
        </p>
        <a
          ref={ctaRef}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Order On WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;

