'use client';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, GitBranch, Layers, Terminal } from 'lucide-react'; // Example icons

const skillsData = [
  { name: 'React / Next.js', icon: Code, level: 90, color: '#61DAFB' },
  { name: 'Node.js / Express', icon: Layers, level: 85, color: '#68A063' },
  { name: 'Python / Django', icon: Code, level: 80, color: '#3776AB' },
  { name: 'JavaScript / TypeScript', icon: Code, level: 95, color: '#F7DF1E' },
  { name: 'Databases (SQL/NoSQL)', icon: Database, level: 80, color: '#E94E31' },
  { name: 'Cloud (AWS/Azure)', icon: Cloud, level: 75, color: '#FF9900' },
  { name: 'DevOps (Docker, K8s)', icon: Terminal, level: 70, color: '#2496ED' },
  { name: 'Version Control (Git)', icon: GitBranch, level: 95, color: '#F05033' },
];

const SkillsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-secondary"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Technical Arsenal
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
              variants={skillItemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: `0px 10px 20px ${skill.color}33`, // Glow effect with skill color
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              <skill.icon size={48} className="mb-4" style={{ color: skill.color }} />
              <h3 className="text-xl font-semibold mb-2 text-lightText">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                />
              </div>
              <p className="text-sm mt-2 text-gray-400">{skill.level}% Proficient</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
