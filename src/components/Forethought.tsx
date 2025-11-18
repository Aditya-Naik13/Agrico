import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Forethought() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen px-6 md:px-12 lg:px-16 py-20 md:py-24">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-[#2BA55D] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Forethought
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[#2BA55D] mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ originX: 0 }}
        />

        <div className="max-w-4xl">
          <motion.p
            className="text-[#525252] text-base md:text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            India, primarily being an agricultural country, boasting about 15.4% in exports shows an annual capital income of 50 Billion dollars alone. Predominantly a farming nation since the early days, India is the home to a diverse demographic of farmers having variety of crops and farming techniques.
          </motion.p>

          <motion.p
            className="text-[#525252] text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Although we have been steadily advancing in terms of technology that is used in farming and the support farmers, there remains one aspect that bottlenecks the growth of both the consumer as well as the producer. "The means to reach out"
          </motion.p>
        </div>
      </div>
    </section>
  );
}
