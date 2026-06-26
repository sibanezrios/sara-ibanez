import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Consulta de clases de alemán — ${formData.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
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
          <h2 className="text-4xl mb-4 text-gray-900 font-bold tracking-tight">Contacto</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            ¿Listo para comenzar tu viaje con el idioma alemán? Escríbeme y te responderé lo antes posible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h3 className="text-2xl mb-6 text-gray-900 font-semibold">Información de Contacto</h3>
            <div className="space-y-5 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{info.title}</h4>
                      {info.link
                        ? <a href={info.link} className="text-gray-500 hover:text-gray-700 transition-colors text-sm">{info.content}</a>
                        : <span className="text-gray-500 text-sm">{info.content}</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">¿Por qué elegir mis clases?</h4>
              <ul className="space-y-2">
                {[
                  "Profesor nativo con acento estándar",
                  "Más de 10 años de experiencia",
                  "Metodología comunicativa y efectiva",
                  "Material didáctico actualizado",
                  "Primera clase de prueba gratuita",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="text-blue-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Envíame un mensaje</h3>
            <p className="text-gray-500 text-sm mb-7">Completa el formulario y te contactaré en breve</p>

            {formState === "success" ? (
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <h4 className="text-gray-900 font-semibold text-lg">¡Mensaje enviado!</h4>
                <p className="text-gray-500 text-sm">Gracias, me pondré en contacto contigo pronto.</p>
                <button onClick={() => setFormState("idle")}
                  className="text-gray-400 hover:text-gray-600 text-sm underline underline-offset-2 transition-colors">
                  ← Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formState === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-red-200 bg-red-50">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-600 text-sm">Algo salió mal. Inténtalo de nuevo.</p>
                  </div>
                )}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Nombre completo</label>
                  <input type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Email</label>
                  <input type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Mensaje</label>
                  <textarea required rows={5} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame sobre tu nivel actual, objetivos y disponibilidad..."
                    className="px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all resize-none" />
                </div>
                <button type="submit" disabled={formState === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gray-900 hover:bg-gray-700 disabled:opacity-60 text-white font-semibold text-sm transition-all">
                  {formState === "sending" ? "Enviando…" : "Enviar mensaje"}
                  {formState !== "sending" && <Send className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
