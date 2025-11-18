import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import imgUserJourneyMapping1 from "figma:asset/6cd1456735c2417dd5388d79e744459d9625b76f.png";

export default function Userflow() {
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
          Userflow
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[#2BA55D] mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ originX: 0 }}
        />

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