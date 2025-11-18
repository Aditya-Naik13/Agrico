import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Typography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const colors = [
    { name: "#00530D", hex: "#00530D" },
    { name: "#35CB68", hex: "#35CB68" },
    { name: "#4B7AFD", hex: "#4B7AFD" },
    { name: "#000000", hex: "#000000" },
    { name: "#F0EDF3", hex: "#F0EDF3" },
    { name: "#FFFFFF", hex: "#FFFFFF" }
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
          Typography
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Font Display */}
          <motion.div
            className="bg-[#F0EDF3] rounded-[52px] p-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-black text-4xl md:text-5xl mb-8">SF Pro Display</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[#4D4D4D] text-lg mb-2">Medium</p>
                <p className="text-[#4D4D4D] text-xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>1234567890!@#$%^&*()</p>
              </div>
              <div>
                <p className="text-[#4D4D4D] text-lg mb-2">Bold</p>
                <p className="text-[#4D4D4D] text-xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>1234567890!@#$%^&*()</p>
              </div>
            </div>
          </motion.div>

          {/* Color Palette */}
          <motion.div
            className="bg-[#D9D9D9] rounded-[52px] p-12"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-black text-3xl md:text-4xl mb-8">Color Palette</h3>
            <div className="grid grid-cols-3 gap-4">
              {colors.map((color, index) => (
                <motion.div
                  key={color.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div
                    className="w-full aspect-square rounded-[20px] shadow-lg mb-3"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className={`text-sm md:text-base ${color.hex === "#FFFFFF" ? "text-black" : "text-white"}`} style={{ color: color.hex === "#FFFFFF" || color.hex === "#F0EDF3" ? "#000000" : "#FFFFFF" }}>
                    {color.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
