import { motion } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';

const values = [
  { icon: 'ri-focus-3-line', title: 'Precision', desc: 'Every batch manufactured with meticulous attention to detail and exacting standards.' },
  { icon: 'ri-lightbulb-line', title: 'Innovation', desc: 'Continuous R&D investment to develop next-generation foaming solutions.' },
  { icon: 'ri-shield-check-line', title: 'Quality', desc: 'Uncompromising commitment to product consistency and reliability.' },
  { icon: 'ri-hand-heart-line', title: 'Reliability', desc: 'Trusted partner delivering on promises, every time, without exception.' },
  { icon: 'ri-emotion-happy-line', title: 'Customer Satisfaction', desc: 'Your success is our mission — we go above and beyond for every client.' },
  { icon: 'ri-leaf-line', title: 'Sustainability', desc: 'Responsible manufacturing with focus on environmental stewardship and efficiency.' },
];

const bgFloatingIcons = [
  { icon: 'ri-focus-3-line', x: '3%', y: '18%', delay: 0, color: 'text-primary-200' },
  { icon: 'ri-lightbulb-line', x: '96%', y: '22%', delay: 1.1, color: 'text-accent-200' },
  { icon: 'ri-leaf-line', x: '2%', y: '65%', delay: 2, color: 'text-primary-200' },
  { icon: 'ri-hand-heart-line', x: '94%', y: '60%', delay: 0.7, color: 'text-accent-200' },
  { icon: 'ri-emotion-happy-line', x: '48%', y: '4%', delay: 1.5, color: 'text-primary-100' },
  { icon: 'ri-shield-check-line', x: '52%', y: '92%', delay: 2.5, color: 'text-accent-100' },
  { icon: 'ri-flask-line', x: '20%', y: '88%', delay: 3, color: 'text-primary-100' },
  { icon: 'ri-test-tube-line', x: '78%', y: '10%', delay: 0.3, color: 'text-accent-100' },
];

export default function CompanyValues() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{
      backgroundImage: 'url(https://readdy.ai/api/search-image?query=Soft%20abstract%20light%20blue%20and%20white%20bokeh%20background%20with%20gentle%20geometric%20hexagonal%20shapes%2C%20very%20light%20airy%20texture%2C%20clean%20minimal%20professional%20background%20for%20corporate%20website%20section%2C%20sky%20blue%20tones&width=1920&height=1200&seq=htp-values-bg&orientation=landscape)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-background-50/88"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(var(--primary-50)/0.5)_0%,_transparent_70%)] pointer-events-none"></div>

      {/* Floating blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-100/25 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-accent-100/20 blur-3xl pointer-events-none"
      />

      {/* Floating icons in blank areas */}
      {bgFloatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} pointer-events-none hidden lg:block`}
          style={{ left: item.x, top: item.y, fontSize: '26px' }}
          animate={{ y: [0, -16, 0], rotate: [0, 10, -10, 0], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
        >
          <i className={item.icon}></i>
        </motion.div>
      ))}

      <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200/60 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-accent-600 tracking-wide uppercase">Our Values</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-900 mb-4">
                The Principles That <span className="text-primary-500">Drive Us</span>
              </h2>
              <p className="text-foreground-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Six core values shape everything we do — from product development to
                customer relationships.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-background-50/90 border border-background-200/40 hover:border-primary-200/60 hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
                >
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 0 1.5px oklch(var(--${i % 2 === 0 ? 'primary' : 'accent'}-500) / 0.3), 0 8px 30px -8px oklch(var(--${i % 2 === 0 ? 'primary' : 'accent'}-500) / 0.15)`,
                    }}
                  />

                  {/* Floating chemical icon in background of card */}
                  <motion.div
                    className="absolute top-2 right-2 text-background-200/60 text-lg opacity-30 pointer-events-none"
                    animate={{ y: [0, -5, 0], rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                  >
                    <i className={value.icon}></i>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      i % 2 === 0
                        ? 'bg-primary-500 text-background-50 group-hover:shadow-lg group-hover:shadow-primary-500/25'
                        : 'bg-accent-500 text-background-50 group-hover:shadow-lg group-hover:shadow-accent-500/25'
                    }`}
                  >
                    <i className={`${value.icon} text-2xl`}></i>
                  </motion.div>
                  <h3 className="font-heading text-base font-bold text-foreground-900 mb-2">{value.title}</h3>
                  <p className="text-xs text-foreground-500 leading-relaxed">{value.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}