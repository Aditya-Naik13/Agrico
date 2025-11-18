import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import imgBody from "figma:asset/f1a46031843a67a7c012ccaa5531dccfa1dca335.png";
import imgIPhoneScreen1 from "figma:asset/8f5153bda04cdcaa8ee6ffe6d62c3814826f0b7b.png";

export default function FinalUIIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen px-6 md:px-12 lg:px-16 py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-[#2BA55D] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Final UI
        </motion.h2>

        {/* Phone Mockup Container */}
        <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center">
          {/* Green Rounded Background */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[60%] bg-[#2BA55D] rounded-t-[100px]"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          {/* White Card/Platform */}
          <motion.div
            className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[70%] max-w-4xl h-[50%] bg-white rounded-2xl shadow-2xl border border-[#E5E5E5]"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* Phone Mockup */}
          <motion.div
            className="relative z-10 w-64 md:w-80 lg:w-96"
            initial={{ y: 100, opacity: 0, rotateY: -30 }}
            animate={isInView ? { y: 0, opacity: 1, rotateY: 0 } : { y: 100, opacity: 0, rotateY: -30 }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            {/* iPhone Body */}
            <div className="relative">
              <div className="relative aspect-[9/19.5] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl">
                {/* Screen Content */}
                <img 
                  src={imgIPhoneScreen1} 
                  alt="App Screen" 
                  className="w-full h-full object-cover"
                />
                
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black h-6 w-32 rounded-full z-20" />
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white h-1 w-32 rounded-full opacity-50 z-20" />
              </div>
            </div>
          </motion.div>

          {/* Decorative Leaves - Optional */}
          <motion.div
            className="absolute top-[10%] right-[5%] opacity-30"
            initial={{ opacity: 0, rotate: 0 }}
            animate={isInView ? { opacity: 0.3, rotate: 180 } : { opacity: 0, rotate: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <svg width="170" height="267" viewBox="0 0 170 267" fill="none">
              <path d="M169.228 0C169.228 147.386 71.7861 266.561 0 266.561C37.7142 266.561 71.7861 238.765 84.614 200.421C97.4419 162.076 84.614 119.19 84.614 80.8455C84.614 42.5013 120.385 0 169.228 0Z" fill="white"/>
            </svg>
          </motion.div>
        </div>

        {/* Agrico Logo - Below the phone */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#2BA55D]">agri</span>
            <span className="text-[#1E7A43]">co</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}