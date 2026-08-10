import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';
import ImageLightbox from '@/components/base/ImageLightbox';

const stages = [
  {
    number: '01',
    icon: 'ri-microscope-line',
    title: 'Raw Material Analysis',
    subtitle: 'Incoming Inspection',
    description: 'Every raw material batch undergoes comprehensive spectroscopic and chromatographic analysis before entering production. We verify purity, particle characteristics, and chemical composition against stringent internal specifications.',
    highlights: ['FTIR Spectroscopy', 'HPLC Purity Analysis', 'Particle Size Distribution', 'Moisture Content Testing'],
    color: 'primary',
    image: "https://readdy.ai/api/search-image?query=Laboratory%20scientist%20in%20white%20coat%20examining%20yellow%20chemical%20powder%20sample%20with%20advanced%20spectrometer%20instrument%20on%20clean%20white%20bench%2C%20modern%20analytical%20chemistry%20laboratory%2C%20bright%20professional%20lighting%2C%20sterile%20environment%2C%20precision%20equipment%20with%20blue%20accent%20details&width=600&height=400&seq=htp-quality-stage1&orientation=landscape",
  },
  {
    number: '02',
    icon: 'ri-flask-line',
    title: 'In-Process Control',
    subtitle: 'Production Monitoring',
    description: 'Continuous real-time monitoring at every production stage ensures batch consistency. Our automated SCADA systems track critical parameters including temperature, pressure, pH, and reaction kinetics with precision accuracy.',
    highlights: ['Real-time SCADA Monitoring', 'Reaction Kinetics Tracking', 'Temperature & Pressure Control', 'Mid-batch Sampling'],
    color: 'accent',
    image: "https://readdy.ai/api/search-image?query=Chemical%20engineer%20monitoring%20digital%20control%20panel%20displaying%20process%20parameters%20in%20modern%20pharmaceutical%20plant%2C%20stainless%20steel%20reactor%20vessels%20in%20background%2C%20clean%20industrial%20environment%20with%20white%20walls%20and%20blue%20safety%20markings%2C%20professional%20manufacturing%20photography&width=600&height=400&seq=htp-quality-stage2&orientation=landscape",
  },
  {
    number: '03',
    icon: 'ri-test-tube-line',
    title: 'Laboratory Validation',
    subtitle: 'Final Product Testing',
    description: 'Finished products undergo rigorous multi-parameter testing including gas yield measurement, decomposition temperature verification, ash content analysis, and dispersion performance evaluation to guarantee product excellence.',
    highlights: ['Gas Yield Measurement', 'Decomposition Temp Analysis', 'Ash & Residue Testing', 'Dispersion Performance'],
    color: 'primary',
    image: "https://readdy.ai/api/search-image?query=Modern%20analytical%20chemistry%20laboratory%20with%20multiple%20testing%20stations%2C%20glass%20beakers%20with%20yellow%20chemical%20solutions%2C%20digital%20analytical%20balances%20and%20titration%20equipment%20on%20white%20benches%2C%20bright%20scientific%20workspace%2C%20clean%20organized%20environment&width=600&height=400&seq=htp-quality-stage3&orientation=landscape",
  },
  {
    number: '04',
    icon: 'ri-shield-star-line',
    title: 'Certification & Release',
    subtitle: 'Quality Sign-off',
    description: 'Only after passing all quality gates does a batch receive its Certificate of Analysis and release authorization. Complete batch traceability documentation ensures full compliance with industry quality standards.',
    highlights: ['Certificate of Analysis', 'Complete Quality Documentation', 'Complete Batch Traceability', 'Final Release Authorization'],
    color: 'accent',
    image: "https://readdy.ai/api/search-image?query=Professional%20quality%20control%20manager%20in%20white%20lab%20coat%20reviewing%20test%20reports%20at%20clean%20modern%20desk%2C%20organized%20office%20environment%20with%20blue%20accent%20elements%2C%20professional%20corporate%20photography&width=600&height=400&seq=htp-quality-stage4&orientation=landscape",
  },
];

const colorConfig: Record<string, { badge: string; border: string; glow: string; dot: string; highlightBg: string; highlightText: string; highlightBorder: string }> = {
  primary: {
    badge: 'bg-primary-500',
    border: 'border-primary-200/60',
    glow: 'shadow-primary-500/15',
    dot: 'bg-primary-500',
    highlightBg: 'bg-primary-50',
    highlightText: 'text-primary-700',
    highlightBorder: 'border-primary-200/60',
  },
  accent: {
    badge: 'bg-accent-500',
    border: 'border-accent-200/60',
    glow: 'shadow-accent-500/15',
    dot: 'bg-accent-500',
    highlightBg: 'bg-accent-50',
    highlightText: 'text-accent-700',
    highlightBorder: 'border-accent-200/60',
  },
};

