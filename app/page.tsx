import React from 'react';
import { ArrowRight, Code, Zap, Globe, Layout, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* NAV SIMPLE */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">PULSO BOREAL</div>
          <Link href="https://wa.me/5491100000000" className="text-sm font-medium hover:text-cyan-400 transition-colors">
            Hablemos
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center min-h-[80vh]">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          Estrategia digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            sin fricción.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Transformamos ideas complejas en productos digitales de alto rendimiento. 
          Desarrollo, diseño y estrategia para negocios que no pueden detenerse.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all flex items-center gap-2 group">
            Iniciar Proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all">
            Ver Portafolio
          </button>
        </div>
      </section>

      {/* SERVICIOS RAPIDOS */}
      <section className="py-20 px-6 border-t border-white/10 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Desarrollo Web", desc: "Sitios ultrarrápidos en Next.js optimizados para conversión." },
            { icon: Layout, title: "Diseño UI/UX", desc: "Interfaces limpias que guían al usuario hacia la compra." },
            { icon: Zap, title: "Estrategia Digital", desc: "Arquitectura de negocio pensada para escalar." }
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-colors bg-white/5">
              <item.icon className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2026 Pulso Boreal. Buenos Aires, Argentina.</p>
      </footer>
    </div>
  );
}