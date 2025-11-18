import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import imgEo6L3Txj8Jl412 from "figma:asset/2b064ed64a7aa94bfea6335e455692de981500fe.png";
import imgOip1 from "figma:asset/3ec414febfadd8c09be5cd554bfc5b43ee034734.png";
import imgRectangle11 from "figma:asset/6d80745e182bb17dc9a5d9a7129b79a3f6128fb8.png";

export default function UserPersonas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const personas = [
    {
      number: "1",
      name: "Ravi (Small Farmer)",
      description: "is a small-scale farmer who grows a variety of fruits and vegetables on his family-owned farm. He has limited access to markets and struggles to find buyers willing to pay fair prices for his produce.",
      image: imgEo6L3Txj8Jl412,
      painPoints: [
        "Difficulty in accessing fair pricing information for crops.",
        "Limited market reach and reliance on middlemen for selling her produce."
      ],
      benefits: [
        "Access to transparent pricing ensuring fair compensation.",
        "Expanded market opportunities through direct sales to the government."
      ]
    },
    {
      number: "2",
      name: "Priya (Govt. Procurer)",
      description: "works for the government's agricultural procurement department and is responsible for sourcing fresh produce from local farmers to supply government-run institutions.",
      image: imgOip1,
      painPoints: [
        "Difficulty in sourcing high-quality produce from reliable suppliers.",
        "Lack of transparency in pricing and quality assessment when dealing.",
        "Time-consuming paperwork and tasks associated with managing procurement processes."
      ],
      benefits: [
        "Provides real-time pricing and availability information",
        "Reduced administrative burden through automated documentation and transaction management features."
      ]
    },
    {
      number: "3",
      name: "Shashi(Independent Farmer)",
      description: "is a wealthy and independent farmer who owns a large-scale agricultural operation, producing a variety of high-value crops. He has extensive resources and infrastructure at his disposal, including advanced technology and equipment.",
      image: imgRectangle11,
      painPoints: [
        "Difficulty in managing large number of produce independently.",
        "Produce in bulk getting sold for prices lower than market price."
      ],
      benefits: [
        "Access to personal inventory which shows the current holdings and addition of assets.",
        "Freedom to set the price of produce depending on the quality."
      ]
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen px-6 md:px-12 lg:px-16 py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-[#2BA55D] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          User Personas
        </motion.h2>

        <motion.div
          className="w-20 h-1 bg-[#2BA55D] mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ originX: 0 }}
        />

        {/* Personas Grid */}
        <div className="space-y-20">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.number}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Large Number Background */}
                <div className="lg:col-span-1 relative">
                  <span className="text-[200px] text-[rgba(53,203,104,0.24)] leading-none">
                    {persona.number}
                  </span>
                </div>

                {/* Left Column: Name, Description */}
                <div className="lg:col-span-3">
                  <h3 className="text-[#1E7A43] text-xl md:text-2xl font-bold leading-tight mb-4">
                    {persona.name}
                  </h3>
                  <p className="text-[#525252] text-sm md:text-base leading-relaxed">
                    {persona.description}
                  </p>
                </div>

                {/* Middle Column: Image */}
                <div className="lg:col-span-3 flex justify-center items-center">
                  <img 
                    src={persona.image} 
                    alt={persona.name}
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg"
                    style={{ transform: persona.number === "3" ? "rotate(-5.26deg)" : "none" }}
                  />
                </div>

                {/* Right Columns: Pain Points & Benefits */}
                <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pain Points */}
                  <div>
                    <h4 className="text-[#E43334] text-xl md:text-2xl font-bold leading-tight mb-4">Pain Points</h4>
                    <ul className="space-y-2">
                      {persona.painPoints.map((point, i) => (
                        <li key={i} className="text-[#525252] text-sm md:text-base leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-[#0FA379] text-xl md:text-2xl font-bold leading-tight mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {persona.benefits.map((benefit, i) => (
                        <li key={i} className="text-[#525252] text-sm md:text-base leading-relaxed">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
