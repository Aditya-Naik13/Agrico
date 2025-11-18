import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import img46A76C802176Eb17B04E12108De7E7E0F3736Dc61024X10241 from "figma:asset/3ef8dc82e182c78c28e001d6c5160562b3f5fc98.png";
import imgImages1 from "figma:asset/c1d11d3bd19b685c85b58fdafc63327d0072fb09.png";
import imgUnsplashLogoIcon2066511 from "figma:asset/9ff5ed618c9579776350a30c33bf8f50c621781a.png";

export default function ToolsUsed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const tools = [
    { name: "Figma", image: img46A76C802176Eb17B04E12108De7E7E0F3736Dc61024X10241 },
    { name: "Adobe XD", image: imgImages1 },
    { name: "Unsplash", image: imgUnsplashLogoIcon2066511 }
  ];

  return (
    <section ref={ref} className="relative min-h-screen px-6 md:px-12 lg:px-16 py-20 md:py-24 bg-[#F8F8F8]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-[#2BA55D] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          Tools used
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[#2BA55D] mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ originX: 0 }}
        />

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg flex items-center justify-center mb-6 overflow-hidden bg-white p-4 border border-[#E5E5E5]"
                whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src={tool.image} alt={tool.name} className="w-full h-full object-contain" />
              </motion.div>
              <p className="text-[#525252] text-xl md:text-2xl font-bold leading-tight">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}