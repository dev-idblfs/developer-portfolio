'use client';
import { motion } from 'framer-motion';
import { Brain, Zap, Award } from 'lucide-react'; // Example icons

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const features = [
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Leveraging 8+ years of experience to dissect complex challenges and architect robust, scalable solutions.",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Passionate about optimizing applications for speed, efficiency, and seamless user experiences.",
    },
    {
      icon: Award,
      title: "Quality Driven",
      description: "Committed to writing clean, maintainable code and adhering to best practices in software development.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-800">
      <motion.div
        className="container mx-auto px-6 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
            className="text-4xl font-bold mb-4 text-secondary"
            variants={itemVariants}
        >
            About Me
        </motion.h2>
        <motion.p 
            className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
        >
          I'm a dedicated software engineer driven by a passion for innovation and excellence. 
          With a strong foundation in modern web technologies, I transform ideas into impactful digital products.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
            >
              <motion.div 
                className="p-4 bg-secondary rounded-full inline-block mb-6"
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 + index * 0.2, repeat: Infinity, repeatDelay: 3 }}
              >
                <feature.icon size={36} className="text-darkBg" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-lightText">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
