'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative"
      // Add a subtle animated gradient background or a high-quality image/video
      style={{
        background: 'linear-gradient(135deg, #1E3A8A 0%, #111827 100%)' 
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }} // Delay to allow sidebar animation
        className="z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.2, type: 'spring', stiffness: 100 }}
        >
          Hi, I'm <span className="text-secondary">Alex Developer</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          A passionate Senior Software Engineer with 8+ years of experience crafting elegant and efficient solutions for the web.
        </motion.p>
        <motion.button
          onClick={scrollToAbout}
          className="bg-accent text-darkBg font-semibold py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg flex items-center mx-auto"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #F59E0B" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
        >
          Discover My Work
          <motion.span 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 2 }}
            className="ml-2"
          >
            <ArrowDown size={24} />
          </motion.span>
        </motion.button>
      </motion.div>
      
      {/* Optional: Add some abstract animated background elements here using Framer Motion */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                background: ['#3B82F6', '#F59E0B', '#10B981'][i % 3], // Use your theme colors
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            }}
            animate={{
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
                scale: [1, 1.1, 1],
                rotate: [0, Math.random() * 360, 0],
            }}
            transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
            }}
        />
      ))}
    </section>
  );
};

export default HeroSection;
