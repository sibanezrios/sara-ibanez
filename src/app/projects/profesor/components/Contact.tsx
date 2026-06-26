import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Consulta de ${formData.name}`;
    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`;
    window.location.href = `mailto:profesor.aleman@ejemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, title: "Email", content: "profesor.aleman@ejemplo.com", link: "mailto:profesor.aleman@ejemplo.com" },
    { icon: Phone, title: "Teléfono", content: "+34 600 123 456", link: "tel:+34600123456" },
    { icon: MapPin, title: "Ubicación", content: "Madrid, España", link: null },
    { icon: Clock, title: "Horario", content: "Lun - Vie: 9:00 - 21:00", link: null }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Contacto</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para comenzar tu viaje con el idioma alemán? Escríbeme y te responderé lo antes posible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900">Información de Contacto</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">{info.title}</h4>
                      {info.link
                        ? <a href={info.link} className="text-blue-600 hover:underline">{info.content}</a>
                        : <span className="text-gray-700">{info.content}</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-gray-900">¿Por qué elegir mis clases?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Profesor nativo con acento estándar</li>
                  <li>✓ Más de 10 años de experiencia</li>
                  <li>✓ Metodología comunicativa y efectiva</li>
                  <li>✓ Material didáctico actualizado</li>
                  <li>✓ Primera clase de prueba gratuita</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Envíame un mensaje</CardTitle>
              <CardDescription>Completa el formulario y te contactaré en breve</CardDescription>
            </CardHeader>
            <CardContent>
              {sent ? (
                <p className="text-green-600 font-medium py-4">¡Abriendo tu cliente de correo! Nos pondremos en contacto pronto.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntame sobre tu nivel actual, objetivos y disponibilidad..."
                      rows={6} required className="mt-1.5" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar mensaje
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
