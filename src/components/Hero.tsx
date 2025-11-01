import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const positioningRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, { opacity: 0, y: 40, duration: 1 })
      .from(subtitleRef.current, { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
      .from(positioningRef.current, { opacity: 0, y: 25, duration: 0.7 }, "-=0.5")
      .from(ctaRef.current, { opacity: 0, scale: 0.8, duration: 0.6 }, "-=0.4");
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hi, I want to order pooja items from Kumar Pooja Store — send me today's price list."
  );
  const whatsappUrl = `https://wa.me/919489657260?text=${whatsappMessage}`;

  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-glow"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">Kumar Pooja Store</h1>
        <p ref={subtitleRef} className="hero-subtitle">Authentic Pooja Essentials For Every Ritual</p>
        <p ref={positioningRef} className="hero-positioning">Everything You Need For Every Pooja — All In One Place.</p>

        <a ref={ctaRef} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-cta">
          Order On WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
