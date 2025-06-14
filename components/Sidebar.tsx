'use client'; // Required for Framer Motion and event handlers

import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link'; // Or use anchor tags for same-page scroll

const navItems = [
  { name: 'Home', icon: Home, sectionId: 'hero' },
  { name: 'About', icon: User, sectionId: 'about' },
  { name: 'Skills', icon: Code, sectionId: 'skills' },
  { name: 'Projects', icon: Briefcase, sectionId: 'projects' },
  { name: 'Contact', icon: Mail, sectionId: 'contact' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourprofile' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/yourprofile' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourprofile' },
];

const Sidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sidebarVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 0.5 },
    }),
  };

  const iconHover = {
    scale: 1.2,
    rotate: [0, 15, -15, 0],
    transition: { duration: 0.3 },
  };

  return (
    <motion.aside
      className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-lightText p-8 flex flex-col justify-between shadow-2xl z-50"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.div
          className="text-center mb-12"
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Developer Avatar/Logo - can be an animated SVG or Image */}
          <motion.div 
            className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-darkBg animate-pulse-glow"
            whileHover={{ scale: 1.1 }}
          >
            AD
          </motion.div>
          <h1 className="text-2xl font-bold">Alex Developer</h1>
          <p className="text-sm text-gray-400">Senior Software Engineer</p>
        </motion.div>

        <nav>
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                className="mb-4"
                custom={index + 1}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className="flex items-center w-full py-2 px-3 rounded-lg hover:bg-secondary hover:text-darkBg transition-colors duration-300 group"
                >
                  <motion.div whileHover={iconHover}>
                    <item.icon className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-125" />
                  </motion.div>
                  <span className="text-lg">{item.name}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-auto">
        <motion.div
          className="flex justify-around"
          custom={navItems.length + 1}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: '#3B82F6' }}
              className="text-gray-400 hover:text-secondary transition-colors"
              custom={index}
              variants={itemVariants} // you can create more specific variants if needed
            >
              <social.icon className="w-7 h-7" />
            </motion.a>
          ))}
        </motion.div>
        <motion.p 
            className="text-xs text-gray-500 text-center mt-6"
            custom={navItems.length + 2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
        >
            &copy; {new Date().getFullYear()} Alex Developer
        </motion.p>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
