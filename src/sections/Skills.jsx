import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJs, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiFlutter, SiFirebase, SiTypescript, SiPostgresql, SiExpress, SiSupabase 
} from 'react-icons/si';

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
  const [active, setActive] = useState(false);
  const [dir, setDir] = useState(-1);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);

  // Repeated skills for infinite scroll
  const repeatedSkills = useMemo(() => [...skills, ...skills], []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative w-full min-h-[60vh] bg-black text-white py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#0bf8ea] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#0bf8ea] to-[#302b63] opacity-20 blur-[120px] animate-pulse pointer-events-none delay-500"></div>

      {/* Main Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#0bf8ea] to-[#302b63] mb-4 z-10"
      >
        My Skills
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-400 text-base sm:text-lg mb-12 z-10 text-center px-4"
      >
        Modern Technologies & Frameworks I Use
      </motion.p>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden py-10">
        <motion.div 
          ref={trackRef}
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: [0, dir * 1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ x }}
        >
          {repeatedSkills.map((skill, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center gap-3 min-w-[120px] group"
              title={skill.name}
            >
              <span className="text-5xl sm:text-6xl text-[#1cd8d2] transition-transform duration-300 group-hover:scale-125 group-hover:text-white drop-shadow-[0_0_10px_rgba(28,216,210,0.3)]">
                {skill.icon}
              </span>
              <p className="text-xs text-gray-400 uppercase tracking-widest transition-colors group-hover:text-[#1cd8d2]">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}