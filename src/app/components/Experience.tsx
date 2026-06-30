import { motion } from "framer-motion";
import React from "react";
import saraPhoto from "../../assets/sara.webp";
import { useLang } from "../i18n/LangContext";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-32 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 md:mb-32 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            {t.experience.title}
          </h2>
          <img
            src={saraPhoto}
            alt="Sara Ibáñez"
            className="w-48 h-64 md:w-64 md:h-80 object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 border border-gray-800 shadow-xl"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative">
          <div className="hidden md:block absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-gray-900" />

          {t.experience.items.map((exp, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="col-span-1 md:col-span-4 md:pr-12 md:text-right relative"
              >
                <div className="hidden md:block absolute right-[-4px] top-2 w-2 h-2 rounded-full bg-white z-10" />
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">{exp.company}</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">{exp.date}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                className="col-span-1 md:col-span-8 mb-16 md:mb-24 md:pl-12"
              >
                <h4 className="text-2xl md:text-3xl font-light mb-6 tracking-tight">{exp.title}</h4>
                <ul className="space-y-4">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-4 text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl">
                      <span className="text-gray-700 mt-1.5">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
