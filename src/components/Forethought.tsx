import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Forethought() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-[#35CB68] text-5xl md:text-7xl lg:text-8xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Forethought
        </motion.h2>

        <motion.div
          className="w-full max-w-sm h-0.5 bg-white mb-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        <motion.p
          className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          India, primarily being an agricultural country, boasting about 15.4% in exports shows an annual capital income of 50 Billion dollars alone. Predominantly a farming nation since the early days, India is the home to a diverse demographic of farmers having variety of crops and farming techniques.
        </motion.p>

        <motion.p
          className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Although we have been steadily advancing in terms of technology that is used in farming and the support farmers, there remains one aspect that bottlenecks the growth of both the consumer as well as the producer. "The means to reach out"
        </motion.p>
      </div>
    </section>
  );
}
