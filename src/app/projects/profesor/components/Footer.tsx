import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1587330979470-3595ac045ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW55JTIwYmVybGluJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MjQxNjg2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Berlín"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4">Profesor de Alemán</h3>
            <p className="text-gray-400">
              Enseñanza profesional del idioma alemán con un enfoque personalizado y orientado a resultados.
            </p>
          </div>
          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[["Sobre Mí", "#sobre-mi"], ["Servicios", "#servicios"], ["Contacto", "#contacto"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: profesor.aleman@ejemplo.com</li>
              <li>Tel: +34 600 123 456</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Profesor de Alemán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
