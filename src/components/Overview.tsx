import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const cards = [
    {
      title: "What?",
      content: "An app to facilitate sales of agriculture produce from farmers to government."
    },
    {
      title: "Who?",
      content: "For farmers and government officials to carry out crop trades with no one in between."
    },
    {
      title: "Why?",
      content: "To maintain fairness in deals, optimizing market access and procurement of goods."
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-[#35CB68] text-5xl md:text-7xl lg:text-8xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Overview
        </motion.h2>

        <motion.div
          className="w-full max-w-sm h-0.5 bg-white mb-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        {/* Problem Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-[#35CB68] text-3xl md:text-4xl lg:text-5xl mb-6">Problem</h3>
          <p className="text-[#4D4D4D] text-xl md:text-2xl lg:text-3xl leading-relaxed">
            The Government provides the farmers with various utilities such as schemes, equipment discounts, education on new and advance farming techniques. But it lacks in one department that may be crucial for development of farmers. A way to seamlessly sell and purchase farmers produce without any middleman in between.
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-[#35CB68] text-3xl md:text-4xl lg:text-5xl mb-6">Solution</h3>
          <p className="text-[#4D4D4D] text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Design a user-friendly digital platform for direct sales of agricultural produce from farmers to the government. The platform aims to ensure fair pricing, streamline sales, and incentivize increased participation. Key features include fair pricing mechanisms, a transparent rewards system, intuitive interfaces for user accessibility, robust security measures, and long-term sustainability plans.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-[#F2F2F2] rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "#E8E8E8" }}
            >
              <h4 className="text-[#35CB68] text-3xl md:text-4xl lg:text-5xl mb-4">{card.title}</h4>
              <p className="text-black text-lg md:text-xl leading-relaxed">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