const floatingQualityIcons = [
  { icon: 'ri-shield-check-line', x: '2%', y: '20%', delay: 0, color: 'text-primary-300' },
  { icon: 'ri-award-line', x: '96%', y: '30%', delay: 1, color: 'text-accent-300' },
  { icon: 'ri-test-tube-line', x: '4%', y: '70%', delay: 2, color: 'text-primary-200' },
  { icon: 'ri-flask-line', x: '94%', y: '65%', delay: 0.5, color: 'text-accent-200' },
  { icon: 'ri-microscope-line', x: '50%', y: '2%', delay: 1.5, color: 'text-primary-200' },
  { icon: 'ri-file-list-3-line', x: '48%', y: '95%', delay: 2.5, color: 'text-accent-300' },
];

export default function QualityAssurance() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const [activeStage, setActiveStage] = useState(0);
  const autoCycleRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const startAutoCycle = useCallback(() => {
    if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    autoCycleRef.current = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 3000);
  }, []);

  useEffect(() => {
    startAutoCycle();
    return () => {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    };
  }, [startAutoCycle]);

  const handleStageHover = (i: number) => {
    setHoveredStage(i);
    setActiveStage(i);
    if (autoCycleRef.current) clearInterval(autoCycleRef.current);
  };

  const handleStageLeave = () => {
    setHoveredStage(null);
    startAutoCycle();
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-background-50 overflow-hidden" style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Minimalist%20clean%20white%20laboratory%20background%20with%20subtle%20chemical%20molecular%20structures%20faded%20into%20backdrop%2C%20soft%20blue%20and%20grey%20tones%2C%20organized%20scientific%20workspace%20aesthetic%2C%20very%20faint%20hexagon%20pattern%2C%20gentle%20atmosphere%20for%20professional%20quality%20control%20page%20background&width=1920&height=1200&seq=htp-quality-bg&orientation=landscape)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-background-50/85"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-50/40 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-50/30 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      {/* Floating icons in blank areas */}
      {floatingQualityIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} pointer-events-none hidden lg:block opacity-20`}
          style={{ left: item.x, top: item.y, fontSize: '22px' }}
          animate={{ y: [0, -16, 0], rotate: [0, 8, -8, 0], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
        >
          <i className={item.icon}></i>
        </motion.div>
      ))}

      <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200/60 mb-5">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-accent-500"
                />
                <span className="text-xs font-semibold text-accent-600 tracking-wide uppercase">Quality Assurance</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-900 mb-4">
                Quality That{' '}
                <span className="text-primary-500">Speaks For Itself</span>
              </h2>
              <p className="text-foreground-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Our four-stage quality framework ensures every shipment meets the highest
                international standards — from raw material intake to final certification.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive stage timeline */}
          <ScrollReveal>
            <div className="flex items-center justify-center gap-0 mb-14 overflow-x-auto px-4">
              {stages.map((stage, i) => {
                const colors = colorConfig[stage.color];
                const isActive = activeStage === i;
                return (
                  <div key={stage.number} className="flex items-center flex-shrink-0">
                    <motion.button
                      onClick={() => setActiveStage(i)}
                      onMouseEnter={() => handleStageHover(i)}
                      onMouseLeave={handleStageLeave}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className={`relative flex flex-col items-center gap-2 cursor-pointer group`}
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? 1.15 : 1,
                          boxShadow: isActive
                            ? `0 0 24px oklch(var(--${stage.color}-500) / 0.4)`
                            : '0 0 0px oklch(var(--primary-500) / 0)',
                        }}
                        transition={{ duration: 0.4 }}
                        className={`w-14 h-14 rounded-2xl ${isActive ? colors.badge : 'bg-background-200'} flex items-center justify-center transition-colors duration-300`}
                      >
                        <i className={`${stage.icon} ${isActive ? 'text-background-50' : 'text-foreground-500'} text-xl transition-colors duration-300`}></i>
                        {/* Pulse ring on active */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.6, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                            className={`absolute inset-0 rounded-2xl border-2 border-${stage.color}-400`}
                          />
                        )}
                      </motion.div>
                      <span className={`text-xs font-semibold whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-foreground-900' : 'text-foreground-500'}`}>
                        {stage.subtitle}
                      </span>
                    </motion.button>

                    {/* Animated connector line between stages */}
                    {i < stages.length - 1 && (
                      <div className="relative w-10 md:w-16 h-0.5 mx-1">
                        <div className="absolute inset-0 bg-background-200 rounded-full"></div>
                        <motion.div
                          animate={{
                            width: isActive ? '100%' : '0%',
                          }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                          className={`absolute left-0 top-0 h-full ${i === 0 || i === 2 ? 'bg-primary-500' : 'bg-accent-500'} rounded-full`}
                        />
                        {/* Flowing dot on active connector */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ left: '0%' }}
                              animate={{ left: '100%' }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                              className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${i === 0 || i === 2 ? 'bg-primary-500' : 'bg-accent-500'} shadow-lg`}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {stages.map((stage, i) => {
              const colors = colorConfig[stage.color];
              const isHovered = hoveredStage === i;
              const isActive = activeStage === i;

              return (
                <ScrollReveal key={stage.number} delay={i * 0.12} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <motion.div
                    onMouseEnter={() => handleStageHover(i)}
                    onMouseLeave={handleStageLeave}
                    whileHover={{ y: -4 }}
                    animate={{
                      scale: isActive ? 1.02 : 1,
                      borderColor: isActive ? `oklch(var(--${stage.color}-400) / 0.5)` : undefined,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`relative group bg-background-50 rounded-2xl border ${isActive ? (stage.color === 'primary' ? 'border-primary-300/60' : 'border-accent-300/60') : colors.border} p-5 md:p-6 transition-all duration-400 hover:shadow-xl ${colors.glow}`}
                  >
                    {/* Active stage highlight glow */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute -inset-1 rounded-2xl pointer-events-none"
                          style={{
                            background: `radial-gradient(600px circle at 50% 50%, oklch(var(--${stage.color}-500) / 0.08), transparent 60%)`,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <div className="flex flex-col lg:flex-row gap-5 relative z-10">
                      <div
                        className="relative w-full lg:w-44 h-36 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
                        onClick={() => setLightbox({ src: stage.image, title: stage.title })}
                      >
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/50 via-transparent to-transparent"></div>

                        {/* Floating small icons in image corners */}
                        <motion.div
                          animate={{ y: [0, -4, 0], opacity: [0.4, 0.7, 0.4] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          className="absolute top-2 right-2 text-background-50/50 text-xs"
                        >
                          <i className={stage.icon}></i>
                        </motion.div>

                        {/* Animated stage number badge */}
                        <div className="absolute top-2 left-2">
                          <motion.div
                            animate={isActive ? { scale: [1, 1.15, 1], rotate: [0, 3, -3, 0] } : {}}
                            transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
                            className={`w-10 h-10 rounded-xl ${colors.badge} flex items-center justify-center shadow-lg`}
                          >
                            {/* Spinning ring on active */}
                            {isActive && (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-xl border-2 border-background-50/30"
                              />
                            )}
                            <i className={`${stage.icon} text-background-50 text-lg relative z-10`}></i>
                          </motion.div>
                        </div>
                        <div className="absolute bottom-2 right-3">
                          <motion.span
                            animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
                            className="text-2xl font-heading font-bold text-background-50/90 tracking-wider"
                          >
                            {stage.number}
                          </motion.span>
                        </div>
                        {/* Zoom overlay */}
                        <div className="absolute inset-0 bg-background-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-background-50/30 flex items-center justify-center">
                            <i className="ri-zoom-in-line text-background-50 text-sm"></i>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <motion.div
                            animate={isActive ? { scale: [1, 1.5, 1] } : {}}
                            transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                            className={`w-2 h-2 rounded-full ${colors.dot}`}
                          />
                          <span className="text-xs font-semibold text-foreground-500 uppercase tracking-wider">
                            {stage.subtitle}
                          </span>
                          {/* Active indicator */}
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: 'auto' }}
                              exit={{ opacity: 0, width: 0 }}
                              className="text-[10px] font-bold text-background-50 bg-primary-500 px-2 py-0.5 rounded-full ml-auto"
                            >
                              ACTIVE
                            </motion.span>
                          )}
                        </div>
                        <h3 className="font-heading text-lg md:text-xl font-bold text-foreground-900 mb-2.5">
                          {stage.title}
                        </h3>
                        <p className="text-sm text-foreground-600 leading-relaxed mb-4">
                          {stage.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {stage.highlights.map((h, hi) => (
                            <motion.span
                              key={h}
                              whileHover={{ scale: 1.05 }}
                              initial={isActive ? { opacity: 0, x: -8 } : {}}
                              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.85, x: 0 }}
                              transition={{ delay: 0.2 + hi * 0.1, duration: 0.3 }}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium ${colors.highlightText} ${colors.highlightBg} rounded-lg border ${colors.highlightBorder} whitespace-nowrap transition-colors`}
                            >
                              <motion.i
                                animate={isActive ? { rotate: [0, 360] } : {}}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: hi * 0.3 }}
                                className="ri-check-line text-xs"
                              />
                              {h}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
              {[
                { icon: 'ri-shield-check-line', label: 'Rigorous QC Protocols', value: 'Every Batch Tested' },
                { icon: 'ri-test-tube-line', label: 'Advanced Laboratory', value: '15+ Instruments' },
                { icon: 'ri-team-line', label: 'Expert QC Team', value: '20+ Specialists' },
                { icon: 'ri-file-list-3-line', label: 'Full Traceability', value: '100% Batch Records' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-background-100/80 border border-background-200/60"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                    className={`w-10 h-10 rounded-xl ${idx % 2 === 0 ? 'bg-primary-500' : 'bg-accent-500'} flex items-center justify-center flex-shrink-0`}
                  >
                    <i className={`${stat.icon} text-background-50 text-lg`}></i>
                  </motion.div>
                  <div>
                    <p className="text-xs text-foreground-500">{stat.label}</p>
                    <p className="text-sm font-bold text-foreground-900">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <ImageLightbox
            isOpen={!!lightbox}
            onClose={() => setLightbox(null)}
            src={lightbox.src}
            alt={lightbox.title}
            caption={lightbox.title}
          />
        )}
      </AnimatePresence>
    </section>
  );
}