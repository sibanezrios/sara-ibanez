import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import saraPhoto from "../assets/sara.webp";
import salonImage from "../assets/salon.webp";
import lehrerImage from "../assets/lehrer.webp";
import medixImage from "../assets/medix.webp";

const projects = [
  {
    id: 1,
    title: "Hairdress Studio",
    category: "HAIR SALON LANDING PAGE",
    image: salonImage,
    href: "https://hairdress-landing-page-kacd.vercel.app",
    aspectRatio: "aspect-square",
    marginTop: "mt-0",
  },
  {
    id: 2,
    title: "Lehrer Platform",
    category: "EDUCATIONAL PAGE",
    image: lehrerImage,
    href: "https://lehrer-platform.vercel.app",
    aspectRatio: "aspect-[4/5]",
    marginTop: "mt-32",
  },
  {
    id: 3,
    title: "Clean & Shiny",
    category: "SERVICE AUTOMATION",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200",
    href: "#",
    aspectRatio: "aspect-video",
    marginTop: "mt-16",
  },
  {
    id: 4,
    title: "Medix",
    category: "DOCTOR LANDING PAGE",
    image: medixImage,
    href: "https://medix-landing-page.vercel.app",
    aspectRatio: "aspect-[4/5]",
    marginTop: "mt-0",
  },
  {
    id: 5,
    title: "AI CRM System",
    category: "WHATSAPP AUTOMATION",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    href: "#",
    aspectRatio: "aspect-square",
    marginTop: "mt-[-64px]",
  },
];

export default function App() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [iframeLoading, setIframeLoading] = useState(false);

  const handleProjectClick = (href: string) => {
    if (href === "#" || href.startsWith("#")) return;
    setIframeLoading(true);
    setPreviewUrl(href);
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#0a0a0a"; 
    document.body.style.color = "#ffffff";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
          >
            <div className="relative w-full h-full max-w-6xl bg-[#111] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col">
              <div className="flex justify-between items-center px-4 py-3 bg-[#1a1a1a] border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
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
                    <span className="text-[11px] uppercase tracking-widest text-gray-500">Loading preview...</span>
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
        <div className="w-1/3 flex justify-center gap-8 hidden md:flex">
          <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
        <div className="w-1/3 text-right">©2026</div>
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
            SOFTWARE DEVELOPER & AI AUTOMATION ENGINEER BASED IN COLOMBIA FOCUSING ON DIGITAL TRANSFORMATION IN ELEGANT FORMS.
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
          Selected work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group cursor-pointer ${project.marginTop} ${index === 2 ? 'md:col-span-2' : ''}`}
              onClick={() => handleProjectClick(project.href)}
            >
              <div className={`relative w-full overflow-hidden bg-[#1a1a1a] ${project.aspectRatio}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-6 py-3 border border-white/50 text-white text-[11px] uppercase tracking-widest font-semibold backdrop-blur-sm">
                    {project.href === "#" || project.href.startsWith("#") ? "Coming Soon" : "Preview Website"}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-32">
          <button className="px-8 py-4 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-colors text-[11px] uppercase tracking-widest font-semibold">
            SEE THEM ALL
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              Hello there<br />I'm Sara
            </h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md font-light">
              SPECIALIZING IN SOFTWARE AND AUTOMATION, I TRY TO BRING A DISTINCTIVE, ELEGANT FLAIR TO MY WORK. BLENDING MY TECHNICAL BACKGROUND WITH A KEEN EYE FOR CLEAN DESIGN. MY CREATIVE VISION SPANS VARIOUS MEDIUMS, CRAFTING COMPELLING DIGITAL EXPERIENCES THAT RESONATE WITH DIVERSE AUDIENCES AND LEAVE A LASTING IMPRESSION.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center md:justify-end"
          >
            <div className="w-full max-w-xs md:max-w-sm aspect-[4/5] bg-[#1a1a1a] overflow-hidden">
              <img
                src={saraPhoto}
                alt="Sara Ibáñez"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 border-t border-gray-900">
        <div className="flex-1 flex items-center justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none hover:text-gray-300 transition-colors cursor-pointer"
          >
            Let's talk
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] md:text-[11px] uppercase tracking-widest font-semibold text-gray-500">
          <div>
            <h4 className="text-white mb-4">SERVICES</h4>
            <ul className="space-y-2 flex flex-col">
              <a href="#" className="hover:text-white transition-colors">SOFTWARE DEV</a>
              <a href="#" className="hover:text-white transition-colors">AI AGENTS</a>
              <a href="#" className="hover:text-white transition-colors">AUTOMATION</a>
              <a href="#" className="hover:text-white transition-colors">CONSULTING</a>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4">SOCIAL</h4>
            <ul className="space-y-2 flex flex-col">
              <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
              <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
              <a href="#" className="hover:text-white transition-colors">TWITTER</a>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2 md:text-right flex flex-col justify-end">
            <p>BOGOTÁ, COLOMBIA</p>
            <p className="mt-2 text-white">© 2026 SARA IBÁÑEZ</p>
          </div>
        </div>
      </section>
    </div>
  );
}
