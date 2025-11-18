import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import imgImage1 from "figma:asset/ace7284cc10332a62d129f674e5b2ebf40b80282.png";
import imgImage2 from "figma:asset/5ff1c35e2060dd0a7ca6e36c2f511db7deb11b13.png";
import imgImage3 from "figma:asset/9a061333bd901b90f12ebbb21856cde2dc843f6b.png";

export default function SecondaryResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="relative min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-[#35CB68] text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Secondary Research
        </motion.h2>

        <motion.div
          className="w-full max-w-sm h-0.5 bg-white mb-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        <motion.p
          className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          According to the 77th round of the National Sample Survey by the National Statistical Office titled situation assessment of agricultural households has found out that the majority of Indian farmers sell their produce in local markets.
        </motion.p>

        <motion.p
          className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The survey has listed five reasons for dissatisfaction among farmers: 'lower than market price'; 'delayed payment'; 'deduction for loans borrowed'; 'faulty weighing and grading' and 'others'.
        </motion.p>

        {/* First Survey Image */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <img src={imgImage1} alt="Market Survey Data" className="w-full h-auto" />
        </motion.div>

        <motion.p
          className="text-[#4D4D4D] text-lg md:text-xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Source: Down to Earth
        </motion.p>

        {/* Additional Survey Images */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <img src={imgImage2} alt="Survey Data 2" className="w-full h-auto mb-4" />
          <img src={imgImage3} alt="Survey Data 3" className="w-full h-auto" />
        </motion.div>

        <motion.p
          className="text-[#4D4D4D] text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Source: The Wire
        </motion.p>

        {/* Key Insight */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p className="text-[#35CB68] text-2xl md:text-3xl lg:text-4xl mb-6">
            Who determines the final price that buyers pay for the produce? <span className="text-[#4D4D4D]">Was the question addressed in the wire article.</span>
          </p>
          <div className="text-[#4D4D4D] text-xl md:text-2xl lg:text-3xl leading-relaxed">
            <p className="mb-4">
              An <span className="text-[#35CB68]">arhtiya</span> is the middleman between traders and farmers who conducts the auction and charges a fee against it, not exceeding 1% of the total payment.
            </p>
            <p>
              The arhtiya also doubles as a moneylender at this stage. Traders usually pay farmers within seven to 10 days of receiving the produce. However, if the farmers want the payment on the same day, the arhtiya pays money to the farmers on behalf of the traders and charges 1% interest.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
