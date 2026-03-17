import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star } from "lucide-react";

// Images import
import Rank1Img from "../assets/1.jpeg"; 
import Rank2Img from "../assets/2.jpeg";
import Rank3Img from "../assets/3.jpeg";

export default function Teams() {
  const eliteTeams = [
    {
      name: "METAMINDS",
      lead: "Sanjhai M L, Keerthivaasan V G",
      info: "69 Projects Completed",
      college: "Kamaraj College (KCET)",
      points: 2153,
      status: "Rank 2",
      rank: 2,
      order: "order-2 md:order-1", 
      image: Rank2Img,
      featured: false
    },
    {
      name: "ALGO_TRACKERS",
      lead: "Vishali S, Vaira Selvi S, Mohana Priya K",
      info: "70 Projects Completed",
      college: "Kamaraj College (KCET)",
      points: 2317,
      status: "Rank 1",
      rank: 1,
      featured: true,
      order: "order-1 md:order-2", 
      image: Rank1Img
    },
    {
      name: "TRIUNE SPIRITS",
      lead: "Ramya Sri V, Shyamala Rose J, Sajeetha R",
      info: "64 Projects Completed",
      college: "Kamaraj College (KCET)",
      points: 2047,
      status: "Rank 3",
      rank: 3,
      order: "order-3 md:order-3", 
      image: Rank3Img,
      featured: false
    }
  ];

  const leaderboardTeams = [
    { rank: "#4", name: "SHERLOCK'D", points: 1836, tasks: "59 Projects" },
    { rank: "#5", name: "PYHUNTERS", points: 1745, tasks: "55 Projects" },
    { rank: "#6", name: "INTELNOVA", points: 1667, tasks: "56 Projects" },
    { rank: "#7", name: "THE XFORCE", points: 1126, tasks: "35 Projects" },
    { rank: "#8", name: "ARISEMINDS", points: 306, tasks: "10 Projects" },
    { rank: "#9", name: "SYNTAX SQUADS", points: 223, tasks: "8 Projects" },
    { rank: "#10", name: "DEBUGGERS", points: 161, tasks: "5 Projects" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <section id="teams" className="py-24 bg-white text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            </motion.div>
            <h2 className="text-[#004aad] uppercase tracking-[0.3em] font-bold text-[11px]">Live Hackathon Standings</h2>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-900">
            Elite <span className="text-[#004aad]">Squadrons</span>
          </h1>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "80px" }} transition={{ duration: 1, ease: "easeOut" }} className="h-1.5 bg-[#004aad] mt-4 rounded-full shadow-lg" />
        </motion.div>

        {/* Podium Display */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 lg:gap-8 mb-32">
          {eliteTeams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: team.featured ? -8 : -5 }}
              className={`relative flex flex-col items-center p-6 rounded-[40px] w-full md:w-1/3 border transition-all ${team.order} ${
                team.featured 
                  ? "bg-white border-[#004aad]/40 min-h-[540px] shadow-[0_25px_60px_rgba(0,74,173,0.15)] z-10" 
                  : "bg-slate-50/80 backdrop-blur-sm border-slate-100 min-h-[500px]"
              }`}
            >
              <div className={`w-full ${team.featured ? "h-64" : "h-56"} mb-6 overflow-hidden rounded-[20px] bg-slate-200`}>
                <img src={team.image} alt={team.name} className="w-full h-full object-cover" />
              </div>

              <h2 className="text-3xl font-black text-center mb-2 uppercase tracking-tight text-slate-800">{team.name}</h2>
              <p className="text-[#004aad] text-[10px] font-bold tracking-widest uppercase mb-6 text-center">{team.college}</p>

              <div className="w-full h-[1px] bg-slate-200/50 mb-8" />

              <div className="space-y-2 text-center mb-8">
                <p className="text-slate-500 text-sm font-semibold">{team.info}</p>
                <p className="text-slate-400 text-xs italic">{team.lead}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                <motion.div whileHover={{ scale: 1.05 }} className="text-center bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
                  <p className="text-xl font-black text-[#004aad]">{team.points.toLocaleString()}</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Points</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-center">
                  <p className="text-xs font-black text-[#004aad] uppercase">{team.status}</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Standing</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Leaderboard - Rank Numbers Back on Left */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-800 uppercase">Leaderboard</h2>
            <div className="h-[1px] flex-grow bg-slate-100" />
          </div>

          {leaderboardTeams.map((team, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02, x: 5, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
              className="group flex items-center justify-between bg-white px-8 py-5 rounded-2xl border border-slate-100 transition-all cursor-default shadow-sm"
            >
              <div className="flex items-center gap-6">
                {/* Rank Number displayed on left */}
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-black italic text-slate-400 group-hover:bg-[#004aad] group-hover:text-white transition-all">
                  {team.rank}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#004aad] transition-colors uppercase">{team.name}</h3>
                  <p className="text-xs text-slate-400 font-medium">Kamaraj College</p>
                </div>
              </div>

              <div className="flex gap-12 text-right">
                <div className="hidden sm:block">
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">Activity</p>
                  <div className="flex items-center gap-2 justify-end">
                    <Zap className="w-3 h-3 text-[#004aad]" />
                    <span className="font-bold text-slate-700 text-sm uppercase">{team.tasks}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">Total Score</p>
                  <p className="text-lg font-black text-[#004aad]">{team.points.toLocaleString()}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}