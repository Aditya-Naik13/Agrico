import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import Hero from './components/Hero';
import Forethought from './components/Forethought';
import Overview from './components/Overview';
import DesignProcess from './components/DesignProcess';
import PrimaryResearch from './components/PrimaryResearch';
import SecondaryResearch from './components/SecondaryResearch';
import UserPersonas from './components/UserPersonas';
import EmpathyMapping from './components/EmpathyMapping';
import JourneyMapping from './components/JourneyMapping';
import Userflow from './components/Userflow';
import LowFidelity from './components/LowFidelity';
import Typography from './components/Typography';
import ToolsUsed from './components/ToolsUsed';
import FinalUIIntro from './components/FinalUIIntro';
import FinalUI from './components/FinalUI';
import Features from './components/Features';
import Sustainability from './components/Sustainability';
import ThankYou from './components/ThankYou';

export default function App() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="relative bg-white">
      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#35CB68] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Sections */}
      <Hero />
      <Forethought />
      <Overview />
      <DesignProcess />
      <PrimaryResearch />
      <SecondaryResearch />
      <UserPersonas />
      <EmpathyMapping />
      <JourneyMapping />
      <Userflow />
      <LowFidelity />
      <Typography />
      <ToolsUsed />
      <FinalUIIntro />
      <FinalUI />
      <Features />
      <Sustainability />
      <ThankYou />
    </div>
  );
}