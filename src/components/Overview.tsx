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
    <section ref={ref} className="relative px-6 md:px-12 lg:px-16 py-20 md:py-24">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-[#2BA55D] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Overview
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[#2BA55D] mb-16"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        {/* Problem Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-[#1A1A1A] text-2xl md:text-3xl font-bold mb-4 leading-tight">Problem</h3>
          <p className="text-[#525252] text-lg md:text-xl leading-relaxed max-w-4xl">
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
          <h3 className="text-[#1A1A1A] text-2xl md:text-3xl font-bold mb-4 leading-tight">Solution</h3>
          <p className="text-[#525252] text-lg md:text-xl leading-relaxed max-w-4xl">
            Design a user-friendly digital platform for direct sales of agricultural produce from farmers to the government. The platform aims to ensure fair pricing, streamline sales, and incentivize increased participation. Key features include fair pricing mechanisms, a transparent rewards system, intuitive interfaces for user accessibility, robust security measures, and long-term sustainability plans.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-[#F8F8F8] border border-[#E5E5E5] rounded-2xl p-6 md:p-8 transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.08)" }}
            >
              <h4 className="text-[#2BA55D] text-2xl md:text-3xl font-bold mb-3 leading-tight">{card.title}</h4>
              <p className="text-[#525252] text-base md:text-lg leading-relaxed">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
