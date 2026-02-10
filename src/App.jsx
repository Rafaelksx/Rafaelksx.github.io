import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* --- NAVBAR --- */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          &lt;Rafael.dev /&gt;
        </h1>
        <div className="space-x-6 text-slate-400">
          <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
          <a href="#skills" className="hover:text-white transition">Habilidades</a>
          <a href="https://github.com/TU_USUARIO" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">GitHub</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center md:text-left md:flex items-center">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
            Ingeniero en <span className="text-blue-500">Informática</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl">
            Especializado en el desarrollo de soluciones Full Stack con 
            <span className="text-white font-semibold"> MERN, Laravel y Angular</span>. 
            Enfocado en crear sistemas escalables y optimización de procesos desde Venezuela para el mundo.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition">Ver Proyectos</button>
            <button className="border border-slate-700 px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition">Contactar</button>
          </div>
        </div>
      </header>

      {/* --- SECCIÓN PROYECTOS --- */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
          Proyectos Destacados <div className="h-1 flex-1 bg-slate-800"></div>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card: TigritoApp */}
          <div className="bg-slate-800/50 p-1 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition">
            <div className="p-6">
              <span className="text-blue-400 text-sm font-mono mb-2 block">MERN Stack • Full Stack</span>
              <h4 className="text-2xl font-bold mb-3">TigritoApp</h4>
              <p className="text-slate-400 mb-4">
                Plataforma de intermediación de servicios en Venezuela. Incluye gestión de roles, 
                autenticación segura y lógica de verificación de pagos móviles.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">React</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">Node.js</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">MongoDB</span>
              </div>
              <a href="#" className="text-blue-400 font-semibold hover:underline">Ver repositorio →</a>
            </div>
          </div>

          {/* Card: Traductor PWA */}
          <div className="bg-slate-800/50 p-1 border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition">
            <div className="p-6">
              <span className="text-emerald-400 text-sm font-mono mb-2 block">Python • FastAPI • React</span>
              <h4 className="text-2xl font-bold mb-3">Offline Translator PWA</h4>
              <p className="text-slate-400 mb-4">
                Aplicación de traducción personal con capacidades offline. Construida como PWA 
                para asegurar acceso rápido y bajo consumo de datos.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">FastAPI</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">Vite</span>
                <span className="bg-slate-900 px-3 py-1 rounded-full text-xs">PWA</span>
              </div>
              <a href="#" className="text-emerald-400 font-semibold hover:underline">Ver repositorio →</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="text-center py-10 border-t border-slate-800 text-slate-500 text-sm">
        <p>© 2026 - Rafael | Ingeniería en Informática</p>
      </footer>
    </div>
  );
};

export default App;