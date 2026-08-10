import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';
import ImageLightbox from '@/components/base/ImageLightbox';

const steps = [
  {
    icon: 'ri-database-2-line',
    title: 'Raw Material',
    desc: 'Premium-grade raw materials sourced from verified suppliers with complete traceability.',
    color: 'primary',
    image: 'https://readdy.ai/api/search-image?query=Premium%20raw%20chemical%20materials%20in%20sealed%20drums%20and%20bags%20in%20a%20clean%20industrial%20warehouse%2C%20white%20and%20blue%20color%20scheme%2C%20organized%20storage%20facility%2C%20professional%20industrial%20photography%2C%20bright%20lighting%2C%20safety%20labels%20visible&width=600&height=400&seq=htp-mfg-step1&orientation=landscape',
    floatIcons: [
      { icon: 'ri-box-3-line', x: '80%', y: '15%' },
      { icon: 'ri-truck-line', x: '10%', y: '75%' },
    ],
  },
  {
    icon: 'ri-reactjs-line',
    title: 'Processing',
    desc: 'Controlled chemical synthesis and precision manufacturing in state-of-the-art reactors.',
    color: 'accent',
    image: 'https://readdy.ai/api/search-image?query=Chemical%20processing%20plant%20stainless%20steel%20reactor%20vessels%20with%20pipes%20and%20instrumentation%2C%20clean%20industrial%20manufacturing%20environment%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20industrial%20photography%2C%20modern%20chemical%20production%20facility&width=600&height=400&seq=htp-mfg-step2&orientation=landscape',
    floatIcons: [
      { icon: 'ri-settings-3-line', x: '85%', y: '20%' },
      { icon: 'ri-temp-hot-line', x: '8%', y: '60%' },
    ],
  },
  {
    icon: 'ri-microscope-line',
    title: 'Lab Testing',
    desc: 'Comprehensive analytical testing including purity, particle size, and gas yield analysis.',
    color: 'primary',
    image: 'https://readdy.ai/api/search-image?query=Laboratory%20chemist%20in%20white%20coat%20performing%20analytical%20testing%20with%20microscope%20and%20instruments%20on%20clean%20white%20bench%2C%20glass%20beakers%20with%20yellow%20chemical%20samples%2C%20bright%20scientific%20laboratory%2C%20professional%20photography&width=600&height=400&seq=htp-mfg-step3&orientation=landscape',
    floatIcons: [
      { icon: 'ri-microscope-line', x: '82%', y: '12%' },
      { icon: 'ri-test-tube-line', x: '12%', y: '70%' },
    ],
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Quality Inspection',
    desc: 'Multi-point quality checks at every production stage to ensure batch consistency.',
    color: 'accent',
    image: 'https://readdy.ai/api/search-image?query=Quality%20control%20engineer%20inspecting%20chemical%20product%20samples%20with%20digital%20measuring%20instrument%20in%20modern%20industrial%20lab%2C%20clean%20environment%2C%20professional%20safety%20equipment%2C%20blue%20accent%20lighting%2C%20professional%20photography&width=600&height=400&seq=htp-mfg-step4&orientation=landscape',
    floatIcons: [
      { icon: 'ri-shield-check-line', x: '80%', y: '18%' },
      { icon: 'ri-clipboard-line', x: '10%', y: '65%' },
    ],
  },
  {
    icon: 'ri-archive-line',
    title: 'Packaging',
    desc: 'Moisture-resistant industrial packaging with proper labeling and documentation.',
    color: 'primary',
    image: 'https://readdy.ai/api/search-image?query=Industrial%20chemical%20product%20packaging%20line%20with%20sealed%20bags%20and%20drums%20being%20labeled%2C%20clean%20modern%20packaging%20facility%2C%20organized%20production%20environment%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20industrial%20photography&width=600&height=400&seq=htp-mfg-step5&orientation=landscape',
    floatIcons: [
      { icon: 'ri-archive-line', x: '78%', y: '15%' },
      { icon: 'ri-barcode-line', x: '12%', y: '72%' },
    ],
  },
  {
    icon: 'ri-truck-line',
    title: 'Delivery',
    desc: 'Timely dispatch with full logistics support to domestic and international destinations.',
    color: 'accent',
    image: 'https://readdy.ai/api/search-image?query=Industrial%20logistics%20loading%20bay%20with%20chemical%20products%20being%20loaded%20into%20delivery%20truck%2C%20clean%20modern%20warehouse%2C%20professional%20logistics%20photography%2C%20blue%20accent%20elements%2C%20organized%20dispatch%20area&width=600&height=400&seq=htp-mfg-step6&orientation=landscape',
    floatIcons: [
      { icon: 'ri-truck-line', x: '80%', y: '12%' },
      { icon: 'ri-global-line', x: '8%', y: '68%' },
    ],
  },
];

