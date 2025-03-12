import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/20 backdrop-blur-sm border-b border-[#e50914]/15">
      <nav className="max-w-7xl mx-auto px-1 py-2">
        <div className="flex justify-between items-center">
        <h1 className="text-[#e50914] text-2xl font-bold stranger-title mt-4 ml-2">SQUAD 89</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#e50914]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">Home</Link>
            <Link to="/journey" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">Journey</Link>
            <Link to="/guides" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">Mentors</Link>
            <Link to="/party" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">Members</Link>
            <Link to="/memories" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">Memories</Link>

          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="nav-text block text-gray-300 hover:text-[#e50914] transition-colors">Home</Link>
            <Link to="/journey" className="nav-text block text-gray-300 hover:text-[#e50914] transition-colors">Journey</Link>
            <Link to="/guides" className="nav-text block text-gray-300 hover:text-[#e50914] transition-colors">Guides</Link>
            <Link to="/party" className="nav-text block text-gray-300 hover:text-[#e50914] transition-colors">Members</Link>
            <Link to="/memories" className="nav-text text-gray-300 hover:text-[#e50914] transition-colors">Memories</Link>

          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;