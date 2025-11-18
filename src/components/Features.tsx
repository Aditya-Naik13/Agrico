import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const features = [
    "Multilingual Support",
    "Ease of use . Nothing more, Nothing Less",
    "Superfast Onboarding thanks to Aadhaar",
    "Live Prices. Trust for Trust",
    "Graph Visualizations for better understanding",
    "Safe Transactions. Peer to peer."
  ];

  return (
    <section ref={ref} className="relative min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-[#35CB68] text-5xl md:text-7xl lg:text-8xl mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.h2>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              className="relative group"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="absolute -left-4 top-0 w-2 h-full bg-[#35CB68] rounded-full"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              />
              <motion.p
                className="text-[#4D4D4D] text-3xl md:text-5xl lg:text-6xl xl:text-7xl pl-8 py-4"
                whileHover={{ x: 20, color: "#35CB68" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Animated Background Numbers */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5 -z-10">
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <motion.p
              key={num}
              className="text-[#35CB68] text-9xl"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 0.05, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              0{num}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
