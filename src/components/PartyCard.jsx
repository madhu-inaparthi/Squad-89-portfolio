// filepath: /d:/New folder/project-bolt-sb1-yg9bcqvx (1)/project/src/components/PartyCard.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { teamMembers } from '../data';
import { Star } from 'lucide-react';

const PartyCard = ({ member, className }) => (
  <div className={`party-card bg-[#222] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl border border-[#e50914]/20 ${className}`}>
    <div className="relative w-full h-40">
      <img src={member.image} alt={member.name} className="party-card-image w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="party-card-title text-xl font-bold text-[#e50914]">{member.name}</h3>
      <p className="party-card-description text-gray-400">{member.role}</p>
      <div className="mt-4 flex space-x-4">
        {member.github && (
          <a href={member.github} aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e50914]">
            <Github size={20} />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e50914]">
            <Linkedin size={20} />
          </a>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`} aria-label="Send Email" className="text-gray-400 hover:text-[#e50914]">
            <Mail size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Party = () => (
  <div className="min-h-screen upside-down text-white pt-24">
    <Header />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 neon-text text-center"
      >
        The Party
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-black/50 rounded-lg p-6 border border-red-900/30 hover:border-red-500/50 transition-all"
          >
            <div className="relative mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-red-900/30"
              />
            </div>
            <h3 className="text-xl font-bold text-red-500 mb-2 text-center">{member.name}</h3>
            <p className="text-gray-400 text-center mb-4">{member.role}</p>
            <div className="space-y-2">
              {member.achievements.map((achievement, i) => (
                <div key={i} className="flex items-center text-sm text-gray-400">
                  <Star className="w-4 h-4 text-red-500 mr-2" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default PartyCard;
export { Party };