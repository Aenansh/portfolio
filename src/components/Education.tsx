import styles from './styles/hover.module.css';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`section-title ${styles.educationGlow} text-white`}>Education Journey</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className={`apple-card ${styles.educationCard}`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2 ${styles.educationGlow}`}>
                  B.Tech, Computer Science
                </h3>
                <p className={`text-lg text-gray-600 ${styles.educationGlow}`}>Jaypee University of Information Technology</p>
              </div>
              <div className="text-right">
                <p className={`text-gray-600 mb-2 ${styles.educationGlow}`}>2023–2027</p>
                <p className={`text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent ${styles.educationGlow}`}>
                  GPA: 9.44
                </p>
              </div>
            </div>
          </div>

          <div className={`apple-card ${styles.educationCard}`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2 ${styles.educationGlow}`}>
                  XII
                </h3>
                <p className={`text-lg text-gray-600 ${styles.educationGlow}`}>Dewan Public School</p>
              </div>
              <div className="text-right">
                <p className={`text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent ${styles.educationGlow}`}>
                  95.6%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 