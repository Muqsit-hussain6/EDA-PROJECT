import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          My name is Muqsit Hussain, and I am a computer science student currently in my 7th semester. This project is part of my enterprise development course, designed to demonstrate the use of React Router and fetching APIs in a real-world application.
        </p>
        <p>
          This e-commerce application serves as a comprehensive example, showcasing various features such as:
        </p>
        <ul>
          <li>Routing and navigation using React Router</li>
          <li>Fetching and displaying data from APIs</li>
          <li>Dynamic rendering of components</li>
          <li>Responsive design and user-friendly interface</li>
        </ul>
        <p>
          We hope you find this project insightful and helpful in understanding the practical applications of React and modern web development techniques.
        </p>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Our E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
