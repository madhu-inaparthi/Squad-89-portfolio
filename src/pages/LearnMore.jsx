import React from 'react';
import Header from '../components/Header';
import { Zap, Eye, Star } from 'lucide-react';
import './LearnMore.css'
import Footer from '../components/Footer';

const LearnMore = () => (
  <div className="min-h-screen learn-more-bg text-white relative">
    <Header />
    <section id="learn-more" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <br />
        <h2 className="section-title text-4xl font-bold text-center mb-16 text-[#e50914] glow-text">
          Learn More
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Discover the secrets of the universe with our cutting-edge programs and initiatives. Join us as we explore the intersection of technology and imagination.
        </p>
        <div className="stranger-content bg-black bg-opacity-50 p-8 rounded-lg shadow-lg gore-border">
          <h3 className="text-3xl font-bold mb-4 text-[#e50914] glow-text">The Upside Down</h3>
          <p className="text-lg text-gray-300 mb-6">
            Dive into the mysterious world of the Upside Down, where technology and imagination blend to create a realm of endless possibilities. Our programs are designed to push the boundaries of conventional learning, much like the enigmatic world of Stranger Things.
          </p>
          <div className="flex justify-around mb-8">
            <Zap className="w-12 h-12 text-[#e50914] glitch-animation glow-icon" />
            <Eye className="w-12 h-12 text-[#e50914] beat-animation glow-icon eye-animation" />
            <Star className="w-12 h-12 text-[#e50914] rotate-animation glow-icon" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-[#e50914] glow-text">Our Mission</h3>
          <p className="text-lg text-gray-300 mb-6">
            At Kalvium, we believe in embracing the unknown and exploring the extraordinary. Our mission is to equip students with the skills and knowledge needed to navigate the ever-evolving landscape of technology, just as the characters in Stranger Things navigate the challenges of their world.
          </p>
          <h3 className="text-3xl font-bold mb-4 text-[#e50914] glow-text">Join Us</h3>
          <p className="text-lg text-gray-300">
            Are you ready to embark on a journey into the unknown? Join us at Kalvium and become part of a community that values innovation, creativity, and the spirit of adventure. Together, we'll explore new dimensions of learning and discovery.
          </p>
          <div className="text-center mt-8">
            <a href='./contact'>
              <button className="px-8 py-3 bg-[#e50914] text-white rounded-lg hover:bg-[#b8070f] transition-colors duration-300 shadow-lg hover:shadow-[#e50914]/50 glow-button">
                Contact Us
              </button>
            </a>
          </div>
          {/* Divider between content sections */}
          <div className="text-center mt-10">
            <br />
            <hr className="w-1/2 mx-auto border-t-2 border-gray-500 mb-8" />
            <br />
            <h3 className="text-5xl font-bold mb-8 text-[#e50914] glow-text">
              <br />
             THE DEVELOPERS
            </h3>
          </div>
          <div className="container">
            <div className="card">
              <div className="img-container">
                <img src="https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/abs72.jpg?updatedAt=1741582396933" alt="akhil"/>
              </div>
              <div className="card-details">
                <h2>Akhil</h2>
                <p>
                A digital artisan combining front-end flair with a hint of back-end brilliance. Every project becomes a playful tapestry of vivid visuals and smooth interactions, inviting users into a world where design and functionality dance in perfect harmony.                </p>
              </div>
            </div>
            <div className="card">
              <div className="img-container">
                <img src="https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/WhatsApp%20Image%202025-03-11%20at%2016.31.23_ccb897ec.jpg?updatedAt=1741691083858" alt="madhu"/>
              </div>
              <div className="card-details">
                <h2>Madhu</h2>
                <p>
                A creative front-end developer with a dash of back-end magic, weaving interactive, pixel-perfect designs that delight and inspire. Every project becomes a tiny burst of web enchantment, where beauty meets seamless functionality.                </p>
              </div>
            </div>
            <div className="card">
              <div className="img-container">
                <img src="https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/abs73.jpg?updatedAt=1741582396648" alt="hari"/>
              </div>
              <div className="card-details">
                <h2>Hari</h2>
                <p>
                A Figma maestro channeling creativity into every pixel. Specializing in transforming abstract ideas into sleek, interactive prototypes, this designer crafts layouts that are both playful and refined. Blending clean aesthetics with functional brilliance, each creation invites users to explore a world where design meets delightful intuition.                </p>
              </div>
        
            </div> 
               
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-[#e50914] glow-text animate-bounce">
              TAP THE BANNER TO UNFOLD THE MAGIC
            </p>
          </div>
        </div>
        
      </div>
    </section>
    <Footer />
  </div>
);

export default LearnMore;
