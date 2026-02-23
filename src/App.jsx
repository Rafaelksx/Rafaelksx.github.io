import React from 'react';

const App = () => {
  // Configura aquí tu enlace real de LinkedIn
  const githubUrl = "https://github.com/Rafaelksx";
  const linkedinUrl = "https://www.linkedin.com/in/rafael-rodriguez-0684b2276/?locale=en_US"; // <-- ¡Reemplaza con tu URL!
  
  // URLs de tus repositorios
  const tigritoRepo = `${githubUrl}/TigritoApp`; 
  const traductorRepo = `${githubUrl}/traductor-local`;
  const rifasRepo = `${githubUrl}/sistema-rifas`;

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans scroll-smooth">
      {/* --- NAVBAR --- */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          &lt;Rafael.dev /&gt;
        </h1>
        <div className="space-x-6 text-slate-400 flex items-center hidden md:flex">
          <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
          <a href="#skills" className="hover:text-white transition">Habilidades</a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">GitHub</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center md:text-left md:flex items-center">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
            Desarrollador de <span className="text-blue-500">Software</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl">
            Especializado en el diseño de arquitecturas robustas, modelado avanzado de bases de datos (SQL y NoSQL) 
            y la creación de aplicaciones escalables. Me apasiona resolver problemas complejos integrando 
            herramientas como <strong>Docker</strong> y <strong>Power BI</strong> junto a ecosistemas modernos (Laravel, React, Node) 
            para transformar datos y lógicas de negocio en soluciones eficientes y de alto impacto.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#proyectos" className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition inline-block">Ver Proyectos</a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="border border-slate-700 px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition inline-block">Contactar</a>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN PROYECTOS --- */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
          Proyectos Destacados <div className="h-1 flex-1 bg-slate-800"></div>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card: TigritoApp */}
          <div className="bg-slate-800/50 p-1 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-blue-400 text-sm font-mono mb-2 block">MERN Stack • Full Stack</span>
              <h4 className="text-2xl font-bold mb-3">TigritoApp</h4>
              <p className="text-slate-400 mb-4 flex-1">
                Plataforma de intermediación de servicios en Venezuela. Incluye gestión de roles, 
                autenticación segura y lógica de verificación de pagos móviles.
              </p>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">Node.js</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">MongoDB</span>
              </div>
              <a href={tigritoRepo} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline mt-auto">Ver repositorio →</a>
            </div>
          </div>

          {/* Card: Traductor PWA */}
          <div className="bg-slate-800/50 p-1 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-emerald-400 text-sm font-mono mb-2 block">Frontend • IA Integration</span>
              <h4 className="text-2xl font-bold mb-3">Offline Translator PWA</h4>
              <p className="text-slate-400 mb-4 flex-1">
                Implementación de interfaz web para un modelo de traducción de inteligencia artificial. 
                Construida como PWA para asegurar acceso rápido.
              </p>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">Vite</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">PWA</span>
              </div>
              <a href={traductorRepo} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline mt-auto">Ver repositorio →</a>
            </div>
          </div>

          {/* Card: Sistema de Rifas */}
          <div className="bg-slate-800/50 p-1 border border-slate-700 rounded-2xl hover:border-purple-500/50 transition flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-purple-400 text-sm font-mono mb-2 block">En Desarrollo • Gestión</span>
              <h4 className="text-2xl font-bold mb-3">Sistema de Rifas</h4>
              <p className="text-slate-400 mb-4 flex-1">
                Plataforma de gestión integral para sorteos. Cuenta con control estricto de estados en los boletos y manejo eficiente de la base de datos.
              </p>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">Laravel</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">SQL</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">Tailwind</span>
              </div>
              <a href={rifasRepo} target="_blank" rel="noopener noreferrer" className="text-purple-400 font-semibold hover:underline mt-auto">Ver repositorio →</a>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN HABILIDADES --- */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
          Habilidades Técnicas <div className="h-1 flex-1 bg-slate-800"></div>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Categoría: Frontend */}
          <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> React</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Next.js</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> TypeScript</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Tailwind CSS</li>
            </ul>
          </div>

          {/* Categoría: Backend */}
          <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition">
            <h4 className="text-xl font-semibold mb-4 text-red-400">Backend</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Laravel</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Node.js</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Arquitectura API REST</li>
            </ul>
          </div>

          {/* Categoría: Base de Datos & Data */}
          <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition">
            <h4 className="text-xl font-semibold mb-4 text-emerald-400">Data & BD</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> PostgreSQL / MySQL</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> MongoDB / NoSQL</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Modelado Relacional</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Power BI</li>
            </ul>
          </div>

          {/* Categoría: Herramientas */}
          <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Herramientas</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span> Docker</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span> Git / GitHub</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span> Postman</li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="text-center py-10 border-t border-slate-800 text-slate-500 text-sm flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
        </div>
        <p>© 2026 - Rafael Rodriguez | Desarrollador de Software</p>
      </footer>
    </div>
  );
};

export default App;