import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
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
          <h2 className="text-4xl mb-4 text-gray-900">Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco diferentes modalidades de clases para adaptarme a tus necesidades y estilo de aprendizaje
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative ${service.highlighted ? 'border-blue-500 border-2 shadow-xl' : 'shadow-md'}`}>
              {service.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1 text-sm">Más Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl text-gray-900">{service.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">* Primera clase de prueba gratuita de 30 minutos para conocernos y evaluar tu nivel</p>
        </div>
      </div>
    </section>
  );
}
