import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Web Full Stack Developer Virtual Intern",
    company: "AICTE - Eduskills",
    duration: "Apr 2025 - Jun 2025",
    description: "Completed virtual internship with comprehensive modules and assessments focused on full-stack web development."
  },
  {
    role: "Project Trainee",
    company: "Orangebits Digital Solutions",
    duration: "Dec 2025 - Mar 2026",
    description: "Built a full-stack e-commerce system (GoCart) using Node.js and PostgreSQL. Integrated AI features using LLMs for personalized user experience."
  }
];

function ExperienceItem({ exp, idx, layout }) {
  const delay = idx * 1.2;

  if (layout === "desktop") {
    return (
      <div className="relative flex-1 flex flex-col justify-center items-center h-full">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4, delay: delay }}
          className="absolute z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.1)]"
        />

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 40, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, delay: delay + 0.3 }}
          className={`absolute ${idx % 2 === 0 ? 'bottom-1/2 origin-bottom' : 'top-1/2 origin-top'} w-[3px] bg-white/40 rounded-full`}
        />

        <motion.article
          initial={{ opacity: 0, y: idx % 2 === 0 ? 30 : -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: delay + 0.6 }}
          className={`absolute ${idx % 2 === 0 ? 'bottom-[calc(50%+40px)]' : 'top-[calc(50%+40px)]'} bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-7 w-[320px] shadow-lg`}
        >
          <h3 className="text-xl font-semibold break-words">{exp.role}</h3>
          <p className="text-md text-gray-400 mb-3 break-words">{exp.company} | {exp.duration}</p>
          <p className="text-sm text-gray-300 break-words">{exp.description}</p>
        </motion.article>
      </div>
    );
  }

  return (
    <div className="relative flex items-start">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.4, delay: delay }}
        className="absolute left-[-32px] top-6 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.1)] -translate-x-1/2 -translate-y-1/2"
      />

      <motion.article
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-full shadow-lg"
      >
        <h3 className="text-lg font-semibold break-words">{exp.role}</h3>
        <p className="text-sm text-gray-400 mb-2 break-words">{exp.company} | {exp.duration}</p>
        <p className="text-sm text-gray-300 break-words">{exp.description}</p>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalLineDuration = experiences.length > 1 ? (experiences.length - 1) * 1.2 : 1.2;

  return (
    <section id="experience" className="relative bg-black text-white min-h-screen flex flex-col">

      {/* ── Sticky heading bar (reference jaise) ── */}
      <div className="sticky top-0 z-30 w-full flex justify-center items-center py-5 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
            Experience
          </h2>
          {/* Animated underline */}
          <div className="mt-2 w-20 h-[5px] bg-white/15 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </div>
      </div>

      {/* ── Timeline content ── */}
      <div className="flex-1 flex w-full justify-center items-center px-6 py-24">

        {/* DESKTOP */}
        {!isMobile && (
          <div className="relative w-full max-w-7xl flex flex-col justify-center items-center h-[300px]">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] bg-white/15 rounded-full" />

            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: totalLineDuration, ease: "linear" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] bg-white rounded-full origin-left"
            />

            <div className="absolute inset-0 flex w-full justify-between items-center z-10">
              {experiences.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} idx={idx} layout="desktop" />
              ))}
            </div>
          </div>
        )}

        {/* MOBILE */}
        {isMobile && (
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute left-[32px] top-0 bottom-0 w-[6px] bg-white/15 rounded-full -translate-x-1/2" />

            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: totalLineDuration, ease: "linear" }}
              className="absolute left-[32px] top-0 w-[6px] bg-white rounded-full origin-top -translate-x-1/2"
            />

            <div className="relative flex flex-col gap-12 pl-[64px] pr-4">
              {experiences.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} idx={idx} layout="mobile" />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}