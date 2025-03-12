import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Rocket } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import Header from '../components/Header';
import FloatingChatBot from '../components/FloatingChatBot';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem('hasSeenIntro', 'true');
    }
  }, []);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 0); // Show the intro for 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <div className="upside-down-bg" />
        
        <FloatingParticles />
        <FloatingChatBot />
        <Header />
        <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center px-4 mt-16">
            <h1 className="stranger-title text-6xl md:text-5xl font-bold mb-4 tracking-wider text-[#e50914] flicker">
              KALVIUM X GGU
            </h1>
            <p className="content-text text-xl text-gray-300 mb-8 fade-in">
              Where Technology Meets the Extraordinary
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <Code className="w-12 h-12 text-[#e50914] glow-icon beat-animation" />
              <Brain className="w-12 h-12 text-[#e50914] glow-icon beat-animation" />
              <Rocket className="w-12 h-12 text-[#e50914] glow-icon beat-animation" />
            </div>
            <Link 
              to="/projects"
              className="nav-text inline-block px-8 py-3 bg-[#e50914] text-white rounded-lg hover:bg-[#b8070f] transition-colors duration-300 shadow-lg hover:shadow-[#e50914]/50"
            >
              Explore Our projects
            </Link>
            <br />
            <Link 
              to="/learn-more"
              className="nav-text inline-block px-8 py-3 bg-[#e50914] text-white rounded-lg hover:bg-[#b8070f] transition-colors duration-300 shadow-lg hover:shadow-[#e50914]/50 mt-4"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;