import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import imgIPhone14Pro from "figma:asset/db1e14c8b7d5227d21e7bfc9deef4c5e8b77fb09.png";
import imgScreenshot2024040444224 from "figma:asset/a8271462cc01c564e440b96f2cc4d87177c428b4.png";
import imgScreenshot2024040444222 from "figma:asset/85d08507981b8bc2688b32470b97165fd67cc8bd.png";
import imgScreenshot2024040444223 from "figma:asset/4eb707030b3e35e23563bcb5b0db5eb294e4b8b1.png";
import imgScreenshot2024040444225 from "figma:asset/a30806abce92a2d0962b8189bcff1c953936b730.png";
import imgScreenshot2024040444226 from "figma:asset/bb6c7138897912f9bb2926bbf76eb314a2d3bf6c.png";
import imgScreenshot2024040444227 from "figma:asset/8ee98804b96b97234ddd2af2d7730b5e519b46a0.png";
import imgScreenshot2024040444228 from "figma:asset/ad0060b28f0ecc309c26da8fd559269a85990ccf.png";
import imgScreenshot2024040444229 from "figma:asset/a3fb194320b034a5c53a6f8b8cbfd1303e25e800.png";
import imgScreenshot2024040444230 from "figma:asset/77bd2a75407af69f9bca6548d5f99bb3910836bb.png";
import imgScreenshot2024040444231 from "figma:asset/ad3977ea482d6922bf7fbc7963788a4617f45e8f.png";
import imgImage9 from "figma:asset/9b350e4d402b76fdbe334acea10d73749aa32838.png";
import imgBody from "figma:asset/f1a46031843a67a7c012ccaa5531dccfa1dca335.png";
import imgIPhoneScreen1 from "figma:asset/8f5153bda04cdcaa8ee6ffe6d62c3814826f0b7b.png";

