import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ParticlesBackground from '../components/ParticlesBackground';
import astra from '../assets/Astra.png'; 

export default function Contact() {
  // Job oriented fields
  const [formData, setFormData] = useState({ name: '', email: '', company: '', position: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Type karte waqt error hatana taaki user ko smooth experience mile
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    // Company name is optional, baki sab fields required hain
    const required = ['name', 'email', 'position', 'message'];
    const newErrors = {};

    required.forEach((f) => {
      if (!formData[f].trim()) {
        newErrors[f] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');

    try {
      // .env file se keys read kar raha hai
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          company: formData.company || "Not Provided", // Agar company nahi dali toh "Not Provided" jayega
          position: formData.position,
          message: formData.message
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      
      setStatus('success');
      // Form ko reset kar do
      setFormData({ name: '', email: '', company: '', position: '', message: '' });
      
      // 3 seconds baad success message hata do
      setTimeout(() => setStatus(''), 3000);
      
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-black overflow-hidden text-white py-20 px-6 lg:px-20 flex flex-col md:flex-row items-center gap-10">
      <ParticlesBackground />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side: Floating Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-72 md:w-[450px]"
          >
            <img src={astra} alt="Contact Astronaut" className="w-full h-auto object-contain drop-shadow-2xl" />
          </motion.div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Your Name <span className="text-red-500">*</span></label>
              <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} className={`p-3 rounded-md bg-white/5 text-white outline-none border ${errors.name ? 'border-red-500' : 'border-gray-600'} focus:border-[#1cd8d2] focus:bg-white/10 transition-all`} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Your Email <span className="text-red-500">*</span></label>
              <input type="email" name="email" placeholder="john@domain.com" value={formData.email} onChange={handleChange} className={`p-3 rounded-md bg-white/5 text-white outline-none border ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:border-[#1cd8d2] focus:bg-white/10 transition-all`} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Company Name (Optional) */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Company Name <span className="text-gray-500 text-xs">(Optional)</span></label>
              <input type="text" name="company" placeholder="Tech Corp Ltd." value={formData.company} onChange={handleChange} className="p-3 rounded-md bg-white/5 text-white outline-none border border-gray-600 focus:border-[#1cd8d2] focus:bg-white/10 transition-all" />
            </div>

            {/* Position / Role Type */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Position Type <span className="text-red-500">*</span></label>
              <select name="position" value={formData.position} onChange={handleChange} className={`p-3 rounded-md bg-white/5 outline-none border ${errors.position ? 'border-red-500' : 'border-gray-600'} focus:border-[#1cd8d2] focus:bg-white/10 transition-all ${formData.position ? 'text-white' : 'text-gray-400'}`}>
                <option value="" disabled className="text-black">Select an option</option>
                <option value="Full-Time Role" className="text-black">Full-Time Role</option>
                <option value="Internship" className="text-black">Internship</option>
                <option value="Contract / Other" className="text-black">Contract / Other</option>
              </select>
              {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
            </div>

            {/* Message / Job Details */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-gray-300">Message / Job Details <span className="text-red-500">*</span></label>
              <textarea name="message" rows="4" placeholder="Briefly describe the role or drop a message..." value={formData.message} onChange={handleChange} className={`p-3 rounded-md bg-white/5 text-white outline-none border ${errors.message ? 'border-red-500' : 'border-gray-600'} focus:border-[#1cd8d2] focus:bg-white/10 transition-all resize-none`}></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Status Message */}
            {status && (
              <p className={`text-sm font-medium ${status === 'success' ? 'text-[#1cd8d2]' : status === 'error' ? 'text-red-400' : 'text-yellow-400'}`}>
                {status === 'sending' ? 'Sending Message...' : status === 'success' ? 'Message Sent Successfully!' : 'Something went wrong. Please try again.'}
              </p>
            )}

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
              type="submit" 
              className="mt-2 bg-gradient-to-r from-[#302b63] to-[#1cd8d2] hover:opacity-90 text-white py-3 rounded-md font-semibold transition-all disabled:opacity-60 shadow-lg"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}