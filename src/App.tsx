import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Activity, Smartphone, LineChart, ShieldCheck, Stethoscope, User, ArrowRight, CheckCircle2, AlertCircle, X, Database } from 'lucide-react';

function EarlyAccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-indigo-950/40 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="glass-panel bg-white/95 rounded-3xl p-8 md:p-12 max-w-md w-full relative shadow-2xl shadow-indigo-900/20"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-indigo-700/50 hover:text-indigo-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-12 h-12 rounded-full bg-violet-50 border border-violet-100 text-violet-600 flex items-center justify-center mb-6">
              <Activity className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl font-medium mb-2 text-indigo-950">Join the Beta</h3>
            <p className="text-indigo-800/80 mb-8 leading-relaxed">
              Sign up for early access to NeuroTracker. Help us shape the future of Parkinson's tremor measurement.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="you@example.com" 
                  className="w-full bg-violet-50/50 border border-violet-200 rounded-xl px-4 py-3 text-indigo-950 placeholder:text-indigo-700/50 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1.5">I am a...</label>
                <select className="w-full bg-violet-50/50 border border-violet-200 rounded-xl px-4 py-3 text-indigo-950 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all appearance-none">
                  <option value="patient">Patient / Caregiver</option>
                  <option value="clinician">Clinician / Researcher</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full mt-4 px-6 py-3.5 text-sm font-medium bg-indigo-900 text-white rounded-xl hover:bg-indigo-800 transition-colors flex items-center justify-center gap-2"
              >
                Request Access <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  // Smoothly transition the base background color through a modern, noticeable palette
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#f5f3ff', '#e0f2fe', '#fce7f3', '#e0e7ff'] // Violet -> Sky Blue -> Soft Pink -> Indigo
  );

  // Enhanced parallax movement for the gradient blobs
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <motion.div
      className="fixed inset-0 z-[-1] overflow-hidden transition-colors duration-700"
      style={{ backgroundColor }}
    >
      <motion.div
        className="absolute inset-[-50%]"
        style={{
          y: y1,
          x: x1,
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(167, 139, 250, 0.4) 0px, transparent 50%)' // violet-400
        }}
      />
      <motion.div
        className="absolute inset-[-50%]"
        style={{
          y: y2,
          x: x2,
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(56, 189, 248, 0.3) 0px, transparent 50%)' // sky-400
        }}
      />
      <motion.div
        className="absolute inset-[-50%]"
        style={{
          y: y1,
          x: x2,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(244, 114, 182, 0.3) 0px, transparent 50%)' // pink-400
        }}
      />
      <motion.div
        className="absolute inset-[-50%]"
        style={{
          y: y2,
          x: x1,
          backgroundImage: 'radial-gradient(circle at 80% 80%, rgba(129, 140, 248, 0.4) 0px, transparent 50%)' // indigo-400
        }}
      />
    </motion.div>
  );
}

function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-6 bg-white/40 backdrop-blur-xl border-b border-white/40 shadow-sm"
    >
      <div className="flex items-center gap-1.5 md:gap-2 text-lg md:text-xl font-medium tracking-tighter text-indigo-950">
        <Activity className="w-4 h-4 md:w-5 md:h-5 text-violet-600 shrink-0" />
        <span className="truncate">NEUROTRACKER</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-indigo-800">
        <a href="#problem" className="hover:text-indigo-950 transition-colors">The Challenge</a>
        <a href="#how-it-works" className="hover:text-indigo-950 transition-colors">Clinical Flow</a>
        <a href="#benefits" className="hover:text-indigo-950 transition-colors">Value</a>
      </div>
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpenModal}
        className="px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-medium bg-indigo-900 text-white rounded-full hover:bg-indigo-800 transition-colors shadow-md shadow-indigo-900/10 whitespace-nowrap shrink-0"
      >
        Get Early Access
      </motion.button>
    </motion.nav>
  );
}

