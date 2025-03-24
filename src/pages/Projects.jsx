import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { FolderOpen, ExternalLink } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: "URBAN WANDER",
      description: "A fully responsive website redesign inspired by the Stranger Things theme, built with React and Tailwind CSS.",
      image: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/WhatsApp%20Image%202025-03-11%20at%2010.29.35_28d23e97.jpg?updatedAt=1741669693179", // Replace with your image path
      link: "https://vermillion-phoenix-f2e0bd.netlify.app/",
    },
    {
      title: "Yathra AI",
      description: "A cutting-edge university with state-of-the-art facilities, research, and community programs.",
      image: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/WhatsApp%20Image%202025-03-11%20at%2010.29.35_c3cfee58.jpg?updatedAt=1741669635629", // Replace with your image path
      link: "https://travel-chat-bot-ir84.onrender.com/",
    },
    {
      title: "Be My Valentine",
      description: "This project is designed to be an interactive webpage to ask someone to be your Valentine.  ",
      image: "https://ik.imagekit.io/gkzlyyyrg/Student%20photos/Students/images/WhatsApp%20Image%202025-03-24%20at%2010.03.48_76019910.jpg?updatedAt=1742790863635", // Replace with your image path
      link: "https://be-my-valentine-rose.vercel.app/",
    }
  ]);

  const handleChange = (index, field, value) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project
    );
    setProjects(updatedProjects);
  };

  const handleSave = () => {
    // Handle save logic, e.g., send updated projects to the server
    console.log('Projects saved:', projects);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0">
        <FloatingParticles />
        <div className="upside-down-bg"></div>
      </div>
      
      {/* Header Component */}
      <Header />

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-[#e50914] neon-text"
          >
            Our Projects
          </motion.h1>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }} // Add hover effect to scale up the card
                transition={{ delay: index * 0.2 }}
                className="bg-black/50 rounded-lg border border-[#e50914]/30 overflow-hidden transform transition-transform duration-300"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" // Add zoom effect on hover
                />

                {/* Project Content */}
                <div className="p-6">
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                    className="text-xl font-bold text-[#e50914] mb-2 bg-black border-none focus:outline-none"
                  />
                  <textarea
                    value={project.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    className="text-gray-400 mb-4 bg-black border-none focus:outline-none w-full"
                    rows="3"
                  ></textarea>
                  {/* Hide the link description */}
                  <input
                    type="text"
                    value={project.link}
                    onChange={(e) => handleChange(index, 'link', e.target.value)}
                    className="text-[#e50914] hidden"
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#e50914] hover:text-red-400 transition-colors duration-300 mt-4"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            onClick={handleSave}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
          New Projects Coming soon!
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;