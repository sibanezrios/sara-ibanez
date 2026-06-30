import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";
import { useLang } from "../i18n/LangContext";

const planMeta = [
  { price: "550k", highlighted: false },
  { price: "1.2M", highlighted: true, monthlyFee: "+ $150k COP" },
  { price: "2.0M+", highlighted: false, monthlyFee: "+ $300k COP" },
];

export default function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="py-32 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{t.pricing.title}</h2>
          <p className="text-gray-400 max-w-lg mx-auto uppercase tracking-widest text-[10px] md:text-[11px]">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
          {t.pricing.plans.map((plan, index) => {
            const meta = planMeta[index];
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col bg-[#111] border rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                  meta.highlighted
                    ? "border-gray-500 shadow-2xl md:-translate-y-4 bg-[#151515]"
                    : "border-gray-800 hover:border-gray-700"
                }`}
              >
                {meta.highlighted && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-600 via-white to-gray-600 opacity-80 rounded-t-2xl" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] uppercase tracking-widest font-bold px-4 py-1 rounded-full">
                      {t.pricing.mostPopular}
                    </span>
                  </>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-gray-500 text-sm">{t.pricing.startingAt}</span>
                    <span className="text-4xl font-bold tracking-tighter">${meta.price}</span>
                    <span className="text-gray-500 font-mono text-xs">COP</span>
                  </div>
                  {meta.monthlyFee && (
                    <p className="text-[#a1a1aa] text-[11px] font-medium mb-2">
                      {meta.monthlyFee} / mo {t.pricing.maintenance}
                    </p>
                  )}
                  <p className="text-[9px] uppercase tracking-widest text-gray-500">{t.pricing.domainNote}</p>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={16} className={`flex-shrink-0 mt-0.5 ${meta.highlighted ? "text-white" : "text-gray-500"}`} />
                      <span className="text-sm text-gray-300 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`block w-full py-4 text-center font-semibold text-[11px] uppercase tracking-widest transition-colors rounded-full ${
                    meta.highlighted
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-[#1a1a1a] text-white hover:bg-[#222] border border-gray-800"
                  }`}
                >
                  {t.pricing.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
