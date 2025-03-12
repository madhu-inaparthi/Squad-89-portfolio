import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Header from '../components/Header';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Redirect to Gmail web interface with pre-filled content
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nikhil.k@kalvium.community&su=${encodeURIComponent(
        'New message from ' + formData.name
      )}&body=${encodeURIComponent(
        'Name: ' + formData.name + '\nEmail: ' + formData.email + '\n\nMessage: ' + formData.message
      )}`;
      window.open(gmailLink, '_blank');

      setSuccessMessage('Redirecting to Gmail...');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 neon-text text-center"
          >
            <br />
            <br />
            <br />
            Get in Touch
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/50 rounded-lg p-8 border border-red-900/30"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-900/50 border border-red-900/30 rounded-lg px-4 py-2 text-white focus:outline-none ${errors.name ? 'border-red-500' : ''} input-field`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-900/50 border border-red-900/30 rounded-lg px-4 py-2 text-white focus:outline-none ${errors.email ? 'border-red-500' : ''} input-field`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-gray-900/50 border border-red-900/30 rounded-lg px-4 py-2 text-white focus:outline-none h-32 ${errors.message ? 'border-red-500' : ''} input-field`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              {successMessage && <p className="text-green-500 text-sm mt-1">{successMessage}</p>}
              {errors.submit && <p className="text-red-500 text-sm mt-1">{errors.submit}</p>}
              <motion.button
                whileHover={{ scale: 1.1 }}
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

// CSS
<style jsx>
{`
.input-field {
  background-color: black !important;
}
      .contact-page {
      background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6eeb6f00-16df-4f90-97c4-434402105199/dbsenye-f8ded3ef-979c-402f-8dae-07b34738bd94.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZlZWI2ZjAwLTE2ZGYtNGY5MC05N2M0LTQzNDQwMjEwNTE5OVwvZGJzZW55ZS1mOGRlZDNlZi05NzljLTQwMmYtOGRhZS0wN2IzNDczOGJkOTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._75K8DmjRD5n6qFDBXnt_aNziLRu_tqbXT8urQQdr08'); // Replace with your image path
      background-size: cover; // Cover the entire viewport
      background-position: center; // Center the image
      background-repeat: no-repeat; // Prevent image from repeating
    }
`}

</style>
