import { FaGithub, FaLinkedin, FaBehance, FaCode } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './styles/hover.module.css';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-32 flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8 text-white flex items-center justify-center gap-2">
            <span className={styles.initialsGlow}>A</span>
            enansh{' '}
            <span className={styles.initialsGlow}>M</span>
            ittal
          </h1>
          <p className={`text-2xl text-gray-300 mb-12 leading-relaxed ${styles.heroGlow}`}>
            A passionate Computer Science student crafting beautiful digital experiences
          </p>
          
          <div className="flex justify-center gap-8 mb-16">
            {[
              { href: "mailto:aenanshm@gmail.com", icon: <MdEmail className="w-6 h-6" /> },
              { href: "https://github.com/Aenansh", icon: <FaGithub className="w-6 h-6" /> },
              { href: "https://www.linkedin.com/in/aenansh-mittal-8a645b274/", icon: <FaLinkedin className="w-6 h-6" /> },
              { href: "https://www.behance.net/aenanshmittal", icon: <FaBehance className="w-6 h-6" /> },
              { href: "https://leetcode.com/u/Aenansh/", icon: <FaCode className="w-6 h-6" /> }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-gray-300 hover:text-white ${styles.socialIcon}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 ${styles.heroCard}`}>
              <h2 className={`text-xl font-semibold mb-4 text-white ${styles.heroGlow}`}>Contact</h2>
              <p className={`text-gray-300 mb-2 ${styles.heroGlow}`}>📧 aenanshm@gmail.com</p>
              <p className={`text-gray-300 ${styles.heroGlow}`}>📱 +91 819-106-9998</p>
            </div>
            <div className={`bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 ${styles.heroCard}`}>
              <h2 className={`text-xl font-semibold mb-4 text-white ${styles.heroGlow}`}>Current Status</h2>
              <p className={`text-gray-300 mb-2 ${styles.heroGlow}`}>🎓 B.Tech Computer Science</p>
              <p className={`text-gray-300 ${styles.heroGlow}`}>📍 JUIT (2023-2027)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 