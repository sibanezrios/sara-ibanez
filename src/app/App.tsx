import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Bot,
  Code2,
  BarChart3,
  Zap,
  Check,
  MessageCircle,
  ChevronRight,
  Globe,
  Cpu,
  TrendingUp,
  Layers,
  Clock,
  DollarSign,
  Eye,
  Search,
  PenTool,
  Rocket,
  RefreshCw,
  Phone,
  Languages,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Monitor,
  Smartphone,
  Database,
} from "lucide-react";
import saraPhoto from "../assets/sara.png";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

const WHATSAPP_NUMBER = "573024662900";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_DISPLAY = "+57 302 466 2900";

// ─── Translations ────────────────────────────────────────────────────────────
type Lang = "en" | "es";

const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      process: "Process",
      portfolio: "Portfolio",
      contact: "Contact",
      whatsapp: "WhatsApp",
      cta: "Book a Consultation",
    },
    langModal: {
      title: "Choose Language",
      subtitle: "Select your preferred language",
      en: "English",
      es: "Español",
    },
    hero: {
      badge: "Software · AI · Automation · Consulting",
      headline1: "Stop Losing Customers",
      headline2: "Because of Outdated Processes.",
      sub: "I help businesses increase sales, automate operations, and improve customer experiences through custom software, artificial intelligence, automation, and scalable digital solutions.",
      cta1: "Book a Free Consultation",
      cta2: "Chat on WhatsApp",
      stat1v: "100%",
      stat1l: "Custom Solutions",
      stat2v: "AI-First",
      stat2l: "Approach",
      stat3v: "ROI",
      stat3l: "Focused Delivery",
    },
    about: {
      label: "About Sara",
      title1: "Technology That Drives",
      title2: "Business Growth",
      body: "My name is Sara Ibáñez, a Software Developer and AI Automation Engineer. I specialize in designing scalable software architectures, business automation systems, AI-powered workflows, and digital products that solve real business problems.",
      skills: [
        "Custom Software Architecture",
        "AI & Automation Systems",
        "Business Process Optimization",
        "Scalable Digital Products",
      ],
      caseLabel: "Tech Lead — Digital Transformation",
      caseLive: "Live",
      caseParagraphs: [
        "At Clean & Shiny, I led the digital transformation of one of the company's most critical processes: service assignment.",
        "Previously, every service had to be assigned manually. An operator had to contact cleaning professionals one by one to check their availability — causing operational delays and limiting the company's capacity to grow.",
        "I designed the business logic and technology architecture to transform this process into a model similar to platforms like Uber. The new solution automatically assigns services based on availability, location, and the company's operational rules.",
        "As a result, today over 90% of services are assigned automatically — significantly reducing manual work, speeding up response times, and improving the experience for both clients and professionals.",
        "This transformation enabled the company to manage a much higher volume of operations efficiently, scalably, and reliably — laying the technological foundation for its growth.",
      ],
      metric1l: "Services automated",
      metric1v: "90%+",
      metric2l: "Scalability",
      metric2v: "Platform-grade",
      metric3l: "Manual work",
      metric3v: "Eliminated",
    },
    services: {
      label: "What I Do",
      title1: "End-to-End Technology",
      title2: "Solutions",
      sub: "From concept to deployment — I deliver the full spectrum of digital capabilities your business needs to grow.",
      items: [
        {
          title: "Custom Software Development",
          description:
            "Scalable, enterprise-grade software built around your specific business logic and growth requirements.",
          items: ["Business platforms", "Internal systems", "Web applications", "Mobile applications"],
        },
        {
          title: "Artificial Intelligence Solutions",
          description:
            "Intelligent automation that learns from your data and continuously improves your operations.",
          items: ["AI Agents", "Customer Support Automation", "Intelligent Workflows", "Business Process Optimization"],
        },
        {
          title: "CRM & Sales Automation",
          description:
            "Turn your sales pipeline into a revenue engine with automation, tracking, and smart follow-ups.",
          items: ["Lead Management", "Customer Tracking", "Automated Follow-Ups", "WhatsApp Integration", "Email Automation"],
        },
        {
          title: "Digital Transformation Consulting",
          description:
            "Strategic technology roadmaps that align your digital investments with measurable business outcomes.",
          items: ["Process Analysis", "Workflow Optimization", "Technology Strategy", "Automation Roadmaps"],
        },
      ],
    },
    benefits: {
      label: "Business Impact",
      title1: "What Your Business",
      title2: "Gains",
      sub: "Measurable results that show up on your bottom line — not just on slides.",
      items: [
        { text: "Save hundreds of hours through automation", metric: "Hours saved" },
        { text: "Improve customer response times dramatically", metric: "Faster response" },
        { text: "Increase conversion rates with intelligent funnels", metric: "Higher revenue" },
        { text: "Reduce operational costs and eliminate waste", metric: "Cost reduction" },
        { text: "Scale without increasing overhead", metric: "Smart growth" },
        { text: "Gain real-time visibility into your business", metric: "Data clarity" },
      ],
    },
    process: {
      label: "How We Work",
      title1: "A Proven",
      title2: "Delivery Process",
      sub: "Four clear stages that take you from problem to production-ready solution.",
      step: "Step",
      steps: [
        {
          title: "Business Discovery",
          desc: "We analyze your current processes, pain points, and goals to build a precise picture of where technology can deliver the highest return.",
        },
        {
          title: "Solution Design",
          desc: "I design a tailored architecture and roadmap — selecting the right technologies, automations, and integrations for your specific context.",
        },
        {
          title: "Development & Implementation",
          desc: "Agile development cycles deliver working software fast, with continuous feedback loops to ensure we build what your business actually needs.",
        },
        {
          title: "Optimization & Growth",
          desc: "After launch, we monitor performance, refine automations, and scale the systems as your business grows — keeping technology as your advantage.",
        },
      ],
    },
    testimonials: {
      label: "Client Results",
      title1: "What Clients",
      title2: "Say",
      sub: "Real results from businesses that invested in the right technology.",
      disclaimer:
        "* Client testimonials are representative of the type of results delivered. Specific details may be generalized for confidentiality.",
      items: [
        {
          name: "Carlos M.",
          role: "CEO, Service Company",
          body: "Sara transformed our entire operations with a custom platform. We went from managing everything manually to having real-time visibility and automated workflows. The impact on our team efficiency was immediate.",
        },
        {
          name: "Valentina R.",
          role: "Founder, E-commerce Brand",
          body: "The AI-powered CRM and WhatsApp automation she built for us tripled our response rate and significantly improved customer satisfaction. We now close deals faster than ever before.",
        },
        {
          name: "Andrés P.",
          role: "Director, Healthcare Clinic",
          body: "We needed a custom scheduling and patient management system. Sara delivered a solution that reduced our administrative workload by over 60%. Exceptional technical skills and communication throughout.",
        },
      ],
    },
    contact: {
      label: "Let's Talk",
      title1: "Let's Build the Technology",
      title2: "Your Business Needs",
      sub: "Whether you need a website, CRM, automation system, AI solution, or custom software, let's discuss how technology can help your business grow.",
      cta1: "Book a Free Consultation",
      cta2: "Start a Conversation",
      tags: [
        "Custom Software",
        "AI Agents",
        "CRM Systems",
        "WhatsApp Automation",
        "Web Apps",
        "Mobile Apps",
        "Process Automation",
        "Digital Transformation",
      ],
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company (optional)",
        message: "Tell me about your project",
        submit: "Send Message",
        sending: "Sending…",
        successTitle: "Message sent!",
        successBody: "Thank you, I'll get back to you within 24 hours.",
        errorTitle: "Something went wrong",
        errorBody: "Please try again or reach me on WhatsApp.",
        orWhatsapp: "Or reach me directly on WhatsApp",
      },
    },
    portfolio: {
      label: "Portfolio",
      title1: "Real Projects,",
      title2: "Real Impact",
      sub: "A selection of digital products and platforms built from the ground up.",
      viewProject: "View live project →",
      items: [
        {
          tag: "Platform · Automation",
          title: "Clean & Shiny — Operations Platform",
          desc: "Full-stack platform that automated 90%+ of service assignments, replacing a fully manual process. Built with React, Node.js, and a real-time matching engine.",
          stack: ["React", "Node.js", "PostgreSQL", "WebSockets"],
          icon: "monitor",
          metrics: ["90% automation", "Real-time", "Uber-style logic"],
          link: null,
        },
        {
          tag: "AI · Venture Capital",
          title: "Dealflow Radar",
          desc: "Automated deal sourcing tool for a VC fund: a daily Python pipeline that scans pre-seed startups, filters by investment thesis, and scores each one with Claude AI. Filterable Next.js dashboard with on-demand company analysis via Gemini. 36 thesis-matched deals surfaced out of 103 scanned.",
          stack: ["Next.js", "Python", "Claude AI", "Gemini", "GitHub Actions"],
          icon: "bot",
          metrics: ["36/103 deals matched", "AI scoring with Claude", "Daily automated pipeline"],
          link: "https://dealflow-radar-blond.vercel.app/",
        },
        {
          tag: "Ejemplo de Landing Page",
          title: "Landing Page",
          desc: "Full landing page for a certified German teacher: hero, about, 4 service tiers with pricing, and a contact form. Built with React, Vite, and Tailwind.",
          stack: ["React", "Vite", "Tailwind", "shadcn/ui"],
          icon: "monitor",
          metrics: ["4 service tiers", "Contact form", "Responsive"],
          link: "/portfolio/profesor",
        },
      ],
    },
    footer: {
      tagline: "Software Developer | AI Automation Engineer | Technology Consultant",
      rights: "All rights reserved. Built with precision.",
    },
  },
  es: {
    nav: {
      about: "Acerca de",
      services: "Servicios",
      process: "Proceso",
      portfolio: "Portafolio",
      contact: "Contacto",
      whatsapp: "WhatsApp",
      cta: "Agendar Consulta",
    },
    langModal: {
      title: "Seleccionar Idioma",
      subtitle: "Elige tu idioma preferido",
      en: "English",
      es: "Español",
    },
    hero: {
      badge: "Software · IA · Automatización · Consultoría",
      headline1: "Deja de Perder Clientes",
      headline2: "por Procesos Desactualizados.",
      sub: "Ayudo a empresas a aumentar sus ventas, automatizar operaciones y mejorar la experiencia del cliente a través de software personalizado, inteligencia artificial, automatización y soluciones digitales escalables.",
      cta1: "Agendar Consulta Gratuita",
      cta2: "Chatear por WhatsApp",
      stat1v: "100%",
      stat1l: "Soluciones a Medida",
      stat2v: "IA Primero",
      stat2l: "Enfoque Estratégico",
      stat3v: "ROI",
      stat3l: "Entrega Orientada",
    },
    about: {
      label: "Acerca de Sara",
      title1: "Tecnología que Impulsa el",
      title2: "Crecimiento Empresarial",
      body: "Soy Sara Ibáñez, Desarrolladora de Software e Ingeniera de Automatización con IA. Me especializo en diseñar arquitecturas de software escalables, sistemas de automatización empresarial, flujos de trabajo potenciados por IA y productos digitales que resuelven problemas reales de negocio.",
      skills: [
        "Arquitectura de Software a Medida",
        "Sistemas de IA y Automatización",
        "Optimización de Procesos de Negocio",
        "Productos Digitales Escalables",
      ],
      caseLabel: "Tech Lead — Transformación Digital",
      caseLive: "Activo",
      caseParagraphs: [
        "En Clean & Shiny lideré la transformación digital de uno de los procesos más importantes de la empresa: la asignación de servicios.",
        "Anteriormente, cada servicio debía asignarse de forma manual. Un operador tenía que contactar a los profesionales de limpieza uno por uno para verificar su disponibilidad, lo que generaba demoras operativas y limitaba la capacidad de crecimiento del negocio.",
        "Diseñé la lógica de negocio y la arquitectura tecnológica para transformar este proceso en un modelo similar al de plataformas como Uber. La nueva solución permite asignar servicios automáticamente según disponibilidad, ubicación y reglas operativas definidas por la empresa.",
        "Como resultado, hoy más del 90% de los servicios se asignan automáticamente, reduciendo significativamente el trabajo manual, acelerando los tiempos de respuesta y mejorando la experiencia tanto de los clientes como de los profesionales.",
        "Esta transformación permitió a la empresa gestionar un mayor volumen de operaciones de forma eficiente, escalable y confiable, sentando las bases tecnológicas para su crecimiento.",
      ],
      metric1l: "Servicios automáticos",
      metric1v: "90%+",
      metric2l: "Escalabilidad",
      metric2v: "Nivel plataforma",
      metric3l: "Trabajo manual",
      metric3v: "Eliminado",
    },
    services: {
      label: "Lo Que Hago",
      title1: "Soluciones Tecnológicas",
      title2: "Integrales",
      sub: "Del concepto al despliegue — ofrezco el espectro completo de capacidades digitales que tu empresa necesita para crecer.",
      items: [
        {
          title: "Desarrollo de Software a Medida",
          description:
            "Software empresarial escalable construido alrededor de tu lógica de negocio específica y tus requisitos de crecimiento.",
          items: ["Plataformas empresariales", "Sistemas internos", "Aplicaciones web", "Aplicaciones móviles"],
        },
        {
          title: "Soluciones de Inteligencia Artificial",
          description:
            "Automatización inteligente que aprende de tus datos y mejora continuamente tus operaciones.",
          items: ["Agentes de IA", "Automatización de Soporte al Cliente", "Flujos de Trabajo Inteligentes", "Optimización de Procesos"],
        },
        {
          title: "CRM y Automatización de Ventas",
          description:
            "Convierte tu pipeline de ventas en un motor de ingresos con automatización, seguimiento y recordatorios inteligentes.",
          items: ["Gestión de Leads", "Seguimiento de Clientes", "Seguimientos Automáticos", "Integración con WhatsApp", "Automatización de Email"],
        },
        {
          title: "Consultoría en Transformación Digital",
          description:
            "Hojas de ruta tecnológicas estratégicas que alinean tus inversiones digitales con resultados empresariales medibles.",
          items: ["Análisis de Procesos", "Optimización de Flujos", "Estrategia Tecnológica", "Hojas de Ruta de Automatización"],
        },
      ],
    },
    benefits: {
      label: "Impacto Empresarial",
      title1: "Lo Que Gana",
      title2: "Tu Empresa",
      sub: "Resultados medibles que se reflejan en tu rentabilidad — no solo en presentaciones.",
      items: [
        { text: "Ahorra cientos de horas mediante automatización", metric: "Horas ahorradas" },
        { text: "Mejora drásticamente los tiempos de respuesta al cliente", metric: "Respuesta más rápida" },
        { text: "Aumenta las tasas de conversión con embudos inteligentes", metric: "Más ingresos" },
        { text: "Reduce los costos operativos y elimina el desperdicio", metric: "Reducción de costos" },
        { text: "Escala sin incrementar la carga operativa", metric: "Crecimiento inteligente" },
        { text: "Obtén visibilidad en tiempo real de tu negocio", metric: "Claridad de datos" },
      ],
    },
    process: {
      label: "Cómo Trabajamos",
      title1: "Un Proceso de",
      title2: "Entrega Probado",
      sub: "Cuatro etapas claras que te llevan del problema a la solución lista para producción.",
      step: "Paso",
      steps: [
        {
          title: "Descubrimiento Empresarial",
          desc: "Analizamos tus procesos actuales, puntos de dolor y objetivos para construir una imagen precisa de dónde la tecnología puede generar el mayor retorno.",
        },
        {
          title: "Diseño de la Solución",
          desc: "Diseño una arquitectura y hoja de ruta personalizada — seleccionando las tecnologías, automatizaciones e integraciones correctas para tu contexto específico.",
        },
        {
          title: "Desarrollo e Implementación",
          desc: "Ciclos de desarrollo ágil entregan software funcional rápidamente, con retroalimentación continua para asegurar que construimos lo que tu negocio realmente necesita.",
        },
        {
          title: "Optimización y Crecimiento",
          desc: "Tras el lanzamiento, monitoreamos el rendimiento, refinamos automatizaciones y escalamos los sistemas conforme tu negocio crece — manteniendo la tecnología como tu ventaja.",
        },
      ],
    },
    testimonials: {
      label: "Resultados de Clientes",
      title1: "Lo Que Dicen",
      title2: "los Clientes",
      sub: "Resultados reales de empresas que invirtieron en la tecnología correcta.",
      disclaimer:
        "* Los testimonios son representativos del tipo de resultados entregados. Los detalles específicos pueden generalizarse por confidencialidad.",
      items: [
        {
          name: "Carlos M.",
          role: "CEO, Empresa de Servicios",
          body: "Sara transformó por completo nuestras operaciones con una plataforma personalizada. Pasamos de gestionar todo manualmente a tener visibilidad en tiempo real y flujos automatizados. El impacto en la eficiencia de nuestro equipo fue inmediato.",
        },
        {
          name: "Valentina R.",
          role: "Fundadora, Marca E-commerce",
          body: "El CRM potenciado con IA y la automatización de WhatsApp que construyó para nosotros triplicó nuestra tasa de respuesta y mejoró significativamente la satisfacción del cliente. Ahora cerramos negocios más rápido que nunca.",
        },
        {
          name: "Andrés P.",
          role: "Director, Clínica de Salud",
          body: "Necesitábamos un sistema personalizado de agendamiento y gestión de pacientes. Sara entregó una solución que redujo nuestra carga administrativa en más del 60%. Habilidades técnicas excepcionales y excelente comunicación durante todo el proceso.",
        },
      ],
    },
    portfolio: {
      label: "Portafolio",
      title1: "Proyectos Reales,",
      title2: "Impacto Real",
      sub: "Una selección de productos digitales y plataformas construidos desde cero.",
      viewProject: "Ver proyecto en vivo →",
      items: [
        {
          tag: "Plataforma · Automatización",
          title: "Clean & Shiny — Plataforma Operativa",
          desc: "Plataforma full-stack que automatizó más del 90% de las asignaciones de servicios, reemplazando un proceso completamente manual. Construida con React, Node.js y un motor de asignación en tiempo real.",
          stack: ["React", "Node.js", "PostgreSQL", "WebSockets"],
          icon: "monitor",
          metrics: ["90% automatización", "Tiempo real", "Lógica estilo Uber"],
          link: null,
        },
        {
          tag: "IA · Venture Capital",
          title: "Dealflow Radar",
          desc: "Herramienta de deal sourcing automatizada para un fondo de VC: pipeline Python diario que escanea startups en etapa pre-seed, las filtra por tesis de inversión y las puntúa con Claude IA. Dashboard filtrable en Next.js con análisis on-demand via Gemini. 36 deals relevantes identificados de 103 escaneados.",
          stack: ["Next.js", "Python", "Claude IA", "Gemini", "GitHub Actions"],
          icon: "bot",
          metrics: ["36/103 deals filtrados", "Scoring con Claude IA", "Pipeline diario automático"],
          link: "https://dealflow-radar-blond.vercel.app/",
        },
        {
          tag: "Ejemplo de Landing Page",
          title: "Landing Page",
          desc: "Landing page completa para un profesor de alemán certificado: hero, sobre mí, 4 planes de servicio con precios y formulario de contacto. Construida con React, Vite y Tailwind.",
          stack: ["React", "Vite", "Tailwind", "shadcn/ui"],
          icon: "monitor",
          metrics: ["4 planes de servicio", "Formulario de contacto", "Responsive"],
          link: "/portfolio/profesor",
        },
      ],
    },
    contact: {
      label: "Hablemos",
      title1: "Construyamos la Tecnología",
      title2: "que tu Empresa Necesita",
      sub: "Ya sea que necesites un sitio web, CRM, sistema de automatización, solución de IA o software personalizado, hablemos de cómo la tecnología puede ayudar a crecer tu negocio.",
      cta1: "Agendar Consulta Gratuita",
      cta2: "Iniciar Conversación",
      tags: [
        "Software a Medida",
        "Agentes de IA",
        "Sistemas CRM",
        "Automatización WhatsApp",
        "Apps Web",
        "Apps Móviles",
        "Automatización de Procesos",
        "Transformación Digital",
      ],
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        company: "Empresa (opcional)",
        message: "Cuéntame sobre tu proyecto",
        submit: "Enviar mensaje",
        sending: "Enviando…",
        successTitle: "¡Mensaje enviado!",
        successBody: "Gracias, me pondré en contacto contigo en menos de 24 horas.",
        errorTitle: "Algo salió mal",
        errorBody: "Por favor intenta de nuevo o contáctame por WhatsApp.",
        orWhatsapp: "O contáctame directamente por WhatsApp",
      },
    },
    footer: {
      tagline: "Desarrolladora de Software | Ingeniera de Automatización IA | Consultora Tecnológica",
      rights: "Todos los derechos reservados. Construido con precisión.",
    },
  },
};

