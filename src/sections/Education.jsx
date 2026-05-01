import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa6'; 

export default function Education() {
  // Aapke Resume se liya gaya Education Data - Order Updated (10th -> 12th -> B.Tech)
  const educationData = [
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Maharashtra State Board",
      year: "2020",
      score: "Score: 71%",
      description: "Maintained a strong academic record with active participation in foundational technical learning."
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Maharashtra State Board",
      year: "2022",
      score: "Score: 68%",
      description: "Focused on core science and mathematics, building a strong analytical foundation for software engineering."
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "S. B. Jain Institute of Technology, Management and Research",
      year: "Nov 2022 - Jun 2026",
      score: "GPA: 6.8 / 10 (Till 7th Sem)",
      description: "Specializing in full-stack web development, AI integrations, and scalable applications. Building modern real-world projects like e-commerce systems."
    }
  ];

  return (
    <section id="education" className="relative min-h-screen bg-black text-white py-20 px-6 lg:px-20 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Glowing Blobs (Matches your UI Theme) */}
      <div className="absolute top-1/4 left-[-10%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#0bf8ea] opacity-10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[300px] h-[300px] rounded-full bg-gradient-to-l from-[#a855f7] to-[#302b63] opacity-10 blur-[120px] pointer-events-none"></div>

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-20 z-10"
      >
        <p className="font-mono text-[#1cd8d2] text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">Academic Background</p>
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Education
        </h2>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl mx-auto z-10">
        
        {/* Vertical Center Line */}
        <div className="absolute left-[24px] md:left-[50%] top-2 bottom-2 w-[2px] bg-white/10 md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-12 md:gap-10">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
              >
                
                {/* Timeline Icon Dot */}
                <div className="absolute left-[24px] md:left-[50%] top-0 md:top-1/2 w-12 h-12 bg-[#0a0a0a] border border-[#1cd8d2]/40 rounded-full flex items-center justify-center -translate-x-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_15px_rgba(28,216,210,0.3)]">
                  <FaGraduationCap className="text-[#1cd8d2] text-xl" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isLeft ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:border-[#1cd8d2]/30 hover:shadow-[0_10px_30px_rgba(28,216,210,0.05)]">
                    
                    <div className={`flex flex-col gap-1 mb-4 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="font-mono text-[10px] sm:text-xs text-[#1cd8d2] uppercase tracking-wider bg-[#1cd8d2]/10 px-3 py-1 rounded-full w-fit mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#1cd8d2] transition-colors">
                        {item.degree}
                      </h3>
                      <h4 className="text-sm sm:text-base text-gray-300 font-medium mt-1">
                        {item.institution}
                      </h4>
                    </div>

                    <div className={`flex items-center gap-2 mb-4 text-sm font-semibold text-purple-400 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                       <span className="bg-purple-500/10 px-3 py-1 rounded-md border border-purple-500/20">{item.score}</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}