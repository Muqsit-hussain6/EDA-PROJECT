import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our E-commerce Store!</h1>
        <p>Discover amazing products and start shopping today!</p>
      </header>
      <section className="home-featured">
        <h2>Featured Products</h2>
        <div className="home-products">
          {products.map(product => (
            <div className="home-product-card" key={product.id}>
              <img src={product.image} alt={product.title} onError={(e) => e.target.src = '/images/placeholder.jpg'} />
              <h3>{product.title}</h3>
              <p>{product.description.substring(0, 100)}...</p>
              <button>View Product</button>
            </div>
          ))}
        </div>
      </section>
      <section className="home-about">
        <h2>About Us</h2>
        <p>
          We are committed to providing the best online shopping experience. Our store offers a wide variety of products to meet all your needs.
        </p>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Our E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
