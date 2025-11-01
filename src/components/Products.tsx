import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Products.css';

gsap.registerPlugin(ScrollTrigger);

const Products: React.FC = () => {
  const productsRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const products = productsRef.current;
    if (!products) return;

    const items = products.querySelectorAll('.product-item');
    
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
          trigger: products,
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

  const products = [
    'Agarbatti',
    'Aragaja',
    'Attar',
    'Betel Leaves & Nuts',
    'Camphor',
    'Chandan',
    'Cardamom',
    'Cotton Wicks',
    'Dasangam',
    'Dhoop',
    'Darbha Grass',
    'Dry Coconut',
    'Dry Grapes',
    'Flowers & Garlands',
    'Ganga Jal',
    'Ghee',
    'Homam Sticks',
    'Navadhanyam',
    'Palm Sugar',
    'Honey',
    'Javadhu Powder',
    'Jaggery',
    'Kumkum',
    'Lemon',
    'Pooja Oils',
    'Poonal',
    'Green Camphor',
    'Panchagavyam',
    'Rudraksha',
    'Rice',
    'Rose Water',
    'Sambrani',
    'Saffron',
    'Sandalwood',
    'Sugar Candy',
    'Shikakai Powder',
    'Sesame Seeds',
    'Turmeric Powder',
    'Vibhuti',
    'Vetiver',
    'Homam Sets 27 / 54 / 108',
    'Thonnai',
    'Theertha Powder',
    'Dates',
    'Flattened Rice (Avul)',
    'Pottukadakai',
    'Mustard Seeds',
    'Pakku Thattu',
    'Paper Cups',
    'Coconut',
    'Banana Leaf'
  ];

  // Map product names to image filenames
  const getImagePath = (productName: string): string => {
    const imageMap: { [key: string]: string } = {
      'Agarbatti': 'agarbatti.jpg',
      'Aragaja': 'aragaja.jpg',
      'Attar': 'attar.jpg',
      'Betel Leaves & Nuts': 'betel-leaves-and-betel-nuts.jpg',
      'Camphor': 'camphor-karpooram.jpg',
      'Chandan': 'chandan.jpg',
      'Cardamom': 'cardamom-elachi.jpg',
      'Cotton Wicks': 'cotton-wicks.jpg',
      'Dasangam': 'dasangam.jpg',
      'Dhoop': 'dhoop-incense-cones.jpg',
      'Darbha Grass': 'darbha-grass.jpg',
      'Dry Coconut': 'dry-coconut.jpg',
      'Dry Grapes': 'dry-grapes.jpg',
      'Flowers & Garlands': 'flowers-and-garlands.jpg',
      'Ganga Jal': 'ganga-jal-holy-water.jpg',
      'Ghee': 'ghee-clarified-butter.jpg',
      'Homam Sticks': 'homam-sticks-samithu.jpg',
      'Navadhanyam': 'navadhanyam.jpg',
      'Palm Sugar': 'nattu-sarkkarai-palm-sugar.jpg',
      'Honey': 'honey.jpg',
      'Javadhu Powder': 'javadhu-powder.jpg',
      'Jaggery': 'jaggery.jpg',
      'Kumkum': 'kunkumam-kumkum.jpg',
      'Lemon': 'leaf.jpg',
      'Pooja Oils': 'oils-pooja-oil.jpg',
      'Poonal': 'poonal-sacred-thread.jpg',
      'Green Camphor': 'pachai-karpooram-green-camphor.jpg',
      'Panchagavyam': 'panchagavyam.jpg',
      'Rudraksha': 'rudraksha.jpg',
      'Rice': 'rice.jpg',
      'Rose Water': 'rose-water.jpg',
      'Sambrani': 'sambrani.jpg',
      'Saffron': 'saffron.jpg',
      'Sandalwood': 'sandalwood.jpg',
      'Sugar Candy': 'sugar-candy-kalkandu.jpg',
      'Shikakai Powder': 'shikakai-powder.jpg',
      'Sesame Seeds': 'sesame-seeds.jpg',
      'Turmeric Powder': 'turmeric-manjal-podi.jpg',
      'Vibhuti': 'vibhuti.jpg',
      'Vetiver': 'vetiver.jpg',
      'Homam Sets 27 / 54 / 108': '27-54-108-homam-sets.jpg',
      'Thonnai': 'thonnai.jpg',
      'Theertha Powder': 'theertha-powder.jpg',
      'Dates': 'dates.jpg',
      'Flattened Rice (Avul)': 'avul.jpg',
      'Pottukadakai': 'pottukadakai.jpg',
      'Mustard Seeds': 'ven-kadugu.jpg',
      'Pakku Thattu': 'pakku-thattu.jpg',
      'Paper Cups': 'paper-cup.jpg',
      'Coconut': 'coconut.jpg',
      'Banana Leaf': 'banana.jpg'
    };

    return imageMap[productName] || 'agarbatti.jpg';
  };

  return (
    <section 
      ref={productsRef} 
      className="products" 
      data-scroll-section
    >
      <div className="container">
        <h2 className="products-header">Our Products</h2>
        <div ref={gridRef} className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-item"
              data-scroll
              data-scroll-speed="0.5"
            >
              <div className="product-image-wrapper">
                <img 
                  src={`/images/${getImagePath(product)}`} 
                  alt={product}
                  className="product-image"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/agarbatti.jpg';
                  }}
                />
                <div className="product-overlay"></div>
              </div>
              <h3 className="product-name">{product}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

