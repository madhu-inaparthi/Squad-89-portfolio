import React from 'react';
import { Code, Brain, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import FloatingParticles from '../components/FloatingParticles';
import { Award } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: "1998",
      title: "University Foundation",
      description: "Establishment of Godavari Global University with state-of-the-art facilities."
    },
    {
      year: "2024",
      title: "Kalvium Partnership",
      description: "Strategic collaboration with Kalvium for advanced CSE program."
    },
    {
      year: "2025",
      title: "Our First National level Hackathon",
      description: "Debut of state-of-the-art research centers and visionary industry partnerships, setting a new standard in innovation and collaboration."
    },
    {
      year: "2025",
      title: "Finished our 1'st semester",
      description: "Achieved top rankings among emerging universities in our region during the first semester."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="upside-down-bg" />
      <FloatingParticles />
      <Header />
      <section id="journey" className="relative py-48 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-4xl font-bold text-center mb-24 text-[#e50914]">
            Our Journey Into The Tech Side
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-black/50 rounded-lg border border-[#e50914]/20"
            >
              <motion.div
                initial={{ opacity: 0.8 }}
                animate={{
                  textShadow: [
                    '0px 0px 8px #e50914, 0px 0px 16px #e50914',
                    '0px 0px 16px #e50914, 0px 0px 32px #e50914',
                    '0px 0px 24px #e50914, 0px 0px 48px #e50914'
                  ],
                  opacity: [0.8, 0.9, 1, 0.9, 0.8],
                  x: [-2, 2, -2, 2, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
                }}
              >
                <Code className="w-12 h-12 text-[#e50914] mx-auto mb-4" />
              </motion.div>
              <h3 className="card-title text-xl font-bold text-[#e50914] mb-2">Full Stack Mastery</h3>
              <p className="content-text text-gray-400">Conquering both frontend and backend realms with cutting-edge tech stack</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-black/50 rounded-lg border border-[#e50914]/20"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear'
                  }
                }}
              >
                <Brain className="w-12 h-12 text-[#e50914] mx-auto mb-4" />
              </motion.div>
              <h3 className="card-title text-xl font-bold text-[#e50914] mb-2">AI Integration</h3>
              <p className="content-text text-gray-400">Exploring the depths of machine learning and artificial intelligence</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-black/50 rounded-lg border border-[#e50914]/20"
            >
              <Rocket className="w-12 h-12 text-[#e50914] mx-auto mb-4 animate-bounce" />
              <h3 className="card-title text-xl font-bold text-[#e50914] mb-2">Innovation Hub</h3>
              <p className="content-text text-gray-400">Creating groundbreaking solutions for real-world challenges</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 neon-text text-center"
          >
            Our Journey
          </motion.h1>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-900/30"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
              >
                <div className="bg-black/50 p-6 rounded-lg border border-red-900/30">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-red-500 mr-2" />
                    <h3 className="text-xl font-bold text-red-500">{milestone.year}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{milestone.title}</h4>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;