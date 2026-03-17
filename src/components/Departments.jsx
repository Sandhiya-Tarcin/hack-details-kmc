import React from "react";
import { motion } from "framer-motion";
import { Monitor, Code2, Cpu, GraduationCap, Users, Star } from "lucide-react";

const DepartmentFocus = () => {
  const cseStats = {
    name: "Computer Science and Engineering",
    shortName: "CSE",
    totalPoints: "14,073",
    tasksCompleted: "457",
    activeTeams: "19",
    participation: "100%"
  };

  return (
    <section id="department" className="bg-white py-24 px-6 relative overflow-hidden font-sans border-b border-slate-100">
      {/* Background Glow - Premium Look */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* SECTION HEADING - Standardized size */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-20 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            <span className="text-[#004aad] uppercase tracking-[0.3em] font-bold text-[11px]">Departmental Analytics</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 italic">
            Top <span className="text-[#004aad]">Performers</span>
          </h1>
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "80px" }} 
            transition={{ duration: 1 }} 
            className="h-1.5 bg-[#004aad] mt-4 rounded-full shadow-md" 
          />
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-sky-500 p-8 md:p-10 rounded-[40px] shadow-2xl shadow-blue-200 text-white">
              <div className="flex justify-between items-start mb-12">
                <Monitor size={48} className="opacity-80" />
                <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Primary Participant
                </span>
              </div>
              
              <h2 className="text-5xl font-black tracking-tighter mb-2 uppercase italic leading-none">
                {cseStats.shortName}
              </h2>
              <p className="text-blue-50 font-bold text-sm tracking-wide uppercase mb-8">
                {cseStats.name}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                <div>
                  <p className="text-blue-100 text-[9px] uppercase font-bold tracking-widest mb-1">Total Score</p>
                  <p className="text-3xl font-black italic">{cseStats.totalPoints}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-[9px] uppercase font-bold tracking-widest mb-1">Participation</p>
                  <p className="text-3xl font-black italic">{cseStats.participation}</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="text-slate-900 font-black italic text-xl">{cseStats.tasksCompleted}</p>
                  <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Tasks Finished</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content Area */}
          <div className="flex-1 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-2">Centre of Excellence</p>
              
              {/* HEATING FIXED: Size increased to match other sections */}
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.9] mb-6">
                Departmental <span className="text-blue-600">Strength</span>
              </h3>
              
              <p className="text-slate-500 mt-4 leading-relaxed font-medium text-base">
                The Computer Science department led the 2K25 challenge with maximum participation, demonstrating top-tier skills in modern web technologies and problem-solving.
              </p>
            </motion.div>

            {/* Stats Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Users size={18} />, label: "Active Teams", val: cseStats.activeTeams },
                
                { icon: <GraduationCap size={18} />, label: "Campus", val: "Kamaraj College" },
                
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-blue-600">{item.icon}</div>
                  <div>
                    <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-900 font-extrabold text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DepartmentFocus;