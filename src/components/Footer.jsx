import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white py-4"> {/* Added transparency */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-2 md:mb-0"> {/* Reduced margin */}
            <h2 className="text-xl font-bold text-[#e50914] neon-text">Kalvium</h2> {/* Reduced font size */}
            <p className="text-sm text-gray-400">Empowering the next generation of tech leaders.</p> {/* Reduced font size */}
          </div>
          <div className="flex space-x-2"> {/* Reduced spacing */}
            <a href="https://www.kalvium.com" target="_blank" rel="noopener noreferrer" className="text-[#e50914] hover:text-red-400 transition-colors duration-300 text-sm"> {/* Reduced font size */}
              Visit Kalvium         |
            </a>
            <a href="https://ggu.edu.in/" target="_blank" rel="noopener noreferrer" className="text-[#e50914] hover:text-red-400 transition-colors duration-300 text-sm"> {/* Reduced font size */}
              Visit GGU         |
            </a>
            <a href="./contact" className="text-[#e50914] hover:text-red-400 transition-colors duration-300 text-sm"> {/* Reduced font size */}
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-500"> {/* Reduced margin */}
          <p className="text-xs">&copy; {new Date().getFullYear()} Kalvium. Theme totally inspired by Stranger Things. All rights reserved.</p> {/* Reduced font size */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;