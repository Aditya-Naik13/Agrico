import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import imgUserJourneyMapping1 from "figma:asset/6cd1456735c2417dd5388d79e744459d9625b76f.png";

export default function Userflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-[#35CB68] text-5xl md:text-7xl lg:text-8xl mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Userflow
        </motion.h2>

        {/* Userflow Diagram from Figma */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img src={imgUserJourneyMapping1} alt="User Flow Diagram" className="w-full h-auto rounded-2xl shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}