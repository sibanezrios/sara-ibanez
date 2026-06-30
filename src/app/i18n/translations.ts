export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      work: "Trabajo",
      experience: "Experiencia",
      pricing: "Precios",
      contact: "Contacto",
    },
    hero: {
      tagline:
        "DESARROLLADORA DE SOFTWARE E INGENIERÍA DE AUTOMATIZACIÓN IA BASADA EN COLOMBIA, ENFOCADA EN LA TRANSFORMACIÓN DIGITAL EN FORMAS ELEGANTES.",
    },
    work: {
      title: "Trabajos seleccionados",
      seeAll: "VER TODOS",
      comingSoon: "Próximamente",
      preview: "Ver sitio",
      loading: "Cargando vista previa...",
    },
    experience: {
      title: "Experiencia Profesional",
      items: [
        {
          title: "Full Stack Engineer",
          company: "Clean & Shiny",
          date: "Dic 2025 – Jun 2026",
          details: [
            "Transformé el negocio en un 'Uber para limpieza' automatizando completamente su modelo de asignación de servicios.",
            "Reemplacé un proceso manual 1-a-1 con una arquitectura de base de datos y flujo de solicitudes totalmente automatizado.",
            "Desarrollé una plataforma web donde los limpiadores pueden recibir, aceptar o rechazar solicitudes en tiempo real.",
          ],
        },
        {
          title: "AI Automation Engineer",
          company: "Cirrus Consulting Services",
          date: "Jun 2025 – Nov 2025",
          details: [
            "Diseñé y orquesté flujos de respuesta automatizados en n8n, integrando agentes de IA para la comunicación con clientes.",
            "Desarrollé y refiné estructuras de prompts para reducir el uso de tokens y prevenir alucinaciones.",
            "Construí una arquitectura de flujo impulsada por IA que garantiza enrutamiento de datos confiable y manejo de errores.",
          ],
        },
        {
          title: "Infrastructure & Automation Engineer",
          company: "Universidad del Norte",
          date: "Ene 2025 – Sep 2025",
          details: [
            "Configuré entornos basados en Linux y automaticé tareas usando scripts de shell y contenedores Docker.",
            "Gestioné el acceso de usuarios, aislamiento de datos y conectividad de red para operaciones seguras de laboratorio.",
            "Optimicé flujos de despliegue containerizando servicios, reduciendo el tiempo de configuración.",
          ],
        },
        {
          title: "Mobile Developer Intern",
          company: "React Native con TypeScript",
          date: "Nov 2024 – Ene 2025",
          details: [
            "Contribuí a una aplicación móvil multiplataforma implementando lógica de negocio y endpoints RESTful.",
            "Colaboré usando Bitbucket para control de versiones y revisiones de código.",
            "Apliqué principios SOLID para garantizar una arquitectura escalable y mantenible.",
          ],
        },
      ],
    },
    pricing: {
      title: "Planes de Inversión",
      subtitle: "Soluciones diseñadas a tu medida. Precios claros, resultados concretos.",
      mostPopular: "Más Popular",
      startingAt: "Desde",
      maintenance: "Mantenimiento",
      domainNote: "* Dominio no incluido (Hosting incluido)",
      cta: "Solicitar Cotización",
      plans: [
        {
          name: "Presencia Digital",
          description: "Ideal para profesionales, emprendedores y marcas que buscan una presencia digital moderna y profesional.",
          features: [
            "Diseño Premium Personalizado",
            "Adaptado a móviles y escritorio",
            "Animaciones modernas e interacciones fluidas",
            "Optimizado para tiempos de carga rápidos",
            "Acompañamiento en el despliegue",
          ],
        },
        {
          name: "Acelerador de Negocio",
          description: "Diseñado para empresas que quieren atraer más clientes, aparecer en Google y convertir visitas en oportunidades de venta.",
          features: [
            "Sitio web multipágina (hasta 5 páginas)",
            "Optimización SEO para Google",
            "Configuración de Google Maps y SEO Local",
            "Formularios inteligentes para captar clientes",
            "Preparado para generar más oportunidades de venta",
          ],
        },
        {
          name: "IA para Empresas",
          description: "Automatiza procesos, atención al cliente e integraciones mediante inteligencia artificial y soluciones desarrolladas a medida.",
          features: [
            "Todo lo incluido en Acelerador de Negocio",
            "Chatbot inteligente para WhatsApp",
            "Integraciones CRM desarrolladas a medida",
            "Automatización de bases de datos",
            "Automatización completa de procesos empresariales",
          ],
        },
      ],
    },
    contact: {
      title: "Hablemos",
      description:
        "¿Tienes un proyecto en mente o quieres explorar cómo podemos trabajar juntos? Escríbeme y te respondo lo antes posible.",
      emailLabel: "EMAIL",
      whatsappLabel: "WHATSAPP",
      locationLabel: "UBICACIÓN",
      location: "Barranquilla, Colombia",
      nameLabel: "Nombre",
      emailFieldLabel: "Email",
      messageLabel: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar mensaje",
      sending: "Enviando…",
      sendAnother: "← Enviar otro",
      successTitle: "Mensaje enviado.",
      successDesc: "Gracias por escribirme — te responderé pronto.",
      errorMsg: "Algo salió mal. Por favor intenta de nuevo.",
      subject: (name: string) => `Consulta de proyecto — ${name}`,
    },
  },

  en: {
    nav: {
      work: "Work",
      experience: "Experience",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      tagline:
        "SOFTWARE DEVELOPER & AI AUTOMATION ENGINEER BASED IN COLOMBIA FOCUSING ON DIGITAL TRANSFORMATION IN ELEGANT FORMS.",
    },
    work: {
      title: "Selected work",
      seeAll: "SEE THEM ALL",
      comingSoon: "Coming Soon",
      preview: "Preview Website",
      loading: "Loading preview...",
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          title: "Full Stack Engineer",
          company: "Clean & Shiny",
          date: "Dec 2025 – Jun 2026",
          details: [
            "Transformed the business into an 'Uber for cleaning' by completely automating their service assignment model.",
            "Replaced a manual 1-on-1 messaging process with a fully automated database architecture and request workflow.",
            "Built a web platform where cleaners can automatically receive, accept, or reject service requests in real-time.",
          ],
        },
        {
          title: "AI Automation Engineer",
          company: "Cirrus Consulting Services",
          date: "Jun 2025 – Nov 2025",
          details: [
            "Designed and orchestrated automated response workflows in n8n, integrating AI agents for client communication.",
            "Developed and refined prompt structures to reduce token usage and prevent hallucinations.",
            "Built an AI-driven flow architecture ensuring reliable data routing and error handling.",
          ],
        },
        {
          title: "Infrastructure & Automation Engineer",
          company: "Universidad del Norte",
          date: "Jan 2025 – Sep 2025",
          details: [
            "Configure Linux-based environments and automate tasks using shell scripting and Docker containers.",
            "Manage user access, data isolation, and network connectivity for secure lab operations.",
            "Streamlined deployment workflows by containerizing services, reducing configuration time.",
          ],
        },
        {
          title: "Mobile Developer Intern",
          company: "React Native with TypeScript",
          date: "Nov 2024 – Jan 2025",
          details: [
            "Contributed to a cross-platform mobile app, implementing business logic and RESTful endpoints.",
            "Collaborated using Bitbucket for version control and code reviews.",
            "Applied SOLID principles to ensure a scalable, maintainable architecture.",
          ],
        },
      ],
    },
    pricing: {
      title: "Investment Plans",
      subtitle: "Transparent pricing for scalable digital solutions",
      mostPopular: "Most Popular",
      startingAt: "Starting at",
      maintenance: "Maintenance",
      domainNote: "* Domain not included (Hosting included)",
      cta: "Request a Quote",
      plans: [
        {
          name: "Digital Presence",
          description: "Perfect for a stunning personal portfolio or a single landing page.",
          features: [
            "Custom Premium Design",
            "Responsive (Mobile & Desktop)",
            "Smooth Animations & Interactions",
            "Fast Load Times",
            "Deployment Assistance",
          ],
        },
        {
          name: "Business Accelerator",
          description: "Turn your website into a sales machine that ranks on Google and captures clients.",
          features: [
            "Multi-page Website (Up to 5 pages)",
            "Advanced SEO for Google Ranking",
            "Google Maps & Local SEO Setup",
            "High-Conversion Lead Capture Forms",
            "Direct WhatsApp Sales Integration",
          ],
        },
        {
          name: "AI Automation",
          description: "End-to-end automation with AI and custom coded integrations.",
          features: [
            "Everything in Business Accelerator",
            "WhatsApp AI Chatbot Automation",
            "Custom Coded CRM Integrations",
            "Automated Database Workflows",
          ],
        },
      ],
    },
    contact: {
      title: "Let's talk",
      description:
        "Have a project in mind or want to explore how we can work together? Drop me a message and I'll get back to you as soon as possible.",
      emailLabel: "EMAIL",
      whatsappLabel: "WHATSAPP",
      locationLabel: "LOCATION",
      location: "Barranquilla, Colombia",
      nameLabel: "Name",
      emailFieldLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
      sending: "Sending…",
      sendAnother: "← Send another",
      successTitle: "Message sent.",
      successDesc: "Thanks for reaching out — I'll get back to you shortly.",
      errorMsg: "Something went wrong. Please try again.",
      subject: (name: string) => `Project inquiry — ${name}`,
    },
  },
} as const;

export type Translations = typeof translations.es;
