import React from 'react';
import Header from '../components/Header';
import GuideCard from '../components/GuideCard'; // Updated guide card with 3D animation
import { mentors } from '../data';
import Footer from '../components/Footer';

const Guides = () => (
  <div className="min-h-screen guides-bg text-white relative">
    <Header />
    <section id="guides" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-4xl font-bold text-center mb-16 text-[#e50914]">
          <br />
          The Mentors
        </h2>
        <div className="mentor-cards flex justify-center flex-wrap gap-8">
          {mentors.map((mentor, index) => (
            <GuideCard key={index} member={mentor} />
          ))}
        </div>
      </div>
    </section>
    {/* Footer removed or commented-out */}
    <Footer />
  </div>
);

export default Guides;
