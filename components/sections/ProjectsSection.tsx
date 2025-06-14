'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; // For project images
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  // Replace with your actual project data
  {
    id: 1,
    title: 'E-commerce Platform X',
    description: 'A full-featured e-commerce platform with advanced search, recommendations, and secure payments.',
    imageUrl: '/placeholder-project1.jpg', // Create a public/placeholder-project1.jpg (e.g., 600x400)
    tags: ['Next.js', 'Stripe', 'Algolia', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    description: 'Dashboard providing real-time insights and visualizations for large datasets.',
    imageUrl: '/placeholder-project2.jpg', // Create a public/placeholder-project2.jpg
    tags: ['React', 'Node.js', 'WebSockets', 'D3.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'AI Powered Content Generator',
    description: 'SaaS application leveraging AI to generate marketing copy and articles.',
    imageUrl: '/placeholder-project3.jpg', // Create a public/placeholder-project3.jpg
    tags: ['Python', 'FastAPI', 'OpenAI API', 'React'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const ProjectsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-secondary"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={cardVariants}
            >
              <div className="relative w-full h-56"> {/* Fixed height for images */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }} // Options: 'cover', 'contain'
                  className="transition-transform duration-500 group-hover:scale-110" // Group hover effect not directly usable here, but an idea
                />
                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div> {/* Subtle overlay */}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-lightText">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed h-20 overflow-hidden"> {/* Fixed height for description */}
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="inline-block bg-secondary bg-opacity-20 text-secondary text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.4)'}} // Brighter on hover
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-start space-x-4">
                  {project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-yellow-400 transition-colors flex items-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={20} className="mr-1" /> Live Demo
                    </motion.a>
                  )}
                  {project.repoUrl !== '#' && (
                    <motion.a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-yellow-400 transition-colors flex items-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={20} className="mr-1" /> Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
