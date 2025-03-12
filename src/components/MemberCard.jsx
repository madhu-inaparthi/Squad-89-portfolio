import React from 'react';
import { Github, Linkedin } from 'lucide-react';


const MemberCard = ({ member, index, className }) => {
  const defaultDescriptions = [
    "Innovative coder who loves breaking boundaries.",
    "Creative thinker with a passion for design.",
    "Tech enthusiast always exploring new ideas.",
    "Detail-oriented creator with a flair for the unique.",
  ];

  return (
    <div
      className={`
        group relative bg-[#111] rounded-lg overflow-hidden
        transform hover:scale-105 transition-transform duration-300
        shadow-lg ring-2 ring-transparent hover:ring-[#e50914] hover:shadow-2xl
        ${className} w-64
      `}
    >
      {/* Image Section */}
      <div className="relative h-64">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full rounded-lg transition-transform duration-300"
        />

        {/* Always-Visible Name and Glowing "S89" Text */}
        <div
          className={`
            absolute bottom-0 left-0 w-full flex justify-between items-center
            text-white text-lg font-bold py-3 px-6
          `}
        >
          <span>{member.name}</span>
          <span
            className="stranger-s89 text-xl font-extrabold text-[#e50914]"
            title="Stranger Glow"
          >
            S89
          </span>
        </div>
      </div>

      {/* Full Details Overlay on Hover */}
      <div
        className={`
          absolute inset-0 bg-black bg-opacity-40 p-4 text-white flex flex-col h-full
          opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
          transition-all duration-300
        `}
      >
        {/* Central Content with Description, Role, etc. */}
        <div className="flex-grow flex flex-col justify-center items-center space-y-2">
          <p className="text-center text-sm italic">
            {member.midDescription ||
              defaultDescriptions[index % defaultDescriptions.length]}
          </p>
          {member.role && (
            <p className="text-center text-sm text-gray-300">{member.role}</p>
          )}
          {member.description && (
            <p className="text-center text-xs text-gray-300">{member.description}</p>
          )}
        </div>

        {/* Bottom Row with Icons */}
        <div className="flex justify-end items-center space-x-4">
          {member.github && (
            <a
              href={member.github}
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#e50914] transition-colors transform hover:scale-110 duration-300"
            >
              <Github size={24} />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#e50914] transition-colors transform hover:scale-110 duration-300"
            >
              <Linkedin size={24} />
            </a>
          )}
        </div>
      </div>

      {/* Internal CSS for Stranger Things Glow */}
      <style jsx>{`
  .stranger-s89 {
    font-family: 'Poppins', sans-serif; /* Desired font */
    font-size: 20px; /* Adjusted size */
    color: transparent; /* Hollow by default */
    -webkit-text-stroke: 1px #ff0000; /* Red outline */
    transition: opacity 0.3s ease, transform 0.3s ease; /* Smooth transition */
    animation: stranger-glow 3s infinite ease-in-out;
  }

  .group:hover .stranger-s89 {
    opacity: 0; /* Hides the text */
    transform: scale(0.8); /* Optional: Slightly shrinks the text */
  }

  @keyframes stranger-glow {
    0% {
      color: transparent; /* Hollow */
      -webkit-text-stroke: 1px #ff0000; /* Red outline */
    }
    50% {
      color: #ff0000; /* Fills with red */
      -webkit-text-stroke: 0px; /* Removes outline when filled */
    }
    100% {
      color: transparent; /* Back to hollow */
      -webkit-text-stroke: 1px #ff0000; /* Restores outline */
    }
  }
`}</style>

    </div>
  );
};

export default MemberCard;
