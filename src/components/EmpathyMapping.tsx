import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import imgEo6L3Txj8Jl412 from "figma:asset/2b064ed64a7aa94bfea6335e455692de981500fe.png";
import imgOip1 from "figma:asset/3ec414febfadd8c09be5cd554bfc5b43ee034734.png";
import imgRectangle11 from "figma:asset/6d80745e182bb17dc9a5d9a7129b79a3f6128fb8.png";

export default function EmpathyMapping() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="relative min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-[#35CB68] text-5xl md:text-7xl lg:text-8xl mb-16 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Empathy<br />Mapping
        </motion.h2>

        {/* Empathy Map Grid - Matching Figma Frame Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#545454] hidden md:block" />
          {/* Horizontal Line - Top */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-[#545454] hidden md:block" style={{ top: '35%' }} />
          {/* Horizontal Line - Bottom */}
          <div className="absolute left-0 right-0 bottom-0 h-px bg-[#545454] hidden md:block" style={{ bottom: '20%' }} />

          {/* Says - Top Left */}
          <motion.div
            className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#545454]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-[#35CB68] text-3xl md:text-4xl lg:text-5xl mb-6">Says</h3>
            <ul className="space-y-3 list-disc pl-6 text-[#4D4D4D]">
              <li className="text-lg md:text-xl lg:text-2xl">"The prices offered seems inconsistent every time."</li>
              <li className="text-lg md:text-xl lg:text-2xl">"My stocks stay unsold for a long time."</li>
              <li className="text-lg md:text-xl lg:text-2xl">"My buddies crops sold for an higher price compared to mine."</li>
              <li className="text-lg md:text-xl lg:text-2xl">"I need an inventory manager!"</li>
              <li className="text-lg md:text-xl lg:text-2xl">"I cant pin point a high quality source."</li>
              <li className="text-lg md:text-xl lg:text-2xl">"When will I get my payment?"</li>
            </ul>
          </motion.div>

          {/* Thinks - Top Right */}
          <motion.div
            className="p-6 md:p-12 border-b md:border-b-0 border-[#545454]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-[#35CB68] text-3xl md:text-4xl lg:text-5xl mb-6">Thinks</h3>
            <ul className="space-y-3 list-disc pl-6 text-[#4D4D4D]">
              <li className="text-lg md:text-xl lg:text-2xl">"This middle-man is too unfair towards me."</li>
              <li className="text-lg md:text-xl lg:text-2xl">"Will the quality be on par with what I'm paying?"</li>
              <li className="text-lg md:text-xl lg:text-2xl">"I think I might be scammed."</li>
              <li className="text-lg md:text-xl lg:text-2xl">"The pay does not match my handwork."</li>
              <li className="text-lg md:text-xl lg:text-2xl">"Is there any way to sell my produce efficiently"</li>
            </ul>
          </motion.div>

          {/* Center Images - Between top and bottom sections */}
          <div className="col-span-2 relative py-8 flex justify-center items-center gap-4">
            <motion.img
              src={imgEo6L3Txj8Jl412}
              alt="Farmer 1"
              className="w-24 h-20 md:w-32 md:h-24 object-cover rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <motion.img
              src={imgOip1}
              alt="Farmer 2"
              className="w-24 h-28 md:w-32 md:h-36 object-cover rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <motion.img
              src={imgRectangle11}
              alt="Farmer 3"
              className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg"
              style={{ transform: "rotate(-5.26deg)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            />
          </div>

          {/* Does - Bottom Left */}
          <motion.div
            className="p-6 md:p-12 border-t md:border-t-0 md:border-r border-[#545454]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="text-[#35CB68] text-3xl md:text-4xl lg:text-5xl mb-6">Does</h3>
            <ul className="space-y-3 list-disc pl-6 text-[#4D4D4D]">
              <li className="text-lg md:text-xl lg:text-2xl">Looks out for advice</li>
              <li className="text-lg md:text-xl lg:text-2xl">Sells their produce directly to the market.</li>
              <li className="text-lg md:text-xl lg:text-2xl">Gets in touch with people who have experience in commerce.</li>
              <li className="text-lg md:text-xl lg:text-2xl">Asks a middle man to help them sell their produce.</li>
              <li className="text-lg md:text-xl lg:text-2xl">Buys from untrusted vendors in marketplace.</li>
            </ul>
          </motion.div>

          {/* Feels - Bottom Right */}
          <motion.div
            className="p-6 md:p-12 border-t md:border-t-0 border-[#545454]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-[#35CB68] text-3xl md:text-4xl lg:text-5xl mb-6">Feels</h3>
            <ul className="space-y-3 list-disc pl-6 text-[#4D4D4D]">
              <li className="text-lg md:text-xl lg:text-2xl"><span className="font-bold">Concerned</span> about bought produce.</li>
              <li className="text-lg md:text-xl lg:text-2xl"><span className="font-bold">Worried</span> about left over surplus.</li>
              <li className="text-lg md:text-xl lg:text-2xl"><span className="font-bold">Sad</span> on how things turned out.</li>
              <li className="text-lg md:text-xl lg:text-2xl"><span className="font-bold">Feels</span> hopeful on getting an fair price for sales.</li>
              <li className="text-lg md:text-xl lg:text-2xl"><span className="font-bold">Motivated</span> to digitize the process of buying produce.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
