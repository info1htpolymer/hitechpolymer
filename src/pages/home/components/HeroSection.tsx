import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: "https://storage.helloreaddy.io/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/0d12fb05-8ad2-4efe-871b-9551b316e569_compressed_WhatsApp-Image-2026-08-10-at-13.22.47.webp",
    subtitle: "Manufacturing Excellence",
    alt: "High Tech Polymers factory floor with industrial mixing equipment and HTP product bags",
  },
  {
    image: "https://storage.helloreaddy.io/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/9caf419a-41a6-4780-b0c3-3b7b5fb296ce_compressed_WhatsApp-Image-2026-08-10-at-13.22.48.webp",
    subtitle: "Quality Control Lab",
    alt: "High Tech Polymers quality testing laboratory with chemists analyzing chemical samples",
  },
  {
    image: "https://storage.helloreaddy.io/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/be4c2b27-44d7-4f24-ae60-d6a209893324_compressed_WhatsApp-Image-2026-08-10-at-13.22.49-1.webp",
    subtitle: "Our Facility",
    alt: "High Tech Polymers industrial manufacturing facility exterior building",
  },
  {
    image: "https://storage.helloreaddy.io/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/39c5efea-ee65-4ad9-b403-c55cefcc8be2_compressed_WhatsApp-Image-2026-08-10-at-13.22.49.webp",
    subtitle: "Production Process",
    alt: "High Tech Polymers production line with worker operating industrial powder mixer",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('get-in-touch');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[650px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src={slides[current].image}
              alt={slides[current].alt}
              className="w-full h-full object-cover object-center"
              loading={current === 0 ? 'eager' : 'lazy'}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/65 via-foreground-950/45 to-foreground-950/70"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-background-50/25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
            animate={{
              y: [0, -(100 + Math.random() * 40)],
              x: [0, (Math.random() - 0.5) * 80],
              opacity: [0, 0.7, 0],
              scale: [0.3, 1.8, 0.2],
            }}
            transition={{
              duration: 7 + Math.random() * 14,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'linear',
            }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute text-background-50/8"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              fontSize: `${20 + Math.random() * 40}px`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 5 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          >
            <i className={`${['ri-test-tube-line', 'ri-flask-line', 'ri-microscope-line', 'ri-dropper-line'][i % 4]} text-background-50/10`}></i>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-50/10 backdrop-blur-md border border-background-50/15 mb-6"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-accent-500"
              />
              <span className="text-xs font-medium text-background-50/80 tracking-wider uppercase">
                {slides[current].subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-background-50 leading-tight mb-6"
            >
              Engineering Cellular Performance{' '}
              <span className="text-accent-400">Into Polymers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-base md:text-lg text-background-50/70 max-w-xl leading-relaxed mb-10"
            >
              India&apos;s trusted manufacturer of Azodicarbonamide blowing agents and
              EVA processing technology — delivering precision, quality, and innovation
              to industries worldwide since 2007.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button
                onClick={scrollToProducts}
                className="group relative px-8 py-3.5 bg-accent-500 text-background-50 font-semibold text-sm rounded-xl overflow-hidden hover:bg-accent-600 transition-colors duration-200 whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-200"></i>
                </span>
                <motion.span
                  className="absolute inset-0 bg-background-50/20 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </button>
              <button
                onClick={scrollToContact}
                className="group px-8 py-3.5 bg-background-50/10 backdrop-blur-md text-background-50 font-semibold text-sm rounded-xl border border-background-50/20 hover:bg-background-50/20 hover:border-background-50/30 transition-all duration-200 whitespace-nowrap"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <i className="ri-send-plane-line group-hover:translate-x-1 transition-transform duration-200"></i>
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-400 rounded-full cursor-pointer ${
              i === current
                ? 'w-10 h-2.5 bg-accent-500'
                : 'w-2.5 h-2.5 bg-background-50/30 hover:bg-background-50/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <i className="ri-arrow-down-s-line text-background-50/40 text-2xl"></i>
      </motion.div>
    </section>
  );
}