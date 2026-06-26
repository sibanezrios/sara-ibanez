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
      isScrolled
        ? 'bg-white shadow-sm border-b border-gray-100 py-4'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Deutsch Lehrer
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className={`transition-colors text-sm font-medium ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white'
                }`}>
                {link.name}
              </a>
            ))}
            <button
              className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 text-sm font-semibold transition-all"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
              Contactar
            </button>
          </div>

          <button
            className={`md:hidden p-1 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 space-y-4 bg-white rounded-b-lg px-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className="block text-gray-700 hover:text-gray-900 transition-colors text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <button
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white font-semibold"
              onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Contactar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
