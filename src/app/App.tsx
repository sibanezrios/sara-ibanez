import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import salonImage from "../assets/salon.webp";
import lehrerImage from "../assets/lehrer.webp";
import medixImage from "../assets/medix.webp";
import Experience from "./components/Experience";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { useLang } from "./i18n/LangContext";

const projectImages = [
  { id: 1, image: salonImage, href: "https://hairdress-landing-page-kacd.vercel.app", aspectRatio: "aspect-square", marginTop: "mt-0" },
  { id: 4, image: medixImage, href: "https://medix-landing-page.vercel.app", aspectRatio: "aspect-[4/5]", marginTop: "mt-32" },
  { id: 2, image: lehrerImage, href: "https://lehrer-platform.vercel.app", aspectRatio: "aspect-[4/5]", marginTop: "mt-0" },
];

const projectMeta = {
  1: { title: { es: "Hairdress Studio", en: "Hairdress Studio" }, category: { es: "LANDING PAGE — SALÓN", en: "HAIR SALON LANDING PAGE" } },
  4: { title: { es: "Para Médicos",     en: "Para Médicos"     }, category: { es: "LANDING PAGE — MÉDICO", en: "DOCTOR LANDING PAGE" } },
  2: { title: { es: "Plataforma Lehrer",en: "Lehrer Platform"  }, category: { es: "PÁGINA EDUCATIVA",      en: "EDUCATIONAL PAGE" } },
} as const;

export default function App() {
  const { lang, setLang, t } = useLang();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [iframeLoading, setIframeLoading] = useState(false);

  const handleProjectClick = (href: string) => {
    if (href === "#" || href.startsWith("#")) return;
    setIframeLoading(true);
    setPreviewUrl(href);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.color = "#ffffff";
    return () => { document.documentElement.style.scrollBehavior = "auto"; };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">

      {/* Website Preview Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          >
            <div className="relative w-full h-full max-w-[95vw] bg-[#111] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col">
              <div className="flex justify-between items-center px-4 py-3 bg-[#1a1a1a] border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono hidden md:block">{previewUrl}</span>
                </div>
                <div className="flex items-center gap-4">
                  <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Open in new tab">
                    <ExternalLink size={16} />
                  </a>
                  <button onClick={() => setPreviewUrl(null)} className="text-gray-400 hover:text-white transition-colors" title="Close">
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="relative w-full flex-1">
                {iframeLoading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#111] gap-4">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span className="text-[11px] uppercase tracking-widest text-gray-500">{t.work.loading}</span>
                  </div>
                )}
                <iframe
                  src={previewUrl}
                  className="w-full h-full bg-white"
                  title="Website Preview"
                  onLoad={() => setIframeLoading(false)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 text-[10px] md:text-[11px] font-semibold tracking-widest uppercase mix-blend-difference">
        <div className="w-1/3">SARA IBÁÑEZ</div>
        <div className="w-1/3 justify-center gap-8 hidden md:flex">
          <a href="#work"       className="hover:opacity-60 transition-opacity">{t.nav.work}</a>
          <a href="#experience" className="hover:opacity-60 transition-opacity">{t.nav.experience}</a>
          <a href="#pricing"    className="hover:opacity-60 transition-opacity">{t.nav.pricing}</a>
          <a href="#contact"    className="hover:opacity-60 transition-opacity">{t.nav.contact}</a>
        </div>
        <div className="w-1/3 flex items-center justify-end gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-[10px] md:text-[11px] font-semibold tracking-widest hover:opacity-60 transition-opacity"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <span>©2026</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[14vw] leading-none font-bold tracking-tighter text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Sara Ibáñez
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-12 md:bottom-24 text-center max-w-lg px-4"
        >
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed text-gray-400 font-medium">
            {t.hero.tagline}
          </p>
        </motion.div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 md:mb-32"
        >
          {t.work.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projectImages.map((project, index) => {
            const meta = projectMeta[project.id as keyof typeof projectMeta];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`group cursor-pointer ${project.marginTop}`}
                onClick={() => handleProjectClick(project.href)}
              >
                <div className={`relative w-full overflow-hidden bg-[#1a1a1a] ${project.aspectRatio}`}>
                  <img
                    src={project.image}
                    alt={meta.title[lang]}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-6 py-3 border border-white/50 text-white text-[11px] uppercase tracking-widest font-semibold backdrop-blur-sm">
                      {project.href === "#" || project.href.startsWith("#") ? t.work.comingSoon : t.work.preview}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">{meta.title[lang]}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">{meta.category[lang]}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-32">
          <button className="px-8 py-4 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-colors text-[11px] uppercase tracking-widest font-semibold">
            {t.work.seeAll}
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
