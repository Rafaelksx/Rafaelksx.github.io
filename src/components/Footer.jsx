import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

const Footer = ({ githubUrl, linkedinUrl }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              &lt;Rafael.dev /&gt;
            </h3>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Construyendo experiencias digitales escalables, accesibles y con un diseño impecable.
            </p>
          </div>
          
          <div className="flex md:justify-end items-center gap-4">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-600 transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={linkedinUrl} // or a mailto link
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Rafael Rodriguez. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={14} className="text-red-500" /> usando React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
