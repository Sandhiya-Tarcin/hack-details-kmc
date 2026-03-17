import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Code2, CheckCircle2, Zap, Rocket, Star } from "lucide-react";

// CSV values
const milestones = [
  { number: 19, suffix: "", title: "Active Teams", icon: <Users size={28} /> },
  { number: 457, suffix: "", title: "Total Submissions", icon: <CheckCircle2 size={28} /> },
  { number: 14073, suffix: "", title: "Cumulative Points", icon: <Zap size={28} /> },
  { number: 37, suffix: "", title: "Highest Project Score", icon: <Code2 size={28} /> },
  { number: 3, suffix: "", title: "Elite Podium Teams", icon: <Rocket size={28} /> },
];

function useCountUp(target, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 20);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(counter);
  }, [target, inView]);
  return count;
}

export default function Milestones() {
  return (
    <section className="relative bg-white text-slate-900 py-24 overflow-hidden border-b border-slate-100 font-sans">
      
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
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-left" // Side aligned
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            <span className="text-[#004aad] uppercase tracking-[0.4em] font-bold text-[11px]">
              Impact Tracker
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-slate-900 leading-[0.9]">
            Hackathon <span className="text-[#004aad]">Milestones</span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-[#004aad] mt-8 rounded-full shadow-sm" 
          />
        </motion.div>

        {/* Milestone Grid - Code remains same */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {milestones.map((item, index) => {
            const ref = React.useRef(null);
            const inView = useInView(ref, { once: true, margin: "-50px" });
            const count = useCountUp(item.number, inView);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.05, transition: { duration: 0.3 } }}
                className="group relative cursor-default h-full"
              >
                {/* Card */}
                <div className="bg-white border-2 border-slate-50 rounded-[35px] p-8 text-center transition-all duration-500 group-hover:border-[#004aad]/20 group-hover:shadow-[0_20px_50px_rgba(0,74,173,0.12)] h-full flex flex-col items-center relative overflow-hidden">
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6 relative">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#004aad]/10"
                      whileHover={{ scale: 1.3, opacity: 0.2 }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <div className="relative flex justify-center items-center text-slate-300 group-hover:text-[#004aad] transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Number */}
                  <h3 className="text-4xl font-black italic tracking-tighter mb-2 text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                    {count.toLocaleString()}{item.suffix}
                  </h3>

                  {/* Title */}
                  <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed text-slate-400 group-hover:text-[#004aad] transition-colors duration-300 mt-auto">
                    {item.title}
                  </p>

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[#004aad]/0 group-hover:bg-[#004aad]/5 rounded-[35px] transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}