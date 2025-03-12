import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/20 backdrop-blur-sm border-b border-[#e50914]/15">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="text-[#e50914] text-2xl font-bold stranger-title">
              SQUAD 89
            </h1>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#e50914]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">
              Home
            </Link>
            <Link to="/journey" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">
              Journey
            </Link>
            <Link to="/guides" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">
              Mentors
            </Link>
            <Link to="/party" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">
              Members
            </Link>
            <Link to="/memories" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">
              Memories
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 space-y-3">
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-[#e50914] transition-colors py-2 px-4 border-b border-gray-700"
            >
              Home
            </Link>
            <Link 
              to="/journey" 
              className="block text-gray-300 hover:text-[#e50914] transition-colors py-2 px-4 border-b border-gray-700"
            >
              Journey
            </Link>
            <Link 
              to="/guides" 
              className="block text-gray-300 hover:text-[#e50914] transition-colors py-2 px-4 border-b border-gray-700"
            >
              Guides
            </Link>
            <Link 
              to="/party" 
              className="block text-gray-300 hover:text-[#e50914] transition-colors py-2 px-4 border-b border-gray-700"
            >
              Members
            </Link>
            <Link 
              to="/memories" 
              className="block text-gray-300 hover:text-[#e50914] transition-colors py-2 px-4"
            >
              Memories
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
