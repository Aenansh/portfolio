import styles from './styles/hover.module.css';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 ${styles.experienceGlow} text-white`}>Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className={`bg-white rounded-lg shadow-md p-8 border border-gray-100 ${styles.experienceCard}`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className={`text-xl font-semibold text-gray-900 ${styles.experienceGlow}`}>ACM-JUIT, Design Team Member</h3>
              <p className={`text-gray-600 ${styles.experienceGlow}`}>June 2024 - May 2025</p>
            </div>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              <li className={styles.experienceGlow}>Designed UI for a quiz-based website</li>
              <li className={styles.experienceGlow}>Organized community event "Leonids"</li>
              <li className={styles.experienceGlow}>Designed banners/posters for various events</li>
              <li className={styles.experienceGlow}>Conducted a C language session</li>
              <li className={styles.experienceGlow}>Worked on various tools and design projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 