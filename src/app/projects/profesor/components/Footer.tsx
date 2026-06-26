export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Deutsch Lehrer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enseñanza profesional del idioma alemán con un enfoque personalizado y orientado a resultados.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Enlaces</h4>
            <ul className="space-y-2">
              {[["Sobre Mí", "#sobre-mi"], ["Servicios", "#servicios"], ["Contacto", "#contacto"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white transition-colors text-sm">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>profesor.aleman@ejemplo.com</li>
              <li>+34 600 123 456</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
          © 2026 Deutsch Lehrer. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
