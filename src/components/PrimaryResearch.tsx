import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import imgUntitledDesign21 from "figma:asset/9873b496b82309991c4de8a8fe3a8c0f8bf1a32a.png";
import imgUntitledDesign3 from "figma:asset/ef8761b7037aa0f8391957f1e8306f4c451ea209.png";
import imgUntitledDesign4 from "figma:asset/f24e43927b76b5c656975af077228e8623e5d6af.png";
import imgUntitledDesign5 from "figma:asset/e782460e60e3117b57e129f91e93b703418db406.png";

export default function PrimaryResearch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section ref={ref} className="relative min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#35CB68] text-5xl md:text-7xl lg:text-8xl leading-tight mb-4">
            Primary<br />Research
          </h2>
          <div className="w-full max-w-sm h-0.5 bg-white" />
        </motion.div>

        {/* Intro Text */}
        <motion.p
          className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          The agriculture sector in India has experienced buoyant growth in the past two years.
        </motion.p>

        {/* Export/Import Stats Paragraph */}
        <motion.div
          className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="mb-6">The value of farm exports in April-December 2022 was 7.9% higher (USD 39 Billion) than the USD 36.2 bn for the corresponding period of the previous year.</p>
          <p>
            However, imports have grown 15.4% (USD 27.8 bn) in Apr-Dec 2022, over the USD 24.1 bn for Apr-Dec 2021. As a result, there has been a further increase of the surplus on the farm trade account. <span className="text-[#35CB68]">Why is this happening?</span>
          </p>
        </motion.div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Chart Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img src={imgUntitledDesign21} alt="Export Import Chart" className="w-full h-auto mix-blend-darken" />
          </motion.div>

          {/* Chart Legend and Traditional Ways */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div>
              <p className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl mb-4">Rise in:</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 bg-[#35CB68] rounded-full" />
                <p className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl">Exports</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#8AFFB2] rounded-full" />
                <p className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl">Imports</p>
              </div>
            </div>

            <div>
              <h3 className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl mb-4">
                Traditional Ways Farmers Used to Sell Their Harvest
              </h3>
              <p className="text-[#4D4D4D] text-xl md:text-2xl lg:text-3xl leading-relaxed">
                In the past, farmers relied on a limited number of methods to sell their harvest. Notable examples include but are not limited to the farmers' market, wholesale markets, middlemen, etc.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Traditional Methods Conclusion */}
        <motion.p
          className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Essentially, these traditional methods had their limitations—They did not provide farmers with the level of <span className="text-[#35CB68]">control</span> and <span className="text-[#35CB68]">transparency</span> obtainable with modern technology. Nonetheless, these traditional methods still play a role in many communities and continue to provide farmers with an important channel to reach their customers.
        </motion.p>

        {/* Third Party Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl text-center mb-12">
            Majority farmers in India sell their produce with the help of a third party.
          </p>

          {/* Three Cards: Contractor, Landlord, Aggregator */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contractor */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="mb-6">
                <img src={imgUntitledDesign3} alt="Contractor" className="w-64 h-64 mx-auto mix-blend-darken" />
              </div>
              <h4 className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl mb-4">Contractor</h4>
              <p className="text-[#4D4D4D] text-lg md:text-xl lg:text-2xl leading-relaxed">
                These individuals provide offers and schemes for every produce sold by the farmer in exchange for cut on contractual basis.
              </p>
            </motion.div>

            {/* Landlord/Moneylenders */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="mb-6">
                <img src={imgUntitledDesign4} alt="Landlord/Moneylenders" className="w-64 h-64 mx-auto mix-blend-darken" />
              </div>
              <h4 className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl mb-4">Landlord/Moneylenders</h4>
              <p className="text-[#4D4D4D] text-lg md:text-xl lg:text-2xl leading-relaxed">
                Farmers that don't own their own land tend to divert their sales means through their landlord.
              </p>
            </motion.div>

            {/* Aggregator */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="mb-6">
                <img src={imgUntitledDesign5} alt="Aggregator" className="w-64 h-64 mx-auto mix-blend-darken" />
              </div>
              <h4 className="text-[#4D4D4D] text-2xl md:text-3xl lg:text-4xl mb-4">Aggregator</h4>
              <p className="text-[#4D4D4D] text-lg md:text-xl lg:text-2xl leading-relaxed">
                Famers when faced with no other option tend to go with the individuals that they most trust in. These people may or may not have an professional experience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
