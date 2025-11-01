import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Bestsellers from "./components/Bestsellers";
import ValueStrips from './components/ValueStrips';
import OurStory from './components/OurStory';
import Festivals from './components/Festivals';
import Products from './components/Products';
import Contact from './components/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let locomotiveScroll: any = null;

    if (scrollRef.current) {
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-inview',
      });

      locomotiveScroll.on('scroll', () => {
        ScrollTrigger.update();
      });

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          if (arguments.length && locomotiveScroll) {
            locomotiveScroll.scrollTo(value as number, { duration: 0, disableLerp: true });
          }
          return locomotiveScroll?.scroll?.instance?.scroll?.y || 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollRef.current?.style.transform ? 'transform' : 'fixed',
      });

      ScrollTrigger.addEventListener('refresh', () => {
        locomotiveScroll?.update();
      });

      ScrollTrigger.refresh();
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      locomotiveScroll?.destroy();
    };
  }, []);

  return (
    <div className="App" ref={scrollRef} data-scroll-container>
      <Hero />
      <Bestsellers />     {/* <<<<< THIS WAS MISSING */}
      <ValueStrips />
      <OurStory />
      <Festivals />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
