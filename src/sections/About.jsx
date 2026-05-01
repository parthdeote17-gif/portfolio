import React from 'react';
import { motion } from 'framer-motion';
// Aapki images me se 'boy.jpg' ka use kiya hai
import profileImg from '../assets/boy.jpg';

export default function About() {
  const stats = [
    { label: "Education", value: "B.Tech CSE (2026)" },
    { label: "Current GPA", value: "6.8 / 10" },
    { label: "Location", value: "Nagpur, India" }
  ];

  return (
    <section id="about" className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden py-20 px-6 lg:px-20">
      
      {/* Background Glowing Blobs - Premium Look */}
      <div className="absolute top-10 left-[-10%] w-[400px] h-[400px] bg-gradient-to-r from-[#302b63] to-[#0bf8ea] opacity-20 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-[450px] h-[450px] bg-gradient-to-r from-[#1cd8d2] to-[#302b63] opacity-15 blur-[140px] rounded-full animate-pulse pointer-events-none delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Upper Section: Image & Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-stretch gap-10"
        >
          {/* Profile Image Wrapper */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl"
          >
            <img 
              src={profileImg} 
              alt="Parth Deote Profile" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>

          {/* Intro Text */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] to-[#0bf8ea] mb-2">
              Parth Deote
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-4 uppercase tracking-wider">
              Full Stack Developer
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 text-justify">
              I specialize in building scalable, high-performance web applications using modern stacks like React, Next.js, Node.js, and PostgreSQL. I am passionate about bridging the gap between intelligent logic and seamless UI.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center"
                >
                  <p className="text-xs text-gray-500 uppercase font-bold">{stat.label}</p>
                  <p className="text-base font-semibold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lower Section: Detailed Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-6"
        >
          <h3 className="text-3xl font-bold text-white mb-4 underline decoration-[#1cd8d2] underline-offset-8">
            About Me
          </h3>
          <div className="space-y-4">
            {/* Paragraph 1: Education & CGPA */}
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              I am a passionate software developer currently in my final year of B.Tech in Computer Science and Engineering at S. B. Jain Institute of Technology, Management and Research (Graduating in 2026). My current CGPA is 6.8 <span className="text-sm text-gray-500 italic">(as of 7th sem)</span>. My goal is to build digital products that solve real-world problems through clean and efficient code.
            </p>
            {/* Paragraph 2: Internship & Project (Dono ka color text-gray-300 kar diya gaya hai) */}
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              Recently, I completed a 3-month internship as a Project Trainee at Orangebits Digital Solutions. There, I built "GoCart"—a full-stack, AI-powered e-commerce platform. This project helped me master REST APIs, PostgreSQL databases, and Python microservices using LLMs to deliver personalized user experiences. I thrive in challenging environments where I can turn complex ideas into scalable applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
            <a href="#projects" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              My Work
            </a>
            <a href="#contact" className="border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
              Get In Touch
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}