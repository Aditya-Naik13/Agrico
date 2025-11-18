import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function ThankYou() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#35CB68] via-[#008816] to-[#00530D]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Leaves */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          <svg className="w-8 h-8 md:w-12 md:h-12 text-white opacity-20" viewBox="0 0 90 88" fill="none">
            <path d="M21.2606 16.2016C16.5544 10.2671 10.4912 5.55026 3.58164 2.44806C2.8923 8.84556 3.23087 15.3122 4.5845 21.6027C5.97172 28.1997 8.81018 34.4052 12.8939 39.7688C17.5855 45.6769 23.6495 50.3491 30.5586 53.379C31.2628 47.022 30.9387 40.593 29.5987 34.339C28.1826 27.7498 25.3253 21.5558 21.232 16.2016H21.2606Z" fill="currentColor"/>
          </svg>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          className="mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full mx-auto flex items-center justify-center shadow-2xl">
            <svg className="w-16 h-16 md:w-24 md:h-24 text-[#35CB68]" viewBox="0 0 90 88" fill="none">
              <path d="M21.2606 16.2016C16.5544 10.2671 10.4912 5.55026 3.58164 2.44806C2.8923 8.84556 3.23087 15.3122 4.5845 21.6027C5.97172 28.1997 8.81018 34.4052 12.8939 39.7688C17.5855 45.6769 23.6495 50.3491 30.5586 53.379C31.2628 47.022 30.9387 40.593 29.5987 34.339C28.1826 27.7498 25.3253 21.5558 21.232 16.2016H21.2606Z" fill="currentColor"/>
            </svg>
          </div>
        </motion.div>

        <motion.h2
          className="text-white text-6xl md:text-8xl lg:text-9xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Thank You
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="w-24 h-1 bg-white" />
          <p className="text-white text-3xl md:text-4xl lg:text-5xl">agrico</p>
          <div className="w-24 h-1 bg-white" />
        </motion.div>

        <motion.p
          className="text-white text-xl md:text-2xl lg:text-3xl opacity-90 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Bridging the gap between farmers and government for a transparent, fair, and sustainable agricultural ecosystem.
        </motion.p>

        {/* Animated CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-white text-[#35CB68] rounded-full text-xl md:text-2xl shadow-lg"
            whileHover={{ scale: 1.1, backgroundColor: "#F0F0F0" }}
            whileTap={{ scale: 0.95 }}
          >
            View Case Study
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-xl md:text-2xl"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll to Top */}
        <motion.button
          className="mt-16 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-[#35CB68]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
