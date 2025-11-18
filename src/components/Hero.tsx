import { motion } from 'motion/react';
import imgIPhone13Pro from "figma:asset/8e16961190dc15513508fae8bc5450c82a3a786a.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16 py-20">
      {/* Background Animated Leaves */}
      <motion.div
        className="absolute -left-20 top-1/4 opacity-20"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <LeafIcon className="w-32 h-32 md:w-48 md:h-48 text-[#35CB68]" />
      </motion.div>

      <motion.div
        className="absolute -right-20 top-2/3 opacity-20"
        animate={{
          rotate: [0, -10, 10, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <LeafIcon className="w-40 h-40 md:w-56 md:h-56 text-[#35CB68]" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl">
              <span className="text-[#35CB68]">agri</span>
              <span className="text-black">co</span>
            </h1>
          </motion.div>

          <motion.div
            className="w-full max-w-xs h-0.5 bg-white my-8 mx-auto lg:mx-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Phone Mockup - Using actual Figma image */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={imgIPhone13Pro} 
              alt="Agrico App on iPhone" 
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 88" fill="none">
      <path
        d="M21.2606 16.2016C16.5544 10.2671 10.4912 5.55026 3.58164 2.44806C2.8923 8.84556 3.23087 15.3122 4.5845 21.6027C5.97172 28.1997 8.81018 34.4052 12.8939 39.7688C17.5855 45.6769 23.6495 50.3491 30.5586 53.379C31.2628 47.022 30.9387 40.593 29.5987 34.339C28.1826 27.7498 25.3253 21.5558 21.232 16.2016H21.2606Z"
        fill="currentColor"
      />
    </svg>
  );
}