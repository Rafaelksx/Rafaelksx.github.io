import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

const Projects = ({ githubUrl }) => {
  const projects = [
    {
      title: "Insumos App",
      description: "Plataforma moderna para la gestión de insumos, autorizaciones y puntos de cuenta. Desarrollada con las últimas tecnologías web para asegurar un rendimiento óptimo y una experiencia de usuario fluida.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      type: "Full Stack • Reciente",
      color: "from-blue-500 to-indigo-500",
      repo: `${githubUrl}/insumos-app`, // Placeholder based on general structure
      demo: null
    },
    {
      title: "TigritoApp",
      description: "Plataforma de intermediación de servicios en Venezuela. Incluye gestión de roles, autenticación segura y lógica de verificación de pagos móviles.",
      tags: ["React", "Node.js", "MongoDB", "MERN"],
      type: "MERN Stack • Full Stack",
      color: "from-blue-400 to-cyan-500",
      repo: `${githubUrl}/TigritoApp`,
      demo: null
    },
    {
      title: "Offline Translator PWA",
      description: "Implementación de interfaz web para un modelo de traducción de inteligencia artificial. Construida como PWA para asegurar acceso rápido.",
      tags: ["React", "Vite", "PWA"],
      type: "Frontend • IA Integration",
      color: "from-emerald-400 to-teal-500",
      repo: `${githubUrl}/traductor-local`,
      demo: null
    },
    {
      title: "Sistema de Rifas",
      description: "Plataforma de gestión integral para sorteos. Cuenta con control estricto de estados en los boletos y manejo eficiente de la base de datos.",
      tags: ["Laravel", "SQL", "Tailwind"],
      type: "En Desarrollo • Gestión",
      color: "from-purple-400 to-pink-500",
      repo: `${githubUrl}/sistema-rifas`,
      demo: null
    }
  ];

  return (
    <section id="proyectos" className="py-24 relative">
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
            Una selección de mis trabajos más recientes y relevantes, enfocados en resolver problemas 
            reales mediante código limpio y arquitecturas escalables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/50 rounded-3xl border border-slate-800 p-1 hover:border-slate-600 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl blur-xl" style={{ backgroundImage: `var(--tw-gradient-stops)` }}></div>
              
              <div className="relative h-full bg-slate-950/50 backdrop-blur-sm rounded-[22px] p-8 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.type}
                  </span>
                  <div className="flex gap-3 text-slate-400">
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
