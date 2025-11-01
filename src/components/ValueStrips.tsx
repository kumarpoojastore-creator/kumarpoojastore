import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ValueStrips.css';

gsap.registerPlugin(ScrollTrigger);

const ValueStrips: React.FC = () => {
  const stripsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const strips = stripsRef.current;
    if (!strips) return;

    const items = strips.querySelectorAll('.value-strip-item');
    
    gsap.from(items, {
      opacity: 0,
      x: -100,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: strips,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }, []);

  const values = [
    'Pure. Fresh. Authentic.',
    'Traditional Quality With Modern Ease.',
    'Every Ritual Item. One Store.',
    'Trusted By Families Across Tamil Nadu.'
  ];

  return (
    <section 
      ref={stripsRef} 
      className="value-strips" 
      data-scroll-section
    >
      <div className="value-strips-container">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="value-strip-item"
            data-scroll
            data-scroll-speed={index % 2 === 0 ? '1' : '-1'}
          >
            {value}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueStrips;

