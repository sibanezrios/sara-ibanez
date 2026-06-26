import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
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
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className={`text-2xl transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Deutsch Lehrer
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className={`transition-colors hover:opacity-80 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                {link.name}
              </a>
            ))}
            <Button
              className={isScrolled
                ? "bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                : "bg-transparent border border-white/50 text-white hover:border-white hover:bg-white/10 transition-all"}
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
              Contactar
            </Button>
          </div>

          <button className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}
                className={`block transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <Button className={`w-full ${isScrolled
              ? "bg-gray-900 text-white hover:bg-gray-700"
              : "bg-transparent border border-white/50 text-white hover:border-white hover:bg-white/10"}`}
              onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Contactar
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
