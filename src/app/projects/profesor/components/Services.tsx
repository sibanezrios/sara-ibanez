import { CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Clases Individuales",
      description: "Sesiones personalizadas adaptadas a tu ritmo y objetivos",
      price: "30€/hora",
      features: ["Atención 100% personalizada", "Horarios flexibles", "Material didáctico incluido", "Seguimiento continuo"],
      highlighted: true
    },
    {
      title: "Clases Grupales",
      description: "Grupos reducidos de máximo 4 personas para interacción óptima",
      price: "15€/hora",
      features: ["Grupos de nivel homogéneo", "Práctica conversacional", "Ambiente dinámico", "2 clases semanales"],
      highlighted: false
    },
    {
      title: "Preparación de Exámenes",
      description: "Certificaciones oficiales: Goethe, TestDaF, telc",
      price: "35€/hora",
      features: ["Material oficial de examen", "Simulacros de prueba", "Técnicas específicas", "Enfoque en resultados"],
      highlighted: false
    },
    {
      title: "Alemán para Negocios",
      description: "Lenguaje profesional para el ámbito empresarial",
      price: "40€/hora",
      features: ["Vocabulario especializado", "Comunicación corporativa", "Presentaciones y reuniones", "Redacción profesional"],
      highlighted: false
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900 font-bold tracking-tight">Servicios</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Ofrezco diferentes modalidades de clases para adaptarme a tus necesidades y estilo de aprendizaje
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`relative rounded-xl p-8 border transition-all hover:shadow-md ${
              service.highlighted
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-900 border-gray-100 shadow-sm'
            }`}>
              {service.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Más Popular
                  </span>
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${service.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`text-sm mb-4 ${service.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                {service.description}
              </p>
              <div className="mb-6">
                <span className={`text-3xl font-bold ${service.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {service.price}
                </span>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${service.highlighted ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={`text-sm ${service.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">* Primera clase de prueba gratuita de 30 minutos para conocernos y evaluar tu nivel</p>
        </div>
      </div>
    </section>
  );
}
