import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing features and services</p>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h2>Feature 1</h2>
          <p>Amazing feature description goes here</p>
        </div>
        <div className="feature-card">
          <h2>Feature 2</h2>
          <p>Another great feature description</p>
        </div>
        <div className="feature-card">
          <h2>Feature 3</h2>
          <p>One more awesome feature explained</p>
        </div>
      </section>
    </div>
  );
}