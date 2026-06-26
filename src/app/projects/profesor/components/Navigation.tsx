import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-950/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white tracking-tight">
            Deutsch Lehrer
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                {link.name}
              </a>
            ))}
            <button
              className="px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 text-sm font-semibold transition-all"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
              Contactar
            </button>
          </div>

          <button className="md:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="block text-white/70 hover:text-white transition-colors text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <button
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-semibold"
              onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Contactar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
