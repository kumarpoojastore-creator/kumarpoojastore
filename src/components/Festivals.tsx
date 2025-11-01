import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Festivals.css';

gsap.registerPlugin(ScrollTrigger);

const Festivals: React.FC = () => {
  const festivalsRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const festivals = festivalsRef.current;
    if (!festivals) return;

    const items = festivals.querySelectorAll('.festival-item');
    
    // Set initial styles to ensure visibility
    items.forEach((item, index) => {
      const element = item as HTMLElement;
      element.style.opacity = '1';
      element.style.visibility = 'visible';
      element.style.display = 'block';
    });
    
    // Use setTimeout to ensure ScrollTrigger is ready
    setTimeout(() => {
      gsap.from(items, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: festivals,
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

  const festivals = [
    { name: 'Diwali', image: 'diwali.jpg' },
    { name: 'Holi', image: 'holi.jpg' },
    { name: 'Dussehra', image: 'dussehra.jpg' },
    { name: 'Ganesh Chaturthi', image: 'ganesh-chaturthi.jpg' },
    { name: 'Navratri', image: 'navratri.jpg' },
    { name: 'Thai Pongal', image: 'thai-pongal.jpg' },
    { name: 'Onam', image: 'onam.jpg' },
    { name: 'Maha Shivaratri', image: 'maha-shivaratri.jpg' },
    { name: 'Karthigai Deepam', image: 'karthigai-deepam.jpg' },
    { name: 'Janmashtami', image: 'janmashtami.jpg' },
    { name: 'Ram Navami', image: 'ram-navami.jpg' },
    { name: 'Hanuman Jayanti', image: 'hanuman-jayanti.jpg' },
    { name: 'Akshaya Tritiya', image: 'akshaya-tritiya.jpg' },
    { name: 'Guru Purnima', image: 'guru-purnima.jpg' },
    { name: 'Raksha Bandhan', image: 'raksha-bandhan.jpg' },
    { name: 'Makar Sankranti', image: 'makar-sankranti.jpg' }
  ];

  return (
    <section 
      ref={festivalsRef} 
      className="festivals" 
      data-scroll-section
    >
      <div className="container">
        <h2 className="festivals-header">Festival Essentials</h2>
        <p className="festivals-subtitle">
          Complete Pooja Items for Every Festival & Celebration
        </p>
        <div ref={gridRef} className="festivals-grid">
          {festivals.map((festival, index) => (
            <div 
              key={index} 
              className="festival-item"
              data-scroll
              data-scroll-speed="0.5"
            >
              <div className="festival-image-wrapper">
                <img 
                  src={`/images/${festival.image}`} 
                  alt={festival.name}
                  className="festival-image"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/diwali.jpg';
                  }}
                />
                <div className="festival-overlay">
                  <span className="festival-name-overlay">{festival.name}</span>
                </div>
              </div>
              <h3 className="festival-name">{festival.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festivals;

