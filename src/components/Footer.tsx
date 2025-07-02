import styles from './styles/hover.module.css';

const Footer = () => {
  return (
    <footer className="py-8 mt-16 relative z-10">
      <div className={`container mx-auto px-6 text-center ${styles.footerGlow}`}>
        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg mb-2">
            Thanks for visiting! 🌟
          </p>
          <p className="text-gray-400 text-sm">
            Built with ❤️ by Aenansh Mittal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 