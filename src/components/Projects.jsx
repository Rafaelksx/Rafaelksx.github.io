import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

const Projects = ({ githubUrl }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Removimos el proyecto "Sistema de Rifas" y agregamos más detalles demostrativos.
  const projects = [
    {
      title: "Insumos App",
      description: "Plataforma moderna para la gestión de insumos, autorizaciones y puntos de cuenta. Desarrollada con las últimas tecnologías web para asegurar un rendimiento óptimo y una experiencia de usuario fluida.",
      longDescription: "Insumos App es una solución integral orientada a optimizar procesos internos. Implementa un sistema completo de roles, autorizaciones en cascada y generación dinámica de puntos de cuenta. El frontend está construido con Next.js y TypeScript, asegurando robustez y escalabilidad, mientras que Tailwind CSS provee una interfaz de usuario limpia y responsiva. Cuenta con tableros interactivos para seguimiento de estado en tiempo real.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      type: "Full Stack • Reciente",
      color: "from-blue-500 to-indigo-500",
      features: [
        "Gestión de autorizaciones de múltiples niveles.",
        "Generación automatizada de reportes y puntos de cuenta.",
        "Dashboard interactivo en tiempo real.",
        "Arquitectura escalable basada en componentes."
      ],
      repo: `${githubUrl}/insumos-app`,
      demo: null
    },
    {
      title: "TigritoApp",
      description: "Plataforma de intermediación de servicios en Venezuela. Incluye gestión de roles, autenticación segura y lógica de verificación de pagos móviles.",
      longDescription: "Una aplicación robusta construida con el stack MERN que conecta proveedores de servicios con clientes locales. La plataforma aborda el desafío particular de la verificación de pagos móviles en Venezuela mediante una integración de validación personalizada. Los usuarios pueden crear perfiles, publicar servicios, calificar experiencias y gestionar pagos en un entorno seguro y encriptado.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      type: "MERN Stack • Full Stack",
      color: "from-blue-400 to-cyan-500",
      features: [
        "Autenticación segura con JWT.",
        "Lógica personalizada para validación de pagos móviles.",
        "Sistema de roles (Cliente, Proveedor, Admin).",
        "Diseño mobile-first optimizado para conexiones lentas."
      ],
      repo: `${githubUrl}/TigritoApp`,
      demo: null
    },
    {
      title: "Offline Translator PWA",
      description: "Implementación de interfaz web para un modelo de traducción de inteligencia artificial. Construida como PWA para asegurar acceso rápido.",
      longDescription: "Esta Progressive Web App provee una interfaz extremadamente rápida y accesible para un motor de traducción por IA. El diseño se enfoca en la usabilidad móvil y el acceso sin conexión, descargando los modelos necesarios en el cliente para permitir traducciones inmediatas sin depender de una conexión a internet activa, lo cual es ideal para entornos con conectividad inestable.",
      tags: ["React", "Vite", "PWA", "AI Integration"],
      type: "Frontend • IA Integration",
      color: "from-emerald-400 to-teal-500",
      features: [
        "Soporte Offline nativo mediante Service Workers.",
        "Procesamiento local de IA en el navegador.",
        "Interfaz minimalista y libre de distracciones.",
        "Instalable en cualquier dispositivo (Desktop/Mobile)."
      ],
      repo: `${githubUrl}/traductor-local`,
      demo: null
    }
  ];

  return (
    <section id="proyectos" className="py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-6">
            Proyectos Destacados 
            <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Haz clic en cada proyecto para explorar en detalle sus características, arquitectura y el problema que resuelve.
          </p>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layoutId={`card-${project.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-slate-900/50 rounded-3xl border border-slate-800 p-1 hover:border-slate-500 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl blur-xl" style={{ backgroundImage: `var(--tw-gradient-stops)` }}></div>
              
              <div className="relative h-full bg-slate-950/80 backdrop-blur-sm rounded-[22px] p-8 flex flex-col">
                <span className={`text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-4 inline-block`}>
                  {project.type}
                </span>
                
                <motion.h3 layoutId={`title-${project.title}`} className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </motion.h3>
                
                <motion.p layoutId={`desc-${project.title}`} className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/50 rounded-md text-[11px] font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700/50 rounded-md text-[11px] font-medium text-slate-400">+{project.tags.length - 3}</span>}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                  <span>Ver detalles</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de Detalles (AnimatePresence) */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Overlay / Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60]"
              />
              
              {/* Modal Content */}
              <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
                <motion.div
                  layoutId={`card-${selectedProject.title}`}
                  className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 pointer-events-auto flex flex-col max-h-[90vh]"
                >
                  {/* Modal Header */}
                  <div className={`h-32 relative bg-gradient-to-br ${selectedProject.color} p-8 flex items-end overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white backdrop-blur-md transition-colors"
                    >
                      <X size={20} />
                    </button>
                    <motion.h3 layoutId={`title-${selectedProject.title}`} className="text-3xl md:text-4xl font-extrabold text-white relative z-10 shadow-black/50 drop-shadow-md">
                      {selectedProject.title}
                    </motion.h3>
                  </div>

                  {/* Modal Body */}
                  <div className="p-8 overflow-y-auto custom-scrollbar">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-semibold text-blue-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                      Acerca del Proyecto
                    </h4>
                    <motion.p layoutId={`desc-${selectedProject.title}`} className="text-slate-300 leading-relaxed mb-8">
                      {selectedProject.longDescription}
                    </motion.p>

                    <h4 className="text-lg font-bold mb-4 text-slate-200">Características Principales</h4>
                    <ul className="space-y-3 mb-10">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Botones de acción */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800/80">
                      {selectedProject.repo && (
                        <a 
                          href={selectedProject.repo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors shadow-lg"
                        >
                          <Github size={20} />
                          Ver Código Fuente
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a 
                          href={selectedProject.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors"
                        >
                          <ExternalLink size={20} />
                          Ver Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
