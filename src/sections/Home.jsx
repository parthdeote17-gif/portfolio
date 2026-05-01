import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import avator from '../assets/avator.png'; 

export default function Home() {
  // Roles updated: Removed IoT and added Software Engineer
  const roles = useMemo(() => ["Full-Stack Web Developer", "AI/ML Enthusiast", "Software Engineer"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    const updateTyping = () => {
      if (!deleting && subIndex < currentRole.length) {
        setSubIndex((prev) => prev + 1);
      } else if (!deleting && subIndex === currentRole.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((prev) => prev - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timeout = setTimeout(updateTyping, deleting ? 40 : 60);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  const socials = [
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/parth-deote" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/parthdeote17-gif" },
  ];

  const glowVariants = {
    initial: { scale: 1, y: 0, filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))" },
    hover: { 
      scale: 1.2, 
      y: -3, 
      filter: "drop-shadow(0px 0px 8px rgba(13,184,204,0.9)) drop-shadow(0px 0px 16px rgba(28,216,210,0.8))",
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }
  };

  return (
    <section id="home" className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
      
      {/* Animated Background Glowing Blobs */}
      <div className="absolute top-[-32px] left-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#0bf8ea] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#0bf8ea] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse" style={{ animationDelay: "500ms" }}></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Details */}
        <div className="flex flex-col justify-center text-center lg:text-left relative w-full lg:pr-24 mx-auto max-w-[48rem]">
          
          {/* Typewriter Text */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
          >
            <span>{roles[index].substring(0, subIndex)}</span>
            <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle h-[1em]"></span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] to-[#0bf8ea] drop-shadow-lg"
          >
            Hello, I am <br />
            <span className="text-white whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Parth Deote</span>
          </motion.h1>

          {/* Description Paragraph (Short, Effective & Justified) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-justify"
          >
            I am a Full-Stack Developer and B.Tech CSE student specializing in React, Node.js, and AI integrations. I build scalable, high-performance applications focused on delivering seamless and engaging digital experiences.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
          >
            <a href="#projects" className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">
              View My Work
            </a>
            <a href="/resume.pdf" download="Parth_Deote_Resume.pdf" className="bg-white text-black px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 hover:bg-gray-200 transition-all duration-300">
              My Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex gap-5 justify-center lg:justify-start text-2xl sm:text-3xl"
          >
            {socials.map((social) => (
              <motion.a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label}
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300 transition-colors duration-300 hover:text-white"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* Right Side: Image/Avatar */}
        <div className="relative hidden lg:block h-[600px] w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[conic-gradient(from_0deg,#1cd8d2,#302b63,#0bf8ea,#1cd8d2)] opacity-30 blur-3xl pointer-events-none"></div>
          
          <motion.img 
            src={avator}
            alt="Parth Deote" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[450px] object-contain drop-shadow-2xl pointer-events-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
            }}
          />
        </div>

      </div>
    </section>
  );
}