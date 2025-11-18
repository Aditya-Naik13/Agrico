import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function DesignProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const steps = [
    {
      number: "01",
      title: "Discover",
      items: ["Research", "User Personas", "Empathy Mapping"],
      color: "#F8F8F8",
      textColor: "#2BA55D"
    },
    {
      number: "02",
      title: "Define",
      items: ["Journey Mapping"],
      color: "#F8F8F8",
      textColor: "#2BA55D"
    },
    {
      number: "03",
      title: "Ideate",
      items: ["Userflow"],
      color: "#F8F8F8",
      textColor: "#2BA55D"
    },
    {
      number: "04",
      title: "Design",
      items: [],
      color: "linear-gradient(114.41deg, #FFFFFF 13.49%, #2BA55D 90.18%)",
      textColor: "#2BA55D"
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen px-6 md:px-12 lg:px-16 py-20 md:py-24">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-[#2BA55D] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Design Process
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[#2BA55D] mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ originX: 0 }}
        />

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative bg-white border border-[#E5E5E5] rounded-2xl p-6 md:p-8 min-h-[200px] overflow-hidden"
              style={{
                background: step.number === "04" ? "linear-gradient(114.41deg, #FFFFFF 13.49%, #2BA55D 90.18%)" : step.color
              }}
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -90 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.08)" }}
            >
              <motion.p
                className="text-[#2BA55D] text-7xl md:text-8xl mb-4 font-bold"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5 + index * 0.15, type: "spring", stiffness: 200 }}
              >
                {step.number}
              </motion.p>
              <p className="text-xl md:text-2xl font-bold leading-tight mb-4" style={{ color: step.number === "04" ? "white" : step.textColor }}>
                {step.title}
              </p>
              {step.items.length > 0 && (
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <motion.li
                      key={item}
                      className="text-[#525252] text-sm md:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.7 + index * 0.15 + i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}

              {/* Arrow for last step */}
              {step.number === "04" && (
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8"
                  animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Background text */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-[#2BA55D] text-[200px] md:text-[300px] lg:text-[400px] whitespace-nowrap rotate-90">
            discover
          </p>
        </motion.div>
      </div>
    </section>
  );
}
