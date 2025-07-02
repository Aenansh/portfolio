import { FaGithub } from 'react-icons/fa';
import styles from './styles/hover.module.css';

const Projects = () => {
  const projects = [
    {
      title: "Contractual Farming App",
      description: "UI design to connect farmers and contractors",
      tools: ["Figma"],
      type: "Design Project"
    },
    {
      title: "Music Genre Prediction Model",
      description: "Deep learning model to predict music genres from audio files",
      tools: ["Python", "NumPy", "Pandas", "Librosa", "scikit-learn", "Keras"],
      github: "https://github.com/Aenansh/Model",
      type: "Machine Learning"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`section-title ${styles.projectGlow} text-white`}>Featured Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`apple-card group ${styles.projectCard}`}>
              <div className="flex justify-between items-start mb-6">
                <h3 className={`text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent ${styles.projectGlow}`}>
                  {project.title}
                </h3>
                <span className={`text-sm font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full ${styles.projectGlow}`}>
                  {project.type}
                </span>
              </div>
              <p className={`text-lg text-gray-600 mb-6 ${styles.projectGlow}`}>{project.description}</p>
              <div className="mb-6">
                <p className={`text-sm text-gray-500 mb-3 ${styles.projectGlow}`}>Technologies used:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className={`px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 ${styles.projectGlow}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-gray-600 ${styles.projectGlow}`}
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="text-sm font-medium">View on GitHub</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 