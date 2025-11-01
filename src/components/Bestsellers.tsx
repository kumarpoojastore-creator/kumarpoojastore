import React from "react";
import "./Bestsellers.css";

const products = [
  {
    name: "Agarbatti",
    price: "₹50",
    img: "/images/products/agarbatti.jpg",
  },
  {
    name: "Camphor",
    price: "₹40",
    img: "/images/products/camphor-karpooram.jpg",
  },
  {
    name: "Cotton Wicks",
    price: "₹20",
    img: "/images/products/cotton-wicks.jpg",
  },
  {
    name: "Kumkum",
    price: "₹20",
    img: "/images/products/kunkumam-kumkum.jpg",
  },
  {
    name: "dasangam ",
    price: "₹20",
    img: "/images/products/dasangam.jpg",
  },
  {
    name: "sambrani",
    price: "₹180",
    img: "/images/products/sambrani.jpg",
  },
];

function Bestsellers() {
  return (
    <section className="bestsellers" data-scroll-section>
      <h2 className="bestsellers-title">Bestselling Pooja Items</h2>
      <div className="bestsellers-grid">
        {products.map((p, index) => (
          <div key={index} className="product-card">
            <img src={p.img} alt={p.name} />
            <p className="p-name">{p.name}</p>
            <p className="p-price">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bestsellers;
