import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaUsers, FaGift, FaChartBar } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { Star } from "lucide-react"; 

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white text-slate-900 py-24 sm:py-32 overflow-hidden font-sans border-b border-slate-100"
    >
      {/* 1. Grid Background - Dark Navy Accent */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, 
          backgroundSize: '50px 50px' 
        }} 
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-start gap-2 mb-6"
        >
          <Star size={14} className="text-[#004aad] fill-[#004aad]" />
          <p className="text-[#004aad] uppercase tracking-[0.3em] font-bold text-[11px]">
            Innovation Meets Technology
          </p>
        </motion.div>

        {/* Heading Updated to K-HACK */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-12 text-slate-900"
        >
          What is <span className="text-[#004aad]">Tech Challenge 2K25?</span>
        </motion.h2>

        {/* Vision Mission for KCET */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-[#004aad] rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-10 transition duration-700"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/80 backdrop-blur-sm border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-xl hover:shadow-[#004aad]/5 transition-all duration-500"
          >
            <h3 className="flex items-center gap-3 text-2xl font-black text-slate-800 uppercase tracking-tight mb-6">
              <FaBullseye className="text-[#004aad]" />
              Vision & Mission
            </h3>

            <p className="text-slate-600 leading-relaxed text-lg max-w-4xl">
              Tech Challenge- 2k25 is a premier Hackathon organized by 
              <span className="font-bold text-slate-800"> Kamaraj College of Engineering and Technology (Autonomous), Madurai</span>, 
              in collaboration with <span className="text-[#004aad] font-bold">Tarcin</span>. 
              Our mission is to foster a culture of innovation among engineering students, 
              empowering them to build real-time solutions for industry-scale problems.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FiCode />}
            title="Real-time Problems"
            desc="Students work on problem statements provided by Tarcin, ensuring exposure to industrial demands."
          />
          <FeatureCard
            icon={<FaUsers />}
            title="Collaborative Spirit"
            desc="Encourages teamwork and peer-to-peer learning through 48+ hours of intensive coding and design."
          />
          <FeatureCard
            icon={<FaGift />}
            title="Innovation Hub"
            desc="A platform for budding engineers to showcase prototypes and gain mentorship from industry experts."
          />
        </div>

        {/* KCET Accreditation & IIC Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 rounded-[2.5rem] p-10 border border-slate-100 bg-slate-50/50 backdrop-blur-sm text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#004aad] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
            NAAC A+ & Autonomous Excellence
          </div>

          <h3 className="flex justify-center items-center gap-2 text-xl font-black text-slate-800 uppercase tracking-tight mb-4">
            <FaChartBar className="text-[#004aad]" />
            Institutional Impact
          </h3>

          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Organized by the <span className="font-bold text-[#004aad]">IQAC</span> and 
            the <span className="font-bold text-[#004aad]">Institution's Innovation Council (IIC)</span> 
            of KCET, this event aims to enhance the technical competencies and innovation 
            index of students as per NAAC and NBA frameworks.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-[#004aad] rounded-[2rem] blur-lg opacity-0 group-hover:opacity-5 transition duration-500"></div>

      <motion.div
        whileHover={{ y: -10 }}
        className="relative h-full bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm group-hover:border-[#004aad]/20 transition-all duration-300"
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-[#004aad] text-2xl mb-6 group-hover:bg-[#004aad] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-3">
          {title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </div>
  );
}