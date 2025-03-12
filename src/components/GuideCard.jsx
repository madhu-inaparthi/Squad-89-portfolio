import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

// Inline styles for the mentor cards and overall layout
const styles = {
  guideCard: {
    backgroundColor: 'transparent',
    padding: '30px',
    margin: '20px',
    textAlign: 'center',
    width: '350px',
    height: '550px',
    position: 'relative',
    transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  guideCardHover: {
    transform: 'scale(1.05)',
  },
  guideCardImageContainer: {
    position: 'relative',
    height: '60%',
    perspective: '2500px',
  },
  wrapper: {
    transition: 'all 0.5s',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    transformOrigin: 'center center',
  },
  wrapperHover: {
    transform: 'perspective(900px) rotateX(15deg) translateY(-10%) translateZ(20px)',
    boxShadow: '2px 35px 32px -8px rgba(0, 0, 0, 0.75)',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    transition: 'filter 0.5s ease',
  },
  coverImageHover: {
    filter: 'blur(5px)',
  },
  titleImage: {
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    opacity: 0,
    transition: 'opacity 0.5s, transform 0.5s',
    zIndex: 3,
  },
  titleImageHover: {
    opacity: 1,
    transform: 'translate3d(0, -50px, 100px)',
  },
  characterImage: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0,
    transition: 'all 0.5s',
    zIndex: 2,
  },
  characterImageHover: {
    opacity: 1,
    transform: 'translate3d(0, -30%, 100px)',
  },
  // Updated guideCardTitle to use Oswald as the font
  guideCardTitle: {
    paddingTop: '20px',
    fontSize: '1.5em',
    color: '#e50914',
    fontFamily: "'russo One', sans-serif",
    textShadow: '3px 3px 8px rgba(0, 0, 0, 1)',
  },
  guideCardDescription: {
    fontSize: '1.1em',
    color: '#666',
    margin: '5px 0',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9)',
  },
  socialIconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    paddingTop: '10px',
  },
  icon: {
    width: '24px',
    height: '24px',
    opacity: 0,
    transform: 'scale(1)',
    transition: 'opacity 0.5s ease, transform 0.3s ease, color 0.3s ease',
  },
  iconHover: {
    opacity: '1',
    transform: 'scale(1.2)',
    color: '#e50914',
    animation: 'beat 1.5s infinite ease-in-out',
  },
};

const GuideCard = ({ member, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`guide-card ${className}`}
      style={{
        ...styles.guideCard,
        ...(isHovered ? styles.guideCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="guide-card-image-container"
        style={styles.guideCardImageContainer}
      >
        <div style={{ ...styles.wrapper, ...(isHovered ? styles.wrapperHover : {}) }}>
          <img
            src={member.coverImage}
            alt={`${member.name} cover`}
            style={{
              ...styles.coverImage,
              ...(isHovered ? styles.coverImageHover : {}),
            }}
          />
        </div>
        <img
          src={member.titleImage}
          alt={`${member.name} title`}
          style={{
            ...styles.titleImage,
            ...(isHovered ? styles.titleImageHover : {}),
          }}
        />
        <img
          src={member.characterImage}
          alt={`${member.name} character`}
          style={{
            ...styles.characterImage,
            ...(isHovered ? styles.characterImageHover : {}),
          }}
        />
      </div>
      <div style={{ zIndex: 10, position: 'relative' }}>
        <br />
        <h3 style={styles.guideCardTitle}>{member.name}</h3>
        <p style={styles.guideCardDescription}>{member.role}</p>
        <div style={styles.socialIconsContainer}>
          {member.github && (
            <a
              href={member.github}
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              style={isHovered ? styles.iconHover : styles.icon}
            >
              <Github size={20} />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              style={isHovered ? styles.iconHover : styles.icon}
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label="Send Email"
              style={isHovered ? styles.iconHover : styles.icon}
            >
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const mentors = [
  {
    name: 'Nikhil',
    role: 'Campus Manager',
    coverImage:
      'https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/nikh.jpg?updatedAt=1741584000197',
    titleImage:
      'https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/1000018011-removebg-preview.png?updatedAt=1741753673206',
    characterImage:
      'https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/ink4.png?updatedAt=1741584001588',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/nikhil-k-283994227/',
    email: 'abhishek.tiwari@kalvium.community',
  },
  {
    name: 'Abhishek',
    role: 'Tech Mentor',
    coverImage:
      'https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abh.jpg?updatedAt=1741583988410',
    titleImage:
      'https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/1000018016-removebg-preview.png?updatedAt=1741753744273',
    characterImage:
      'https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/abi.png?updatedAt=1741583988872',
    github: 'https://github.com/DevWebAbhi',
    linkedin: 'https://www.linkedin.com/in/abhishek-tiwari-b4ab78262/',
    email: 'nikhil.k@kalvium.community',
  },
];

const MentorDisplay = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '-80px',
        paddingBottom: '20px',
      }}
    >
      {mentors.map((mentor, index) => (
        <GuideCard key={index} member={mentor} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontFamily: "'Oswald', sans-serif",
          color: '#e50914',
        }}
      >
      </h1>
      <MentorDisplay />
    </div>
  );
};

export default App;
