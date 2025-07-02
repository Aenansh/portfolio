import styles from './styles/hover.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "C", "JavaScript", "TypeScript", "Python"]
    },
    {
      title: "Tech Stack",
      skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "HTML", "CSS"]
    },
    {
      title: "Tools",
      skills: ["VS Code", "Canva", "Figma", "Postman", "GitHub", "Appwrite"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-3xl font-bold text-center mb-12 ${styles.skillsGlow} text-white`}>Skills & Technologies</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md p-6 border border-gray-100 ${styles.skillsCard}`}>
              <h3 className={`text-xl font-semibold text-gray-900 mb-4 ${styles.skillsGlow}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 ${styles.skillsGlow}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 