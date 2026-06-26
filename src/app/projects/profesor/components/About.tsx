import { Card, CardContent } from "../../../components/ui/card";
import { Award, BookOpen, Globe, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    { icon: Award, title: "Certificado", description: "Profesor certificado con más de 10 años de experiencia" },
    { icon: BookOpen, title: "Metodología", description: "Enfoque personalizado adaptado a tus necesidades" },
    { icon: Globe, title: "Nativo", description: "Alemán nativo de Berlín con acento estándar" },
    { icon: Users, title: "Todos los niveles", description: "Desde A1 hasta C2, preparación para certificaciones" }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-gray-900">Sobre Mí</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hola, soy profesor de alemán con pasión por la enseñanza y más de una década de experiencia
              ayudando a estudiantes de todos los niveles a alcanzar sus objetivos lingüísticos.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nací y crecí en Berlín, y me mudé a España hace varios años para compartir mi lengua materna
              y cultura. Cuento con certificaciones pedagógicas y experiencia en preparación para exámenes
              oficiales como TestDaF, Goethe-Zertifikat y telc.
            </p>
            <p className="text-lg text-gray-700">
              Mi metodología se centra en la comunicación práctica, combinando gramática, vocabulario y
              aspectos culturales para un aprendizaje completo y efectivo.
            </p>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758685848147-e1e149bf2603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwZGVza3xlbnwxfHx8fDE3ODI0MTY4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Espacio de trabajo profesional"
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Icon className="h-12 w-12 mb-4 text-blue-600" />
                  <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