// ─── Canvas background ────────────────────────────────────────────────────────
function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.5 + 1.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255,255,255,0.03)";
      ctx.lineWidth = 1;
      const gs = 60;
      for (let x = 0; x < canvas.width; x += gs) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gs) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / 160) * 0.08})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
          }
        }
      }
      nodes.forEach((n, i) => {
        const pulse = Math.sin(t * 0.02 + i) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(255,255,255,${0.25 * pulse})`;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      });
      t++;
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" style={{ pointerEvents: "none" }} />;
}

// ─── Language Modal ───────────────────────────────────────────────────────────
function LangModal({ lang, onSelect, onClose }: { lang: Lang; onSelect: (l: Lang) => void; onClose: () => void }) {
  const t = translations[lang].langModal;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200 p-8 w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-5">
          <Languages size={22} className="text-gray-700" />
        </div>

        <h2
          className="text-white text-xl font-bold mb-1"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {t.title}
        </h2>
        <p className="text-gray-400 text-sm mb-7" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {t.subtitle}
        </p>

        <div className="flex flex-col gap-3">
          {(["en", "es"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => { onSelect(l); onClose(); }}
              className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl border text-left transition-all duration-200 ${
                lang === l
                  ? "border-blue-500/50 bg-gray-100 text-white"
                  : "border-gray-100 bg-gray-100 text-gray-600 hover:border-gray-200 hover:bg-gray-200"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="text-lg">{l === "en" ? "🇺🇸" : "🇨🇴"}</span>
              <span className="font-semibold">{t[l]}</span>
              {lang === l && (
                <span className="ml-auto w-2 h-2 rounded-full bg-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langModal, setLangModal] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t.about, href: "#about" },
    { label: t.services, href: "#services" },
    { label: t.process, href: "#process" },
    { label: t.portfolio, href: "#portfolio" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <>
      {langModal && (
        <LangModal lang={lang} onSelect={setLang} onClose={() => setLangModal(false)} />
      )}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <img
              src={saraPhoto}
              alt="Sara Ibáñez"
              className="w-9 h-9 rounded-lg object-cover border border-white/20 bg-white"
              style={{ objectPosition: "50% 18%" }}
            />
            <div>
              <span className={`font-bold text-base tracking-tight ${scrolled ? "text-gray-900" : "text-white"}`} style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Sara Ibáñez
              </span>
              <div className={`text-[10px] font-mono tracking-widest uppercase -mt-0.5 ${scrolled ? "text-gray-400" : "text-white/60"}`}>
                Tech Consulting
              </div>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}
                  className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLangModal(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm transition-all ${
                scrolled
                  ? "border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300"
                  : "border-white/20 text-white/70 hover:text-white hover:border-white/40"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              aria-label="Change language"
            >
              <Globe size={14} />
              <span className="font-mono text-xs uppercase tracking-widest">{lang}</span>
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm transition-colors px-3 py-1.5 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <MessageCircle size={15} />
              {t.whatsapp}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 text-sm font-semibold transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t.cta}
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLangModal(true)}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-lg border text-xs font-mono uppercase tracking-wider ${
                scrolled ? "border-gray-200 text-gray-500" : "border-white/20 text-white/70"
              }`}
              aria-label="Change language"
            >
              <Globe size={12} />
              {lang}
            </button>
            <button
              className={`p-1 ${scrolled ? "text-gray-700" : "text-white"}`}
              onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-gray-900 text-lg font-medium transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center px-4 py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold"
                onClick={() => setOpen(false)} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 justify-center px-4 py-3 rounded-lg bg-gray-900 text-white font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t.cta} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

