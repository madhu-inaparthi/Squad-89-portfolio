import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Guides from './pages/Guides';
import Party from './pages/Party';
import ContactPage from './pages/ContactPage';
import LearnMore from './pages/LearnMore';
import Projects from './pages/Projects'; 
import Header from './components/Header';
import Preloader from './components/Preloader';
import './components/Preloader.css';
import backgroundMusic from './music/background-music.mp3.mp3'; // Your background audio can be handled similarly if needed
import Memories from './pages/Memories';

function App() {
  // showPreloader is true if we haven't played the intro this session.
  const [showPreloader, setShowPreloader] = useState(true);
  const audioRef = useRef(null);

  // When the component mounts, check if we've already played the intro.
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setShowPreloader(false);
    }
    
    // Background audio logic (if needed)
    if (audioRef.current) {
      audioRef.current.volume = 0.05; // Set initial volume (adjust as needed)
      audioRef.current.currentTime = 17; // Start the audio from the 17th second (adjust as needed)
      audioRef.current.play().then(() => {
        console.log("Background music started playing.");
      }).catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  }, []);

  // This callback fires when the preloader video ends.
  const handlePreloaderEnded = () => {
    sessionStorage.setItem('hasLoaded', 'true'); // Store flag so the video doesn't show again during this session
    setShowPreloader(false);
  };

  return (
    <Router>
      <div>
        <Header />
        {/* Background audio (if you have that file ready) */}
        <audio ref={audioRef} id="background-music.mp3" src={backgroundMusic} loop autoPlay /> 
        {showPreloader ? (
          // Display the intro video (preloader)
          <Preloader onEnded={handlePreloaderEnded} />
        ) : (
          // Once the video is done, display the entire site.
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/party" element={<Party />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/memories" element={<Memories />} />  // Add this route for the memories page  // Add this route for the memories page  // Add this route for the memories page  // Add this route for the memories page  // Add this route for the memories page  // Add this route for
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;