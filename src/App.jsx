import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  // Configura aquí tu enlace real de LinkedIn y Github
  const githubUrl = "https://github.com/Rafaelksx";
  const linkedinUrl = "https://www.linkedin.com/in/rafael-rodriguez-0684b2276/?locale=en_US"; 
  
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
      
      <main>
        <Hero githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
        <Projects githubUrl={githubUrl} />
        <Skills />
      </main>

      <Footer githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
    </div>
  );
};

export default App;