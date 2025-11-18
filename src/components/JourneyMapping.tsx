import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function JourneyMapping() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const phases = [
    {
      title: "Entice",
      steps: [
        "Learns about Agrico",
        "Asks other's opinion (farmers)",
        "Checks the app on playstore/appstore"
      ]
    },
    {
      title: "Enter",
      steps: [
        "Downloads App",
        "Selects their preferred language",
        "Gets on board (Signup)"
      ]
    },
    {
      title: "Engage",
      steps: [
        "Watches the Intro Video",
        "Gets familiar with the app",
        "Sets up Inventory",
        "Selects produce to sell",
        "Sets his preferred price",
        "Creates a Sale",
        "Accepts offer"
      ]
    },
    {
      title: "Exit & Extend",
      steps: [
        "Receives Money",
        "Bonus",
        "Inventory Updates"
      ]
    }
  ];

  const delights = [
    "Joining forces with other farmers to meet the demand and gain additional bonus(bulk orders)."
  ];

  return (
    <section ref={ref} className="relative min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-[#35CB68] text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Journey Mapping
        </motion.h2>

        <motion.div
          className="w-full max-w-sm h-0.5 bg-white mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        {/* Phase Headers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              className="bg-[#4B7AFD] rounded-lg p-4 text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl">{phase.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Journey Steps */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {phases.map((phase, phaseIndex) => (
              <div key={phase.title} className="space-y-4">
                {phase.steps.map((step, stepIndex) => (
                  <motion.div
                    key={step}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + phaseIndex * 0.2 + stepIndex * 0.05, duration: 0.4 }}
                  >
                    <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-[#4B7AFD] hover:shadow-lg transition-shadow">
                      <p className="text-[#000000] text-sm md:text-base lg:text-lg">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Journey Line */}
          <motion.svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block"
            style={{ zIndex: -1 }}
          >
            <motion.path
              d="M 50 0 Q 100 100 150 100 Q 200 100 250 50 Q 300 0 350 50 Q 400 100 450 100"
              stroke="#000000"
              strokeWidth="1"
              strokeDasharray="5,5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 0.5, duration: 2 }}
            />
          </motion.svg>
        </div>

        {/* Delights Section */}
        <motion.div
          className="mt-12 bg-[#4F4F4F] rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-white text-2xl md:text-3xl mb-6">Delights</h3>
          {delights.map((delight, index) => (
            <motion.p
              key={index}
              className="text-white text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {delight}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
