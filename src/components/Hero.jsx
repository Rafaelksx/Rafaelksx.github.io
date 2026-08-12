import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, Mail } from 'lucide-react';

const Hero = ({ linkedinUrl, githubUrl }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Disponible para nuevas oportunidades
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Desarrollador <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                Full Stack
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Especializado en diseñar arquitecturas robustas y crear aplicaciones web escalables. 
              Transformo ideas complejas en experiencias digitales de alto impacto utilizando ecosistemas modernos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#proyectos" 
                className="group flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Explorar Trabajo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-slate-800/50 text-white border border-slate-700 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-800 hover:border-slate-600 transition-all backdrop-blur-sm"
              >
                <Mail size={18} />
                Contactar
              </a>
            </div>
          </motion.div>

          {/* Abstract Graphic / Code Window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-2xl transform rotate-3 scale-105 blur-lg"></div>
            <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl font-mono text-sm">
              <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-2 text-slate-300">
                <p><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="pl-4">name: <span className="text-emerald-400">'Rafael Rodriguez'</span>,</p>
                <p className="pl-4">role: <span className="text-emerald-400">'Software Engineer'</span>,</p>
                <p className="pl-4">skills: [<span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'Node.js'</span>, <span className="text-emerald-400">'Laravel'</span>],</p>
                <p className="pl-4">passionate_about: <span className="text-emerald-400">'Building scalable solutions'</span></p>
                <p>{'}'};</p>
                <br />
                <p><span className="text-pink-400">developer</span>.<span className="text-yellow-200">startCoding</span>();</p>
                <p className="animate-pulse text-slate-500 mt-2">_</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
