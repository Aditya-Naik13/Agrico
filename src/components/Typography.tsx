import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Typography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const colors = [
    { name: "Primary Green", hex: "#2BA55D" },
    { name: "Dark Green", hex: "#1E7A43" },
    { name: "Accent Blue", hex: "#4B7AFD" },
    { name: "Text Dark", hex: "#1A1A1A" },
    { name: "Text Gray", hex: "#525252" },
    { name: "Background", hex: "#F8F8F8" }
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
          Typography & Colors
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[#2BA55D] mb-16"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Font Display */}
          <motion.div
            className="bg-white border border-[#E5E5E5] rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-[#1A1A1A] text-2xl md:text-3xl font-bold mb-6">SF Pro Display</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[#525252] text-sm uppercase tracking-wide mb-2 font-medium">Regular • 400</p>
                <p className="text-[#1A1A1A] text-base md:text-lg">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-[#525252] text-sm uppercase tracking-wide mb-2 font-medium">Medium • 500</p>
                <p className="text-[#1A1A1A] text-base md:text-lg font-medium">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="text-[#525252] text-sm uppercase tracking-wide mb-2 font-medium">Bold • 700</p>
                <p className="text-[#1A1A1A] text-base md:text-lg font-bold">The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>
          </motion.div>

          {/* Color Palette */}
          <motion.div
            className="bg-white border border-[#E5E5E5] rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-[#1A1A1A] text-2xl md:text-3xl font-bold mb-6">Color Palette</h3>
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color, index) => (
                <motion.div
                  key={color.name}
                  className="flex flex-col"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="w-full h-20 rounded-xl mb-2 border border-[#E5E5E5]"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="text-[#1A1A1A] text-sm font-medium">{color.name}</p>
                  <p className="text-[#525252] text-xs font-mono">{color.hex}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
