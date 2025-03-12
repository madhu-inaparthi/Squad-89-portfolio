import React, { useEffect, useRef } from 'react';
import FloatingParticles from '../components/FloatingParticles';
import './Memories.css';

const images = [
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs8.jpg?updatedAt=1741583998351", alt: "Campus Life 1" },
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs7.jpg?updatedAt=1741583998349", alt: "Campus Life 2" },
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs4.jpg?updatedAt=1741583996386", alt: "Campus Life 3" },
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs6.jpg?updatedAt=1741583995356", alt: "Campus Life 4" },
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs5.jpg?updatedAt=1741583995268", alt: "Campus Life 5" },
];
const galleryImages = [
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs10.png?updatedAt=1741583988305", alt: "Campus Life 1", caption: "Annual Fest" },
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs13.png?updatedAt=1741583988516", alt: "Campus Life 2", caption: "Sports Meet" },
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs12.png?updatedAt=1741583990459", alt: "Campus Life 3", caption: "Cultural Event" },
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs13.png?updatedAt=1741585713327", alt: "Campus Life 4", caption: "Convocation Day" },
  { src: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abs10.jpg?updatedAt=1741583990481", alt: "Campus Life 5", caption: "Group Study" },
];

const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video autoplays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
        // Fallback: add a click listener if autoplay is blocked
        document
          .querySelector('.video-wrapper')
          .addEventListener('click', () => {
            videoRef.current.play().catch((e) => console.error("Play failed:", e));
          });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0">
        <FloatingParticles />
        <div className="upside-down-bg"></div>
      </div>

      <div className="relative z-10">
        {/* Memories Section – Accordion Gallery */}
        <section className="memories-section">
          <div className="memories-container">
            <br />
            <br />
            <h1 className="memories-heading">Memories</h1>
            <div className="accordion-gallery">
              {images.map((image, index) => (
                <div className="column" key={index}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* University Gallery – Auto-Rotating 3D Slider */}
        <section className="university-gallery-section">
          <div className="gallery-container">
            <h1 className="memories-heading">University Gallery</h1>
            <br />
            <div className="slider-container">
              <div className="slider" style={{ "--quantity": galleryImages.length }}>
                {galleryImages.map((image, index) => (
                  <div
                    className="item"
                    key={index}
                    style={{ "--position": index + 1 }}
                  >
                    <img src={image.src} alt={`University Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Sparks Section with Autoplay Video and Animated Border */}
        <section className="social-sparks-section">
          <div className="social-container">
            <h1 className="memories-heading glow-text">Social Sparks</h1>
            <div className="video-container">
              {/* Outer container that shows a border with animated effect */}
              <div className="video-border-container">
                {/* Inner container with a matching solid border and masked video */}
                <div className="video-wrapper pulse-animation">
                  <video
                    ref={videoRef}
                    className="featured-video video-autoplay"
                    src="https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/video1.mp4?updatedAt=1741584762216"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <div className="video-overlay">
                    <div className="play-button"></div>
                  </div>
                </div>
              </div>
              <p className="video-caption fade-in-text">
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
