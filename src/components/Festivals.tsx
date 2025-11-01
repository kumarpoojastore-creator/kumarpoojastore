import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Festivals.css";

gsap.registerPlugin(ScrollTrigger);

const Festivals: React.FC = () => {
  const festivalsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = festivalsRef.current;
    if (!sec) return;

    const items = sec.querySelectorAll(".festival-item");

    gsap.from(items, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sec,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  const festivals = [
    { name: 'Diwali', image: 'diwali.jpg', description: 'Festival of lights, symbolizing victory of good over evil.' },
    { name: 'Holi', image: 'holi.jpg', description: 'Festival of colors, celebrating love, fun and spring.' },
    { name: 'Dussehra', image: 'dussehra.jpg', description: 'Marks the triumph of Shri Rama over Ravana.' },
    { name: 'Ganesh Chaturthi', image: 'ganesh-chaturthi.jpg', description: 'Welcomes Lord Ganesha — remover of obstacles.' },
    { name: 'Navratri', image: 'navratri.jpg', description: 'Nine nights dedicated to Goddess Durga.' },
    { name: 'Thai Pongal', image: 'thai-pongal.jpg', description: 'Tamil harvest festival thanking the Sun God.' },
    { name: 'Onam', image: 'onam.jpg', description: 'Kerala’s harvest festival honoring Mahabali.' },
    { name: 'Maha Shivaratri', image: 'maha-shivaratri.jpg', description: 'Night of Lord Shiva — meditation and devotion.' },
    { name: 'Karthigai Deepam', image: 'karthigai-deepam.jpg', description: 'Tamil festival of lamps — oldest lamp festival.' },
    { name: 'Janmashtami', image: 'janmashtami.jpg', description: 'Birth celebration of Lord Krishna.' },
    { name: 'Ram Navami', image: 'ram-navami.jpg', description: 'Birth celebration of Lord Rama.' },
    { name: 'Hanuman Jayanti', image: 'hanuman-jayanti.jpg', description: 'Birth celebration of Lord Hanuman — strength & bhakti.' },
    { name: 'Akshaya Tritiya', image: 'akshaya-tritiya.jpg', description: 'Auspicious day for new beginnings & prosperity.' },
    { name: 'Guru Purnima', image: 'guru-purnima.jpg', description: 'Day to honour spiritual teachers & gurus.' },
    { name: 'Raksha Bandhan', image: 'raksha-bandhan.jpg', description: 'Celebrates the bond between brothers & sisters.' },
    { name: 'Makar Sankranti', image: 'makar-sankranti.jpg', description: 'Harvest festival marking the Sun’s transition.' }
  ];

  return (
    <section ref={festivalsRef} className="festivals" data-scroll-section>
      <div className="container">
        <h2 className="festivals-header">Festival Essentials</h2>
        <p className="festivals-subtitle">
          Complete Pooja Items for Every Festival & Celebration
        </p>

        <div className="festivals-grid">
          {festivals.map((f, i) => (
            <div className="festival-item" key={i}>
              <div className="festival-image-wrapper">
                <img
                  src={`/images/festivals/${f.image}`}
                  alt={f.name}
                  className="festival-image"
                  loading="lazy"
                />
              </div>

              <h3 className="festival-name">{f.name}</h3>
              <p className="festival-description">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festivals;