export default function ManufacturingProcess() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{
      backgroundImage: 'url(https://readdy.ai/api/search-image?query=Abstract%20dark%20blue%20industrial%20chemical%20factory%20background%20with%20soft%20geometric%20grid%20lines%20and%20molecular%20patterns%2C%20very%20subtle%20texture%2C%20deep%20navy%20to%20slate%20gradient%2C%20clean%20professional%20background%20image%20for%20industrial%20website%20section&width=1920&height=1200&seq=htp-mfg-bg&orientation=landscape)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground-950/80 backdrop-blur-sm"></div>

      {/* Animated blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-500/10 blur-3xl pointer-events-none"
      />

      <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/15 border border-primary-400/25 mb-5">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary-400"
                />
                <span className="text-xs font-semibold text-primary-300 tracking-wide uppercase">Our Process</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-background-50 mb-4">
                Manufacturing <span className="text-accent-400">Excellence</span>
              </h2>
              <p className="text-background-50/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Every product follows a rigorous six-stage process ensuring quality,
                consistency, and reliability from start to finish.
              </p>
            </div>
          </ScrollReveal>

          {/* Animated timeline connector */}
          <div className="relative">
            <div className="absolute top-[40px] left-[8%] right-[8%] h-0.5 hidden lg:flex items-center">
              <div className="w-full h-full bg-background-50/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 rounded-full"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, delay: 0.5, ease: 'easeInOut' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 mb-16">
              {steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.1} direction="up">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex flex-col items-center text-center group cursor-default"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -6, 6, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 relative z-10 transition-all duration-400 ${
                        step.color === 'primary'
                          ? 'bg-primary-500 text-background-50 group-hover:shadow-xl group-hover:shadow-primary-500/40'
                          : 'bg-accent-500 text-background-50 group-hover:shadow-xl group-hover:shadow-accent-500/40'
                      }`}
                    >
                      <i className={`${step.icon} text-2xl`}></i>
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-background-50 border-2 border-background-200/40 flex items-center justify-center text-xs font-bold text-foreground-700 shadow-sm"
                      >
                        {i + 1}
                      </motion.div>
                    </motion.div>

                    <h4 className="font-heading text-sm md:text-base font-bold text-background-50 mb-2 group-hover:text-accent-300 transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-xs text-background-50/50 leading-relaxed group-hover:text-background-50/70 transition-colors duration-300">
                      {step.desc}
                    </p>

                    {i < steps.length - 1 && (
                      <motion.div
                        className="hidden lg:flex absolute top-10 -right-3 z-0"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                      >
                        <i className="ri-arrow-right-s-line text-background-50/20 text-xl"></i>
                      </motion.div>
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Photo grid for each step */}
          <ScrollReveal>
            <h3 className="font-heading text-xl font-bold text-background-50 mb-6 text-center">
              See Each Stage in Our Facility
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <ScrollReveal key={`img-${i}`} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  onClick={() => setLightbox({ src: step.image, title: step.title })}
                  className="relative rounded-xl overflow-hidden h-32 cursor-pointer group"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/70 via-transparent to-transparent group-hover:from-foreground-950/85 transition-all duration-400"></div>
                  {/* Floating icons inside the image area */}
                  {step.floatIcons.map((fi, fi_idx) => (
                    <motion.div
                      key={fi_idx}
                      className={`absolute text-background-50/30 pointer-events-none text-xs`}
                      style={{ left: fi.x, top: fi.y }}
                      animate={{ y: [0, -6, 0], opacity: [0.2, 0.45, 0.2] }}
                      transition={{ duration: 3 + fi_idx * 0.7, repeat: Infinity, ease: 'easeInOut', delay: fi_idx * 1 }}
                    >
                      <i className={fi.icon}></i>
                    </motion.div>
                  ))}
                  <div className="absolute inset-0 flex items-end p-3">
                    <span className="text-xs font-semibold text-background-50/90">{step.title}</span>
                  </div>
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-background-50/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="ri-zoom-in-line text-background-50 text-xs"></i>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        src={lightbox?.src || ''}
        alt={lightbox?.title || ''}
        caption={lightbox?.title}
      />
    </section>
  );
}