// ─── Section helpers ──────────────────────────────────────────────────────────
function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-100 mb-4">
      <span className="w-1 h-1 rounded-full bg-gray-400" />
      <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">{children}</span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      {children}
    </h2>
  );
}

// ─── Dashboard mockup (static, no i18n needed) ────────────────────────────────
function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white backdrop-blur-sm shadow-2xl shadow-gray-200 p-4"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="ml-auto text-[10px] text-gray-400 font-mono">AI Dashboard</div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[{ label: "Leads", value: "1,284" }, { label: "Automation", value: "94%" }, { label: "Response", value: "< 2min" }].map((kpi) => (
          <div key={kpi.label} className="bg-gray-100 rounded-lg p-2.5">
            <div className="text-[10px] text-gray-400">{kpi.label}</div>
            <div className="text-sm font-bold text-gray-600 mt-0.5">{kpi.value}</div>
            <div className="text-[9px] text-green-400 mt-0.5">↑ Active</div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 rounded-lg p-3 mb-3">
        <div className="text-[10px] text-gray-400 mb-2">Sales Pipeline</div>
        <div className="flex items-end gap-1 h-14">
          {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `rgba(59,130,246,${0.3 + (h / 100) * 0.6})` }} />
          ))}
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-3">
        <div className="text-[10px] text-gray-400 mb-2">AI Workflow — Active</div>
        <div className="space-y-1.5">
          {[{ label: "Lead captured", status: "done" }, { label: "AI qualification", status: "done" }, { label: "WhatsApp follow-up", status: "active" }, { label: "CRM update", status: "pending" }].map((step) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${step.status === "done" ? "bg-green-400" : step.status === "active" ? "bg-blue-400 animate-pulse" : "bg-slate-600"}`} />
              <span className="text-[10px] text-gray-500">{step.label}</span>
              {step.status === "done" && <span className="ml-auto text-[9px] text-green-400">✓</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-950">
      <HeroBackground />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 xl:gap-16 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            <span className="text-white/60 text-xs font-mono tracking-widest uppercase">{t.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            {t.headline1}{" "}
            <span className="text-white/70">
              {t.headline2}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-2xl mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-gray-100 text-gray-900 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t.cta1}
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: t.stat1v, label: t.stat1l },
              { value: t.stat2v, label: t.stat2l },
              { value: t.stat3v, label: t.stat3l },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-[380px] opacity-60">
          <DashboardMockup />
        </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About({ lang }: { lang: Lang }) {
  const t = translations[lang].about;
  return (
    <Section id="about" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-5 mb-8">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/20 blur-sm" />
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-gray-300 bg-white">
                <img
                  src={saraPhoto}
                  alt="Sara Ibáñez"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 18%", transform: "scale(1.2)", transformOrigin: "50% 18%" }}
                />
              </div>
            </div>
            <div>
              <div className="text-white font-semibold text-lg" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                Sara Ibáñez
              </div>
              <div className="text-gray-700 text-sm font-mono">{translations[lang].nav.about === "About" ? "Software & AI Consultant" : "Consultora de Software e IA"}</div>
            </div>
          </div>
          <SectionLabel>{translations[lang].nav.about === "About" ? "About Sara" : t.label}</SectionLabel>
          <SectionHeading>
            {t.title1}{" "}
            <span className="text-gray-900">
              {t.title2}
            </span>
          </SectionHeading>
          <p className="text-gray-500 text-lg leading-relaxed mt-6 mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t.body}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {t.skills.map((skill) => (
              <div key={skill} className="flex items-start gap-2">
                <Check size={16} className="text-gray-700 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-sm" />
          <div className="relative rounded-2xl border border-gray-200 bg-white p-8">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-300 flex items-center justify-center">
                <Layers size={18} className="text-gray-700" />
              </div>
              <div>
                <div className="text-white font-semibold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  Clean &amp; Shiny
                </div>
                <div className="text-xs text-gray-700 font-mono">{t.caseLabel}</div>
              </div>
              <div className="ml-auto px-2 py-1 rounded-md bg-green-500/10 border border-green-500/20">
                <span className="text-green-400 text-xs font-mono">{t.caseLive}</span>
              </div>
            </div>
            <div className="space-y-3 mb-6 max-h-52 overflow-y-auto pr-1" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(0,0,0,0.15) transparent" }}>
              {t.caseParagraphs.map((para, i) => (
                <p key={i}
                  className={`text-sm leading-relaxed ${i === 0 ? "text-gray-700 font-medium" : "text-gray-500"}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {para}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Zap, label: t.metric1l, value: t.metric1v },
                { icon: TrendingUp, label: t.metric2l, value: t.metric2v },
                { icon: RefreshCw, label: t.metric3l, value: t.metric3v },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-gray-100 rounded-lg p-3 text-center">
                  <Icon size={16} className="text-gray-700 mx-auto mb-1" />
                  <div className="text-white text-xs font-semibold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{value}</div>
                  <div className="text-gray-400 text-[10px] mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const serviceIcons = [Code2, Bot, BarChart3, Globe];
const serviceColors = ["blue", "cyan", "violet", "indigo"];
const colorMap: Record<string, { border: string; bg: string; icon: string; glow: string }> = {
  blue: { border: "border-gray-200", bg: "bg-gray-100", icon: "text-gray-700", glow: "from-blue-500/10" },
  cyan: { border: "border-cyan-500/20", bg: "bg-cyan-500/8", icon: "text-gray-700", glow: "from-cyan-500/10" },
  violet: { border: "border-violet-500/20", bg: "bg-violet-500/8", icon: "text-gray-700", glow: "from-violet-500/10" },
  indigo: { border: "border-indigo-500/20", bg: "bg-indigo-500/8", icon: "text-gray-700", glow: "from-indigo-500/10" },
};

function Services({ lang }: { lang: Lang }) {
  const t = translations[lang].services;
  return (
    <Section id="services" className="bg-gray-50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <SectionLabel>{t.label}</SectionLabel>
        <SectionHeading>
          {t.title1}{" "}
          <span className="text-gray-900">{t.title2}</span>
        </SectionHeading>
        <p className="text-gray-500 text-lg mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.sub}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {t.items.map((service, idx) => {
          const c = colorMap[serviceColors[idx]];
          const Icon = serviceIcons[idx];
          return (
            <div key={service.title}
              className={`group relative rounded-2xl border ${c.border} bg-white p-8 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200`}>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={c.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <ChevronRight size={14} className={c.icon} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// ─── Benefits ─────────────────────────────────────────────────────────────────
const benefitIcons = [Clock, Zap, TrendingUp, DollarSign, Layers, Eye];

function Benefits({ lang }: { lang: Lang }) {
  const t = translations[lang].benefits;
  return (
    <Section className="bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-transparent blur-[100px] pointer-events-none" />
      <div className="relative text-center max-w-2xl mx-auto mb-16">
        <SectionLabel>{t.label}</SectionLabel>
        <SectionHeading>
          {t.title1}{" "}
          <span className="text-gray-900">{t.title2}</span>
        </SectionHeading>
        <p className="text-gray-500 text-lg mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.sub}</p>
      </div>
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.items.map(({ text, metric }, idx) => {
          const Icon = benefitIcons[idx];
          return (
            <div key={metric}
              className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-200 hover:bg-gray-50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gray-700" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{text}</p>
              </div>
              <div className="ml-14">
                <span className="text-[10px] font-mono text-gray-700/70 tracking-widest uppercase px-2 py-0.5 rounded bg-gray-100 border border-gray-200">
                  {metric}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
const processIcons = [Search, PenTool, Code2, Rocket];

function Process({ lang }: { lang: Lang }) {
  const t = translations[lang].process;
  return (
    <Section id="process" className="bg-gray-50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <SectionLabel>{t.label}</SectionLabel>
        <SectionHeading>
          {t.title1}{" "}
          <span className="text-gray-900">{t.title2}</span>
        </SectionHeading>
        <p className="text-gray-500 text-lg mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.sub}</p>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map(({ title, desc }, idx) => {
            const Icon = processIcons[idx];
            const num = String(idx + 1).padStart(2, "0");
            return (
              <div key={title} className="relative group">
                <div className="flex flex-col items-start mb-5">
                  <div className="relative z-10 w-16 h-16 rounded-2xl border border-gray-200 bg-white group-hover:bg-gray-100 flex items-center justify-center mb-3 transition-colors duration-300">
                    <Icon size={24} className="text-gray-700" />
                  </div>
                  <span className="text-xs font-mono text-gray-400 tracking-widest">
                    {t.step} {num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
import { Link } from "react-router";

const portfolioIconMap: Record<string, React.FC<{ size: number; className: string }>> = {
  monitor: Monitor,
  bot: Bot,
  database: Database,
};

function Portfolio({ lang }: { lang: Lang }) {
  const t = translations[lang].portfolio;
  return (
    <Section id="portfolio" className="bg-gray-50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <SectionLabel>{t.label}</SectionLabel>
        <SectionHeading>
          {t.title1}{" "}
          <span className="text-gray-900">{t.title2}</span>
        </SectionHeading>
        <p className="text-gray-500 text-lg mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.sub}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {t.items.map((project, idx) => {
          const Icon = portfolioIconMap[project.icon] ?? Monitor;
          const glows = ["from-blue-500/10", "from-cyan-500/10", "from-violet-500/10"];
          const borders = ["border-gray-200", "border-cyan-500/20", "border-violet-500/20"];
          const icons = ["text-gray-700", "text-gray-700", "text-gray-700"];
          const bgs = ["bg-gray-100", "bg-cyan-500/8", "bg-violet-500/8"];
          return (
            <div key={project.title}
              className={`group relative rounded-2xl border ${borders[idx]} bg-white p-7 flex flex-col hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200`}>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${glows[idx]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${bgs[idx]} border ${borders[idx]} flex items-center justify-center`}>
                    <Icon size={22} className={icons[idx]} />
                  </div>
                  <span className={`text-[10px] font-mono ${icons[idx]} px-2 py-0.5 rounded border ${borders[idx]} bg-transparent opacity-80 tracking-widest uppercase`}>
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {project.desc}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.metrics.map((m) => (
                    <span key={m} className="flex items-center gap-1 text-[10px] font-mono text-green-400 px-2 py-0.5 rounded bg-green-500/8 border border-green-500/15">
                      <span className="w-1 h-1 rounded-full bg-green-400" />
                      {m}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-500 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live link */}
                {project.link && (
                  <div className="mt-auto pt-2">
                    {project.link.startsWith("http") ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold ${icons[idx]} hover:opacity-80 transition-opacity`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <ExternalLink size={12} />
                        {t.viewProject}
                      </a>
                    ) : (
                      <Link
                        to={project.link}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold ${icons[idx]} hover:opacity-80 transition-opacity`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        <ExternalLink size={12} />
                        {t.viewProject}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
type FormState = "idle" | "sending" | "success" | "error";

function ContactForm({ lang }: { lang: Lang }) {
  const tf = translations[lang].contact.form;
  const [formState, setFormState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: values.name,
          email: values.email,
          company: values.company,
          message: values.message,
          subject: `Nuevo contacto desde sara-ibanez.com — ${values.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFormState("success");
        setValues({ name: "", email: "", company: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="rounded-2xl border border-green-500/25 bg-green-500/6 p-10 text-center">
        <CheckCircle size={40} className="text-green-400 mx-auto mb-4" />
        <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          {tf.successTitle}
        </h3>
        <p className="text-gray-500 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tf.successBody}</p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-6 text-gray-700 text-sm underline underline-offset-2 hover:text-gray-600 transition-colors"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          ← {lang === "en" ? "Send another" : "Enviar otro"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col gap-5">
      {formState === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl border border-red-500/25 bg-red-500/6">
          <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-300 text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tf.errorTitle}</p>
            <p className="text-red-400/80 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tf.errorBody}</p>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono text-gray-400 tracking-widest uppercase">{tf.name}</label>
          <input
            type="text"
            name="name"
            required
            value={values.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-gray-200 transition-all"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            placeholder="Sara Ibáñez"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono text-gray-400 tracking-widest uppercase">{tf.email}</label>
          <input
            type="email"
            name="email"
            required
            value={values.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-gray-200 transition-all"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            placeholder="sara@empresa.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono text-gray-400 tracking-widest uppercase">{tf.company}</label>
        <input
          type="text"
          name="company"
          value={values.company}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-gray-200 transition-all"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          placeholder="Clean & Shiny"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono text-gray-400 tracking-widest uppercase">{tf.message}</label>
        <textarea
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-gray-200 transition-all resize-none"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          placeholder={lang === "en" ? "I need a CRM system that…" : "Necesito un sistema CRM que…"}
        />
      </div>

      <button
        type="submit"
        disabled={formState === "sending"}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-gray-900/10 hover:-translate-y-0.5"
        style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {formState === "sending" ? tf.sending : tf.submit}
        {formState !== "sending" && <Send size={15} />}
      </button>
    </form>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  return (
    <Section id="contact" className="bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-transparent blur-[120px] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>{t.label}</SectionLabel>
          <SectionHeading>
            {t.title1}{" "}
            <span className="text-gray-900">{t.title2}</span>
          </SectionHeading>
          <p className="text-gray-500 text-lg mt-6 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.sub}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* Form */}
          <ContactForm lang={lang} />

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* WhatsApp CTA */}
            <div className="rounded-2xl border border-green-500/20 bg-white p-6">
              <p className="text-xs font-mono text-gray-400 tracking-widest uppercase mb-4">{t.form.orWhatsapp}</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-green-500/25 bg-green-500/8 hover:bg-green-500/15 text-green-400 font-semibold text-sm transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <MessageCircle size={18} />
                {WHATSAPP_DISPLAY}
                <ExternalLink size={13} className="ml-auto opacity-60" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center w-full gap-2 px-5 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-700 text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t.cta1}
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-xs"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;
  const navItems = [
    { label: nav.about, href: "#about" },
    { label: nav.services, href: "#services" },
    { label: nav.process, href: "#process" },
    { label: nav.portfolio, href: "#portfolio" },
    { label: nav.contact, href: "#contact" },
  ];
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <Cpu size={16} className="text-gray-900" />
            </div>
            <div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Sara Ibáñez</div>
              <div className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.tagline}</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item.label}
              </a>
            ))}
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-500/25 bg-green-500/8 text-green-400 text-sm hover:bg-green-500/15 transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}>
            <MessageCircle size={14} />
            {WHATSAPP_DISPLAY}
          </a>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          © {new Date().getFullYear()} Sara Ibáñez. {t.rights}
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f9fafb; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.3); }
        body { font-family: 'DM Sans', sans-serif; }
      `}</style>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Benefits lang={lang} />
      <Process lang={lang} />
      <Portfolio lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
