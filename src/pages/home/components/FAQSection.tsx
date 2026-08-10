import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';

const faqs = [
  {
    q: 'What is Azodicarbonamide (ADC) and how is it used?',
    a: 'Azodicarbonamide (ADC) is a chemical blowing agent widely used in the polymer industry to produce foamed plastics and rubber products. When heated, it decomposes to release gases (primarily nitrogen, carbon monoxide, and ammonia) that create a cellular structure within the polymer matrix, resulting in lightweight, cushioned foam products.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We serve a diverse range of industries including footwear manufacturing, EVA foam production, PVC processing, rubber manufacturing, packaging, thermal insulation, and general plastic processing. Our products are used by manufacturers across India and international markets.',
  },
  {
    q: 'Can you provide customized ADC formulations?',
    a: 'Absolutely. Our Custom Grades service offers tailored blowing agent formulations to match your specific processing conditions, polymer systems, and end-product requirements. Our R&D team works closely with your technical staff to develop the optimal solution.',
  },
  {
    q: 'What quality certifications do you hold?',
    a: 'High-Tech Polymers maintains rigorous quality management systems with comprehensive batch testing. Every batch undergoes testing including purity analysis, particle size distribution, gas yield measurement, decomposition temperature verification, and moisture content analysis. Complete batch traceability documentation is maintained for every shipment.',
  },
  {
    q: 'What is your minimum order quantity?',
    a: 'Our minimum order quantities vary by product grade. We serve both large-volume industrial clients and smaller manufacturers. Contact our sales team with your requirements for specific MOQ details and competitive pricing.',
  },
  {
    q: 'Do you provide technical support and documentation?',
    a: 'Yes, we provide comprehensive technical support including Technical Data Sheets (TDS), Material Safety Data Sheets (MSDS), processing recommendations, and on-site technical assistance when needed. Our team is committed to helping you optimize your manufacturing process.',
  },
  {
    q: 'What are your delivery timelines?',
    a: 'Standard delivery timelines range from 3-10 business days depending on order volume and destination. For urgent requirements, we offer expedited processing. We maintain adequate inventory of all standard grades to ensure quick dispatch.',
  },
  {
    q: 'How do you ensure batch-to-batch consistency?',
    a: 'Consistency is ensured through our rigorous quality control system. Each production batch is tested against established specifications before release. We maintain detailed batch records with full traceability, and our statistical process control methods monitor and maintain process stability.',
  },
];

const floatingFaqIcons = [
  { icon: 'ri-question-line', x: '2%', y: '20%', delay: 0, color: 'text-primary-200' },
  { icon: 'ri-chat-2-line', x: '97%', y: '25%', delay: 1.2, color: 'text-accent-200' },
  { icon: 'ri-flask-line', x: '1%', y: '70%', delay: 0.8, color: 'text-primary-100' },
  { icon: 'ri-information-line', x: '96%', y: '68%', delay: 2, color: 'text-accent-100' },
  { icon: 'ri-lightbulb-line', x: '50%', y: '2%', delay: 1.5, color: 'text-primary-100' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{
      backgroundImage: 'url(https://readdy.ai/api/search-image?query=Clean%20white%20laboratory%20interior%20with%20soft%20bokeh%20lights%2C%20glass%20panels%20and%20organized%20equipment%20in%20background%2C%20bright%20scientific%20atmosphere%2C%20very%20subtle%20texture%2C%20professional%20medical%20research%20facility%20background%2C%20minimal%20and%20airy&width=1920&height=1200&seq=htp-faq-bg&orientation=landscape)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-background-50/92"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-50/30 blur-3xl pointer-events-none"></div>

      {/* Floating icons */}
      {floatingFaqIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} pointer-events-none hidden lg:block`}
          style={{ left: item.x, top: item.y, fontSize: '24px' }}
          animate={{ y: [0, -15, 0], rotate: [0, 8, -8, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 5 + i * 0.6, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
        >
          <i className={item.icon}></i>
        </motion.div>
      ))}

      <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200/60 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-primary-600 tracking-wide uppercase">FAQ</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-900 mb-4">
                Frequently Asked <span className="text-primary-500">Questions</span>
              </h2>
              <p className="text-foreground-500 text-sm md:text-base leading-relaxed">
                Everything you need to know about our products and services.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <motion.div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openIndex === i
                      ? 'border-primary-200/60 bg-background-50 shadow-sm'
                      : 'border-background-200/60 bg-background-50/80 hover:border-background-300/60'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  >
                    <span className={`font-semibold pr-8 transition-colors duration-200 ${
                      openIndex === i ? 'text-primary-600' : 'text-foreground-900'
                    }`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        openIndex === i
                          ? 'bg-primary-500 text-background-50'
                          : 'bg-background-200/70 text-foreground-500'
                      }`}
                    >
                      <i className="ri-add-line text-lg"></i>
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                          <div className="h-px bg-background-200/60 mb-4"></div>
                          <p className="text-sm text-foreground-600 leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}