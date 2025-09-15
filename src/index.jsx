import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create stars background
const createStars = () => {
  const stars = document.createElement('div');
  stars.className = 'stars';
  
  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    stars.appendChild(star);
  }
  
  document.body.appendChild(stars);
};

// Create shimmering line
const createShimmerLine = () => {
  const shimmerLine = document.createElement('div');
  shimmerLine.className = 'shimmer-line';
  document.body.appendChild(shimmerLine);
};

createStars();
createShimmerLine();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);