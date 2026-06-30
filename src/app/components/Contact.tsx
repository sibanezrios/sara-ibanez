import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useLang } from "../i18n/LangContext";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLang();
  const tc = t.contact;
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
          subject: tc.subject(formData.name),
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

  return (
    <section id="contact" className="py-32 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-[1600px] mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none mb-20 md:mb-32"
        >
          {tc.title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-md mb-12">
                {tc.description}
              </p>

              <div className="space-y-6 text-[10px] uppercase tracking-widest font-semibold text-gray-500">
                <div>
                  <span className="text-white block mb-2">{tc.emailLabel}</span>
                  <a href="mailto:ibanezsara35@gmail.com" className="hover:text-white transition-colors">
                    ibanezsara35@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-white block mb-2">{tc.whatsappLabel}</span>
                  <a href="https://wa.me/573024662900" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    +57 302 466 2900
                  </a>
                </div>
                <div>
                  <span className="text-white block mb-2">{tc.locationLabel}</span>
                  <span>{tc.location}</span>
                </div>
              </div>
            </div>

            <p className="mt-16 text-[10px] uppercase tracking-widest text-gray-700 font-semibold">
              © 2026 SARA IBÁÑEZ
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-16">
                <CheckCircle className="h-12 w-12 text-white" />
                <h4 className="text-2xl font-bold tracking-tighter">{tc.successTitle}</h4>
                <p className="text-gray-400 text-sm max-w-xs">{tc.successDesc}</p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest font-semibold transition-colors mt-2"
                >
                  {tc.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {formState === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-red-900 bg-red-950/40">
                    <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-xs uppercase tracking-widest font-semibold">
                      {tc.errorMsg}
                    </p>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">
                    {tc.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={tc.namePlaceholder}
                    className="bg-transparent border-b border-gray-800 focus:border-white py-3 text-white placeholder-gray-700 text-sm font-light outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">
                    {tc.emailFieldLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={tc.emailPlaceholder}
                    className="bg-transparent border-b border-gray-800 focus:border-white py-3 text-white placeholder-gray-700 text-sm font-light outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">
                    {tc.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={tc.messagePlaceholder}
                    className="bg-transparent border-b border-gray-800 focus:border-white py-3 text-white placeholder-gray-700 text-sm font-light outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-700 hover:bg-white hover:text-black hover:border-white disabled:opacity-40 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300"
                  >
                    {formState === "sending" ? tc.sending : tc.send}
                    {formState !== "sending" && (
                      <Send className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    )}
                  </button>

                  <a
                    href="https://wa.me/573024662900"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-700 hover:bg-[#25D366] hover:text-black hover:border-[#25D366] text-[11px] uppercase tracking-widest font-semibold transition-all duration-300"
                  >
                    WhatsApp
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
