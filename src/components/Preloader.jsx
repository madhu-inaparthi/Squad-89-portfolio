// src/components/Preloader.jsx
import React from 'react';
import preloaderVideo from '../pages/preloader.mp4';
import './Preloader.css'

const Preloader = ({ onEnded }) => {
  return (
    <div className="preloader">
      <video
        id="preloader-video"
        src={preloaderVideo}
        autoPlay
        muted
        playsInline
        onEnded={onEnded}  // When the video ends, call onEnded()
      />
    </div>
  );
};

export default Preloader;
