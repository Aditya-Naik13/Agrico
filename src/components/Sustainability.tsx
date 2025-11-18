import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Sustainability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen px-6 md:px-12 lg:px-16 py-20 md:py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-[#2BA55D] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Sustainability
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[#2BA55D] mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ originX: 0 }}
        />

        <motion.p
          className="text-[#525252] text-xl md:text-2xl font-bold leading-tight mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Future iterations aim to provide complete independence to the farmers.
        </motion.p>

        {/* Animated Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: "🌱", label: "Organic Growth" },
            { icon: "🤝", label: "Fair Trade" },
            { icon: "📈", label: "Market Access" },
            { icon: "💰", label: "Financial Freedom" },
            { icon: "🎓", label: "Education" },
            { icon: "🌍", label: "Sustainability" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center border border-[#E5E5E5]"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6, type: "spring" }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.08)" }}
            >
              <motion.p
                className="text-5xl md:text-6xl mb-4"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
              >
                {item.icon}
              </motion.p>
              <p className="text-[#525252] text-base md:text-lg font-bold leading-tight">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Future Vision */}
        <motion.div
          className="bg-[#2BA55D] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-white opacity-10 rounded-full"
            animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10">
            <motion.p
              className="text-white text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Empowering farmers with technology, transparency, and trust for a sustainable agricultural future.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Farmer Illustration */}
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 opacity-20"
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={isInView ? { opacity: 0.2, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <svg viewBox="0 0 90 88" fill="none" className="w-full h-full text-[#2BA55D]">
          <path d="M21.2606 16.2016C16.5544 10.2671 10.4912 5.55026 3.58164 2.44806C2.8923 8.84556 3.23087 15.3122 4.5845 21.6027C5.97172 28.1997 8.81018 34.4052 12.8939 39.7688C17.5855 45.6769 23.6495 50.3491 30.5586 53.379C31.2628 47.022 30.9387 40.593 29.5987 34.339C28.1826 27.7498 25.3253 21.5558 21.232 16.2016H21.2606Z" fill="currentColor"/>
        </svg>
      </motion.div>
    </section>
  );
}
