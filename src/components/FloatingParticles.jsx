import React, { useEffect } from 'react';
import './FloatingParticles.css'; // Import the CSS file

const FloatingParticles = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      document.querySelector('.floating-particles')?.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 8000);
    };

    const interval = setInterval(() => {
      createParticle();
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <div className="floating-particles" />;
};

export default FloatingParticles;