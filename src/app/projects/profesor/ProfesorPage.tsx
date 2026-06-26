import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function ProfesorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Back button — fixed top-left, visible over the dark hero */}
      <Link
        to="/#portfolio"
        className="fixed top-4 left-4 z-[200] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-black/60 transition-all"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <ArrowLeft size={15} />
        Volver al portafolio
      </Link>

      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
