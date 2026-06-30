import { Button } from "../../../components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2c2c2e]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#3a3a3c_0%,#1c1c1e_70%)]" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/5" />

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8 sm:px-6">
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: "inherit" }}>
          Aprende Alemán
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Clases particulares con un profesor certificado C2
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 shadow-md"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="mr-2 h-5 w-5" />
            Contactar ahora
          </Button>
          <Button size="lg"
            className="bg-transparent border border-white/40 text-white/80 hover:border-white hover:text-white hover:bg-white/10 transition-all duration-200"
            onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}>
            Conocer más
          </Button>
          <a href="https://lehrer-platform.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button size="lg"
              className="bg-transparent border border-white/40 text-white/80 hover:border-white hover:text-white hover:bg-white/10 transition-all duration-200">
              <ExternalLink className="mr-2 h-5 w-5" />
              Ver sitio web
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
