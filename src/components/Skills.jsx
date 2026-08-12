import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-400" size={24} />,
      color: "group-hover:border-blue-500/50",
      bgHover: "group-hover:bg-blue-500/5",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: <Server className="text-red-400" size={24} />,
      color: "group-hover:border-red-500/50",
      bgHover: "group-hover:bg-red-500/5",
      skills: ["Node.js", "Express", "Laravel", "PHP", "Arquitectura API REST"]
    },
    {
      title: "Data & BD",
      icon: <Database className="text-emerald-400" size={24} />,
      color: "group-hover:border-emerald-500/50",
      bgHover: "group-hover:bg-emerald-500/5",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Modelado Relacional", "Power BI"]
    },
    {
      title: "Herramientas",
      icon: <Wrench className="text-purple-400" size={24} />,
      color: "group-hover:border-purple-500/50",
      bgHover: "group-hover:bg-purple-500/5",
      skills: ["Docker", "Git / GitHub", "Postman", "Linux", "Vite"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-900/20 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            El conjunto de herramientas y tecnologías que utilizo para construir soluciones digitales de principio a fin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl transition-all duration-300 ${category.color} ${category.bgHover}`}
            >
              <div className="bg-slate-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-slate-700/50 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-slate-300 group-hover:text-slate-200 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-slate-400 transition-colors"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
