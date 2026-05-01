import { motion } from 'framer-motion';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

export default function Footer() {
  const socials = [
    { icon: <FaXTwitter />, label: "X", href: "https://twitter.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com" },
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
    <footer className="relative overflow-hidden bg-black pt-20 pb-10">
      {/* Background Glowing Blobs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_70%_35%,rgba(13,138,204,0.35),transparent_70%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_30%_70%,rgba(28,216,210,0.3),transparent_70%)]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 sm:px-8 lg:px-10 flex flex-col items-center text-center space-y-6"
      >
        {/* Huge Name */}
        <h1 
          className="font-semibold leading-none text-white select-none whitespace-nowrap"
          style={{ fontSize: "clamp(3rem, 10vw, 12rem)", letterSpacing: "0.02em", textShadow: "0 2px 18px rgba(255,255,255,0.15)" }}
        >
          Parth Deote
        </h1>

        {/* Gradient Line */}
        <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0d588c] via-cyan-300 to-emerald-400"></div>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl md:text-3xl mt-4">
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
              className="text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center justify-center"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-gray-400 text-sm md:text-base flex flex-col items-center">
          <p className="italic max-w-xl">"Building premium experiences one line of code at a time."</p>
          <p className="mt-2 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Parth Deote. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}