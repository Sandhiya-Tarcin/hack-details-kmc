import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// 1. IMAGES IMPORT
import judge1Img from "../assets/hod3.png";
import judge2Img from "../assets/j2.png";
import judge3Img from "../assets/illam_khan3.png";

export default function Judges() {
  const judges = [
    {
      name: "Dr.A.Meenakshi, M.E., Ph.D.,",
      role: "Professor & Head",
      company: "KCET",
      expertise: "Big Data analytics, Machine learning, Data warehousing and Data mining",
      image: judge1Img 
    },
    {
      name: "Mr.Mohamed Arsath",
      role: "Director of Operation",
      company: "Tarcin",
      expertise: "Full Stack, Business Management, Project Handling",
      image: judge2Img
    },
    {
      name: "Mr.Mohammed Ilham Khan",
      role: "Chief Architect",
      company: "Tarcin",
      expertise: "Data Science, Networking,DevOps",
      image: judge3Img
    }
  ];

  return (
    <section id="judges" className="py-32 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION - CHANGED TO SIDE HEATING */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-left" // Left aligned
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            <span className="text-[#004aad] uppercase tracking-[0.4em] font-bold text-[11px]">
              Evaluation Panel
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase text-slate-900 leading-[0.9] italic">
            Distinguished <span className="text-[#004aad]">Judges</span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8 }}
            className="h-2 bg-[#004aad] mt-8 rounded-full shadow-sm" 
          />
        </motion.div>

        {/* JUDGES GRID - Code remains same */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_60px_-15px_rgba(0,74,173,0.15)] group-hover:border-[#004aad]/20 transition-all duration-500 flex flex-col items-center text-center overflow-hidden h-full">
                
                {/* Photo Wrapper */}
                <div className="relative mb-8 flex justify-center w-full">
                  <div className="absolute inset-0 bg-[#004aad]/5 blur-2xl rounded-full group-hover:bg-[#004aad]/15 transition-colors duration-500" />
                  <div className="w-40 h-40 rounded-full border-4 border-white group-hover:border-[#004aad]/20 shadow-md transition-all duration-500 relative z-10 overflow-hidden bg-slate-100">
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <span className="text-[11px] font-bold text-[#004aad] uppercase tracking-[0.25em] mb-3 block">
                    {judge.company}
                  </span>
                  
                  <h3 className="text-2xl font-black tracking-tight text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors leading-tight">
                    {judge.name}
                  </h3>
                  
                  <p className="text-slate-500 text-[13px] font-semibold uppercase tracking-wider mb-6">
                    {judge.role}
                  </p>

                  <div className="h-[1px] w-12 bg-slate-100 mx-auto mb-6 group-hover:w-20 group-hover:bg-[#004aad]/30 transition-all duration-500" />

                  {/* Expertise Box */}
                  <div className="bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-[#004aad]/10 transition-colors mt-auto">
                    <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                      Field Expertise
                    </p>
                    <p className="text-sm text-slate-700 font-medium">
                      {judge.expertise}
                    </p>
                  </div>
                </div>

                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#004aad]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-24"
        >
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.6em] font-bold mb-4 opacity-70">
            Blind Judging Process • Innovation Metric • Scalability Score
          </p>
          <div className="inline-block h-[1px] w-16 bg-slate-200" />
        </motion.div>
      </div>
    </section>
  );
}