function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-3 text-sm font-medium text-violet-800 uppercase tracking-widest bg-white/60 backdrop-blur-sm border border-violet-200/50 w-fit px-5 py-2 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Clinical-Grade Measurement</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.4] md:leading-[1.05] tracking-normal md:tracking-tighter font-medium text-indigo-950">
            OBJECTIVE <br />
            <span className="font-serif italic font-light text-indigo-800/80 pr-1 md:pr-0">Parkinson's</span> TRACKING
          </h1>
          
          <div className="flex flex-col gap-6 mt-4">
            <p className="text-xl md:text-2xl text-indigo-900 font-medium leading-relaxed max-w-4xl">
              Take the guesswork out of your tremor care. Move beyond subjective tracking and start understanding your symptoms with more clarity, confidence, and control.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-2">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenModal}
              className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest bg-indigo-900 text-white px-8 py-4 rounded-full hover:bg-indigo-800 transition-colors shadow-xl shadow-indigo-900/20"
            >
              Join the Beta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TheProblem() {
  return (
    <section id="problem" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight text-indigo-950">The Challenge in Parkinson's Care</h2>
          <p className="text-2xl md:text-3xl text-indigo-800/90 font-serif italic font-light">
            "How have your tremors been over the past few months?"
          </p>
          <p className="text-lg text-indigo-900/80 mt-4">
            Patients and neurologists often rely on vague memory and subjective diaries to understand whether Levodopa is working effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-3xl p-8 md:p-12 transition-shadow hover:shadow-2xl hover:shadow-indigo-900/5"
          >
            <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center mb-8 shadow-sm">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4 text-indigo-950">The Old Way: Subjective Diaries</h3>
            <ul className="space-y-4 text-indigo-900/80">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0" />
                Relying on memory to recall tremor severity across weeks or months.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0" />
                Difficulty tracking the precise timing and impact of medication (ON vs. OFF states).
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0" />
                Brief, 15-minute clinical visits that only capture a snapshot in time.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden border-violet-200 transition-shadow hover:shadow-2xl hover:shadow-indigo-900/10"
          >
            <div className="w-12 h-12 rounded-full bg-violet-50 border border-violet-100 text-violet-600 flex items-center justify-center mb-8 relative z-10 shadow-sm">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium mb-4 relative z-10 text-indigo-950">NeuroTracker: Objective & Continuous</h3>
            <ul className="space-y-4 text-indigo-900/80 relative z-10">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                Standardized measurements using high-fidelity iPhone motion sensors.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                Clear, longitudinal trends showing exactly how motor symptoms fluctuate.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                Neutral, non-diagnostic data that supports better medication adjustments.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ClinicalFlow() {
  const nodes = [
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Patient Recording",
      desc: "Guided 30s posture hold via iPhone.",
      color: "text-sky-600",
      bg: "bg-sky-100",
      dot: "bg-sky-500"
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Quality Control",
      desc: "Algorithms reject invalid movements.",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      dot: "bg-indigo-500"
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Data Processing",
      desc: "Sensors translate motion to amplitude.",
      color: "text-violet-600",
      bg: "bg-violet-100",
      dot: "bg-violet-500"
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Clinical Review",
      desc: "Exportable longitudinal trends.",
      color: "text-amber-600",
      bg: "bg-amber-100",
      dot: "bg-amber-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 max-w-5xl mx-auto px-6 md:px-12 w-full">
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight text-indigo-950">How It Works</h2>
        <p className="text-lg text-indigo-900/80 max-w-2xl mx-auto">A seamless, interactive pipeline from patient input to processed data.</p>
      </div>

      <div className="relative">
        {/* Animated Vertical Connecting Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-violet-200/40 -translate-x-1/2 rounded-full z-0" />
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-sky-400 via-violet-500 to-amber-400 -translate-x-1/2 rounded-full origin-top z-0" 
        />

        <div className="space-y-12 md:space-y-24 relative z-10">
          {nodes.map((node, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 group ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Half */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`relative p-[1px] rounded-3xl bg-gradient-to-b from-white/80 to-white/20 transition-all duration-300 inline-block w-full shadow-lg shadow-indigo-900/5 group-hover:shadow-xl group-hover:shadow-indigo-900/10 ${isEven ? 'md:mr-auto' : 'md:ml-auto'} max-w-md`}
                  >
                    <div className={`bg-white/60 backdrop-blur-xl p-8 rounded-[23px] h-full border border-white/60 flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} items-start`}>
                      <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-sm ${node.bg} ${node.color}`}>
                        {node.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 text-indigo-950">{node.title}</h3>
                      <p className={`text-base text-indigo-900/80 leading-relaxed ${isEven ? 'md:text-left' : 'md:text-right'} text-left`}>{node.desc}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl shadow-indigo-900/10 border-4 border-violet-100 z-10 flex items-center justify-center group-hover:border-violet-300 group-hover:scale-125 transition-all duration-500">
                  <div className={`w-3 h-3 rounded-full ${node.dot} shadow-sm`} />
                </div>

                {/* Empty Half for spacing on desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DualAudience() {
  return (
    <section id="benefits" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Patients */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:p-10 rounded-3xl bg-white/40 hover:bg-white/60 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-indigo-950 mb-8 shadow-sm border border-indigo-100">
              <User className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight text-indigo-950">For Parkinson's Patients</h2>
            <p className="text-indigo-900/80 mb-8 text-lg leading-relaxed">
              Take control of your tremor tracking. Stop guessing how you felt last week and start bringing objective data to your neurology appointments.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-indigo-900/90">
                <CheckCircle2 className="w-6 h-6 text-violet-500 shrink-0" />
                <div>
                  <strong className="block text-indigo-950 font-medium mb-1">Easy to Use</strong>
                  <span className="text-sm text-indigo-900/70">Clear, guided instructions make recording simple, even during OFF periods.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-indigo-900/90">
                <CheckCircle2 className="w-6 h-6 text-violet-500 shrink-0" />
                <div>
                  <strong className="block text-indigo-950 font-medium mb-1">Medication Tracking</strong>
                  <span className="text-sm text-indigo-900/70">Easily tag recordings as "ON" or "OFF" Levodopa to see what's working.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-indigo-900/90">
                <CheckCircle2 className="w-6 h-6 text-violet-500 shrink-0" />
                <div>
                  <strong className="block text-indigo-950 font-medium mb-1">Better Conversations</strong>
                  <span className="text-sm text-indigo-900/70">Share exportable summaries with your doctor to make the most of your visit.</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Clinicians */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:p-10 rounded-3xl bg-white/40 hover:bg-white/60 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-indigo-950 mb-8 shadow-sm border border-indigo-100">
              <Stethoscope className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight text-indigo-950">For Neurologists</h2>
            <p className="text-indigo-900/80 mb-8 text-lg leading-relaxed">
              Enhance your clinical assessment with reliable, out-of-clinic data. NeuroTracker provides the longitudinal context missing from brief visits.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-indigo-900/90">
                <CheckCircle2 className="w-6 h-6 text-sky-500 shrink-0" />
                <div>
                  <strong className="block text-indigo-950 font-medium mb-1">Quality-Controlled Data</strong>
                  <span className="text-sm text-indigo-900/70">Built-in posture and stability checks ensure you are reviewing valid recordings.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-indigo-900/90">
                <CheckCircle2 className="w-6 h-6 text-sky-500 shrink-0" />
                <div>
                  <strong className="block text-indigo-950 font-medium mb-1">Standardized Metrics</strong>
                  <span className="text-sm text-indigo-900/70">Neutral, consistent amplitude measurements rather than subjective patient recall.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-indigo-900/90">
                <CheckCircle2 className="w-6 h-6 text-sky-500 shrink-0" />
                <div>
                  <strong className="block text-indigo-950 font-medium mb-1">Actionable Summaries</strong>
                  <span className="text-sm text-indigo-900/70">Quickly review motor fluctuations across medication states to support titration.</span>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Clinical Disclaimer */}
        <div className="p-6 glass-panel rounded-2xl mb-16 border-violet-200/50 bg-violet-50/40">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-violet-600 shrink-0" />
            <p className="text-sm text-indigo-900/80 leading-relaxed">
              <strong className="text-indigo-950">Important Clinical Notice:</strong> NeuroTracker is a measurement and monitoring tool designed to assist individuals and healthcare providers in tracking tremor characteristics over time. <strong className="text-indigo-950">It is not a diagnostic product.</strong> The data and summaries generated by NeuroTracker are neutral measurements and do not constitute medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional regarding any medical condition or treatment decisions.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-2 text-xl font-medium tracking-tighter text-indigo-950">
            <Activity className="w-5 h-5 text-violet-600" />
            NEUROTRACKER
          </div>
          <div className="flex gap-6 text-sm text-indigo-800">
            <a href="#" className="hover:text-indigo-950 transition-colors">Download App</a>
            <a href="#" className="hover:text-indigo-950 transition-colors">Clinical Validation</a>
            <a href="#" className="hover:text-indigo-950 transition-colors">Privacy Policy</a>
          </div>
          <div className="text-sm text-indigo-700/60">
            © {new Date().getFullYear()} NeuroTracker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-violet-200/50">
      <AnimatedBackground />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <TheProblem />
        <ClinicalFlow />
        <DualAudience />
      </main>
      <Footer />
      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