export default function FinalUI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const screens = [
    {
      title: "Splash",
      description: "With a rich and vibrant splash screen, Introducing Agrico: Where innovation meets nature, seamlessly connecting farmers and buyers for a sustainable future.",
      image: imgIPhone14Pro
    },
    {
      title: "Language for All",
      description: "Language selection empowers farmers to navigate Agrico comfortably in their preferred language, fostering inclusivity and ease of use across diverse user demographics.",
      image: imgScreenshot2024040444224
    },
    {
      title: "Checking if it's you",
      description: "Aadhaar card verification ensures secure and reliable authentication of farmers' identities, enhancing account creation process integrity and trust within the Agrico platform.",
      images: [imgScreenshot2024040444222, imgScreenshot2024040444223]
    },
    {
      title: "Join Along",
      description: "By incorporating a unique onboarding approach through an inspiring video showcasing real-life success stories, Agrico cultivates trust and motivation among farmers, fostering a sense of community and loyalty to the platform.",
      images: [imgScreenshot2024040444226, imgScreenshot2024040444225]
    },
    {
      title: "Where Things Reside",
      description: "The home screen of Agrico provides farmers with a comprehensive overview of their inventory scores, recent orders, and curated stories relevant to farming, fostering informed decision-making and community engagement.",
      image: imgScreenshot2024040444227
    },
    {
      title: "Up & Down, But Fair & True",
      description: "The market prices screen on Agrico ensures fairness and transparency for farmers by providing real-time crop prices sourced directly from the government, empowering farmers to make informed decisions and optimize their sales strategies.",
      image: imgScreenshot2024040444228
    },
    {
      title: "Rice or Wheat or Beans or Barley or Cabbage",
      subtitle: "Added in My Pocket",
      description: "The crop posting screen on Agrico empowers farmers to list their produce for sale, offering flexibility to set their price and select the grade quality, facilitating direct transactions and empowering farmers to negotiate fair prices for their crops.",
      images: [imgScreenshot2024040444229, imgScreenshot2024040444230]
    },
    {
      title: "And finally, The Right is Yours.",
      description: "The user profile screen on Agrico displays farmers' listings and their transaction history with government procurers, providing transparency and accountability while streamlining communication and tracking of deals.",
      image: imgScreenshot2024040444231
    }
  ];

  return (
    <section ref={ref} className="relative px-4 md:px-8 lg:px-16 py-20 md:py-32 bg-white overflow-hidden">
      {/* Hero Section with Final UI Text */}
      <div className="max-w-7xl mx-auto relative z-10 mb-32">
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background green banner */}
          <div className="bg-[#35CB68] rounded-[100px] py-16 md:py-32 px-8 relative overflow-hidden">
            {/* Animated Background Leaves */}
            <motion.div
              className="absolute top-10 left-10 opacity-30"
              style={{ y }}
            >
              <div className="w-64 h-64 bg-white rounded-full blur-3xl" />
            </motion.div>
            <motion.div
              className="absolute bottom-10 right-10 opacity-30"
              style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
            >
              <div className="w-96 h-96 bg-white rounded-full blur-3xl" />
            </motion.div>

            <div className="text-center relative z-10">
              <h2 className="text-white text-6xl md:text-8xl lg:text-[200px] leading-none mb-12">
                Final UI
              </h2>

              {/* Hero Phone with Agrico Branding */}
              <div className="max-w-4xl mx-auto bg-white rounded-[78px] p-8 md:p-16 shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#35CB68] rounded-[30px] flex items-center justify-center flex-shrink-0">
                    <svg className="w-14 h-14 md:w-20 md:h-20 text-white" viewBox="0 0 90 88" fill="none">
                      <path d="M21.2606 16.2016C16.5544 10.2671 10.4912 5.55026 3.58164 2.44806C2.8923 8.84556 3.23087 15.3122 4.5845 21.6027C5.97172 28.1997 8.81018 34.4052 12.8939 39.7688C17.5855 45.6769 23.6495 50.3491 30.5586 53.379C31.2628 47.022 30.9387 40.593 29.5987 34.339C28.1826 27.7498 25.3253 21.5558 21.232 16.2016H21.2606Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-[#35CB68] text-5xl md:text-7xl lg:text-8xl">agrico</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Screen Showcases */}
      <div className="max-w-7xl mx-auto space-y-32">
        {screens.map((screen, index) => (
          <motion.div
            key={screen.title}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Phone Mockup(s) */}
            <div className={`flex-1 ${screen.images ? 'flex gap-6' : ''}`}>
              {screen.image ? (
                <motion.div
                  className="max-w-md mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={screen.image} 
                    alt={screen.title}
                    className="w-full h-auto drop-shadow-2xl"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </motion.div>
              ) : screen.images && (
                <>
                  {screen.images.map((img, i) => (
                    <motion.div
                      key={i}
                      className="flex-1"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      style={{ transitionDelay: `${i * 0.1}s` }}
                    >
                      <img 
                        src={img} 
                        alt={`${screen.title} ${i + 1}`}
                        className="w-full h-auto drop-shadow-2xl"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </motion.div>
                  ))}
                </>
              )}
            </div>

            {/* Description with Visual Hierarchy */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-black text-3xl md:text-4xl lg:text-5xl mb-4">{screen.title}</h3>
              {screen.subtitle && (
                <h4 className="text-[#35CB68] text-2xl md:text-3xl lg:text-4xl mb-6">{screen.subtitle}</h4>
              )}
              <p className="text-[#4D4D4D] text-lg md:text-xl lg:text-2xl leading-relaxed">
                {screen.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Government Side */}
      <motion.div
        className="max-w-7xl mx-auto mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-[#000000] text-4xl md:text-6xl lg:text-7xl mb-6 text-center">Well, What about the Government?</h3>
        <p className="text-[#000000] text-3xl md:text-4xl lg:text-5xl mb-8 text-center">Or Client Side</p>
        <p className="text-[#000000] text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-16 text-center max-w-4xl mx-auto">
          Got That Covered, Just like the Problem Statement
        </p>
        
        {/* Government Dashboard Preview */}
        <div className="mb-16">
          <img src={imgImage9} alt="Government Dashboard" className="w-full h-auto rounded-3xl shadow-2xl" />
        </div>
      </motion.div>
    </section>
  );
}