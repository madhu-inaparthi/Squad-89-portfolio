import React from 'react';
import Header from '../components/Header';
import MemberCard from '../components/MemberCard';
import { teamMembers } from '../data';
import Footer from '../components/Footer';

const Party = () => (
  <div className="min-h-screen party-bg text-white relative">
    <Header />
    <section id="party" className="relative py-28 px-4 bg-[#111]/80">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-4xl font-bold text-center mb-16 text-[#e50914]">
          SQUAD MEMBERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {teamMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Party;