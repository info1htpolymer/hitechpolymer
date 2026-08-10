import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';
import ImageLightbox from '@/components/base/ImageLightbox';

const features = [
  {
    icon: 'ri-shield-check-line',
    title: 'Quality Assurance',
    description: 'Rigorous multi-stage quality control with advanced laboratory testing ensures every shipment meets international standards.',
    color: 'primary',
    image: 'https://readdy.ai/api/search-image?query=Laboratory%20quality%20control%20chemist%20in%20white%20coat%20testing%20yellow%20chemical%20powder%20with%20precision%20instruments%20on%20clean%20white%20bench%2C%20bright%20sterile%20environment%2C%20professional%20scientific%20photography&width=400&height=300&seq=htp-why-01&orientation=landscape',
  },
  {
    icon: 'ri-flask-line',
    title: 'Technical Expertise',
    description: 'Deep domain knowledge in ADC chemistry and EVA processing backed by continuous R&D and process innovation.',
    color: 'accent',
    image: 'https://readdy.ai/api/search-image?query=Chemical%20research%20scientist%20studying%20molecular%20structure%20models%20in%20modern%20laboratory%20with%20advanced%20analytical%20equipment%2C%20bright%20sterile%20environment%2C%20blue%20accent%20details%2C%20professional%20photography&width=400&height=300&seq=htp-why-02&orientation=landscape',
  },
  {
    icon: 'ri-settings-3-line',
    title: 'Customized Solutions',
    description: 'Tailored blowing agent formulations and technical support to match your specific manufacturing requirements.',
    color: 'primary',
    image: 'https://readdy.ai/api/search-image?query=Engineer%20working%20on%20custom%20chemical%20formulation%20with%20multiple%20glass%20vials%20and%20computer%20in%20modern%20research%20lab%2C%20clean%20white%20environment%2C%20precision%20work%2C%20professional%20photography&width=400&height=300&seq=htp-why-03&orientation=landscape',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Reliable Support',
    description: 'Dedicated technical service team providing responsive support from initial consultation through production optimization.',
    color: 'accent',
    image: 'https://readdy.ai/api/search-image?query=Professional%20technical%20support%20team%20meeting%20in%20modern%20conference%20room%2C%20clean%20corporate%20environment%2C%20blue%20accent%20decor%2C%20professional%20business%20photography%2C%20collaborative%20atmosphere&width=400&height=300&seq=htp-why-04&orientation=landscape',
  },
  {
    icon: 'ri-building-4-line',
    title: 'Industry Experience',
    description: '18+ years serving footwear, automotive, packaging, and construction sectors with proven expertise.',
    color: 'primary',
    image: 'https://readdy.ai/api/search-image?query=Large%20industrial%20chemical%20manufacturing%20facility%20production%20hall%20with%20clean%20equipment%20and%20organized%20production%20lines%2C%20modern%20factory%20interior%2C%20professional%20industrial%20photography%2C%20blue%20white%20color%20scheme&width=400&height=300&seq=htp-why-05&orientation=landscape',
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; border: string; glow: string }> = {
  primary: {
    bg: 'bg-primary-50',
    iconBg: 'bg-primary-500',
    border: 'border-primary-200/60',
    glow: 'shadow-primary-500/20',
  },
  accent: {
    bg: 'bg-accent-50',
    iconBg: 'bg-accent-500',
    border: 'border-accent-200/60',
    glow: 'shadow-accent-500/20',
  },
};

const floatingBgIcons = [
  { icon: 'ri-settings-3-line', x: '3%', y: '15%', delay: 0, color: 'text-primary-200' },
  { icon: 'ri-shield-check-line', x: '95%', y: '12%', delay: 1.2, color: 'text-accent-200' },
  { icon: 'ri-flask-line', x: '2%', y: '75%', delay: 0.6, color: 'text-accent-200' },
  { icon: 'ri-building-4-line', x: '96%', y: '72%', delay: 1.8, color: 'text-primary-200' },
  { icon: 'ri-customer-service-2-line', x: '50%', y: '3%', delay: 2.5, color: 'text-primary-100' },
];

export default function WhyChooseUs() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; index: number }[]>([]);
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  let rippleId = 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = ++rippleId;
    setRipples((prev) => [...prev, { id, x, y, index }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  }, []);

  return (
    <>
      <section className="relative py-20 md:py-28 bg-background-100/60 overflow-hidden" style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Very%20subtle%20abstract%20chemical%20laboratory%20background%20with%20faint%20hexagonal%20molecular%20patterns%20and%20soft%20warm%20cream%20tones%2C%20minimalist%20scientific%20aesthetic%2C%20extremely%20gentle%20texture%2C%20clean%20professional%20backdrop%20for%20website%20section%2C%20barely%20visible%20geometric%20shapes&width=1920&height=1200&seq=htp-why-bg&orientation=landscape)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background-100/85"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-50/30 blur-3xl pointer-events-none"></div>

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-20 w-72 h-72 rounded-full bg-accent-100/40 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary-100/35 blur-3xl pointer-events-none"
        />

        {/* Floating bg icons */}
        {floatingBgIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.color} pointer-events-none hidden lg:block opacity-15`}
            style={{ left: item.x, top: item.y, fontSize: '24px' }}
            animate={{ y: [0, -18, 0], rotate: [0, 10, -10, 0], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 5 + i * 0.7, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
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
                  <span className="text-xs font-semibold text-accent-600 tracking-wide uppercase">Why Choose Us</span>
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-900 mb-4">
                  What Sets <span className="text-primary-500">Us Apart</span>
                </h2>
                <p className="text-foreground-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                  We don&apos;t just manufacture chemicals — we deliver trusted partnerships
                  built on quality, expertise, and unwavering commitment to your success.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => {
                const colors = colorMap[feature.color];
                return (
                  <ScrollReveal key={feature.title} delay={i * 0.1}>
                    <motion.div
                      ref={(el) => { cardRefs.current[i] = el; }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onMouseMove={(e) => handleMouseMove(e, i)}
                      onClick={(e) => handleClick(e, i)}
                      className={`relative group p-0 rounded-2xl ${colors.bg} border ${colors.border} transition-all duration-300 hover:shadow-xl ${colors.glow} overflow-hidden cursor-default`}
                    >
                      {/* Card image at the top — click to open lightbox */}
                      <div
                        className="relative h-40 overflow-hidden cursor-pointer"
                        onClick={(e) => { e.stopPropagation(); setLightbox({ src: feature.image, title: feature.title }); }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/50 via-transparent to-transparent"></div>
                        {/* Floating icon inside image */}
                        <motion.div
                          animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                          className="absolute bottom-3 left-4 text-background-50/40 text-sm"
                        >
                          <i className={feature.icon}></i>
                        </motion.div>
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-background-50/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <i className="ri-zoom-in-line text-background-50 text-xs"></i>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Cursor-following spotlight */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                          style={{
                            background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), oklch(var(--${feature.color}-500) / 0.08), transparent 40%)`,
                          }}
                        />

                        {/* Ripple effects */}
                        {ripples
                          .filter((r) => r.index === i)
                          .map((r) => (
                            <span
                              key={r.id}
                              className="absolute rounded-full bg-foreground-400/10 pointer-events-none"
                              style={{
                                left: r.x,
                                top: r.y,
                                width: 20,
                                height: 20,
                                marginLeft: -10,
                                marginTop: -10,
                                animation: 'ripple 0.6s ease-out forwards',
                              }}
                            />
                          ))}

                        <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                          <i className={`${feature.icon} text-background-50 text-2xl`}></i>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-foreground-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-foreground-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ImageLightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        src={lightbox?.src || ''}
        alt={lightbox?.title || ''}
        caption={lightbox?.title}
      />
    </>
  );
}