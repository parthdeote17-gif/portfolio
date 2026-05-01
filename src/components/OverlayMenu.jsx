import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function OverlayMenu({ isOpen, onClose }) {
  // Testimonials ko hata kar Education add kar diya hai
  const menuItems = [
    "Home", "About", "Education", "Skills", "Projects", "Experience", "Contact"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          // Video logic: Circular reveal from top-right
          initial={{ clipPath: "circle(0% at 95% 8%)", opacity: 0 }}
          animate={{ clipPath: "circle(150% at 95% 8%)", opacity: 1 }}
          exit={{ clipPath: "circle(0% at 95% 8%)", opacity: 0 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="fixed inset-0 flex items-center justify-center bg-black/95 z-[100] backdrop-blur-sm"
        >
          {/* Close Button - Clean & Standard Size */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl hover:text-[#0bf8ea] transition-transform hover:scale-110 focus:outline-none"
            aria-label="Close Menu"
          >
            <FiX />
          </button>
          
          <ul className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  // Font size ko 7xl se wapas 4xl/5xl kar diya hai jaisa pehle tha
                  className="text-4xl md:text-5xl text-white font-bold tracking-tight hover:text-[#1cd8d2] transition-colors duration-300 block"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}