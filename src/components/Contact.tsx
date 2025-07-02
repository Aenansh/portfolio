'use client';

import { useState } from 'react';
import styles from './styles/hover.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully!'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-3xl font-bold text-center mb-12 ${styles.contactGlow} text-white`}>Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white 
                  focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 
                  transition-all duration-300 backdrop-blur-sm ${styles.inputGlow}`}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white 
                  focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 
                  transition-all duration-300 backdrop-blur-sm ${styles.inputGlow}`}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={5}
                className={`w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white 
                  focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 
                  transition-all duration-300 backdrop-blur-sm ${styles.inputGlow}`}
                placeholder="Your message..."
              />
            </div>
            {status.message && (
              <div className={`text-center p-3 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {status.message}
              </div>
            )}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-black/30 border border-white/10 rounded-lg text-white font-medium
                  transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${styles.buttonGlow}
                  disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 