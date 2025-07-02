'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles/hover.module.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-black/10 backdrop-blur-lg border-b border-white/20 px-10">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className={`text-2xl font-bold bg-black/30 p-3 rounded-xl border border-gray-800 backdrop-blur-sm ${styles.initialsGlow}`}
          >
            AM
          </Link>
          <div className="flex items-center gap-8">
            {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleClick(e, item.toLowerCase())}
                className={`${styles.navButton} ${activeSection === item.toLowerCase() ? styles.navButtonActive : ''}`}
              >
                {item}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className={`${styles.resumeButton} ml-4 px-4 py-2 bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30 rounded-lg font-medium transition-all duration-300 hover:bg-[#00ff88]/30 hover:scale-105 backdrop-blur-sm flex items-center gap-2`}
            >
              <svg 
                className="w-5 h-5"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 