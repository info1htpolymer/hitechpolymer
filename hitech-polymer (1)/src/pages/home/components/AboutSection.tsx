import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';
import AnimatedCounter from '@/components/base/AnimatedCounter';
import ImageLightbox from '@/components/base/ImageLightbox';

const stats = [
  { value: 18, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Industrial Clients' },
  { value: 12, suffix: '+', label: 'Countries Served' },
  { value: 50, suffix: 'K+', label: 'Tons Annual Capacity' },
];

const galleryImages = [
  {
    src: 'https://readdy.ai/api/search-image?query=Modern%20chemical%20polymer%20manufacturing%20plant%20exterior%20with%20white%20walls%20and%20blue%20glass%20facade%2C%20clean%20industrial%20architecture%2C%20bright%20daylight%2C%20corporate%20headquarters%20style%2C%20green%20landscaping&width=800&height=600&seq=htp-about-gallery-01&orientation=landscape',
    title: 'Our Manufacturing Facility',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Laboratory%20chemist%20in%20white%20coat%20performing%20quality%20testing%20in%20bright%20modern%20lab%2C%20glass%20beakers%20with%20yellow%20chemical%20solutions%2C%20analytical%20instruments%2C%20clean%20sterile%20environment%2C%20professional%20photography&width=800&height=600&seq=htp-about-gallery-02&orientation=landscape',
    title: 'In-House Laboratory',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Team%20of%20engineers%20in%20hard%20hats%20and%20safety%20gear%20inspecting%20chemical%20processing%20equipment%20in%20modern%20factory%2C%20professional%20industrial%20photography%2C%20blue%20safety%20uniform%2C%20bright%20lighting&width=800&height=600&seq=htp-about-gallery-03&orientation=landscape',
    title: 'Expert Team',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=Sealed%20industrial%20packaging%20bags%20of%20chemical%20powder%20product%20stacked%20in%20organized%20warehouse%2C%20professional%20product%20photography%2C%20clean%20organized%20storage%2C%20blue%20and%20white%20color%20scheme&width=800&height=600&seq=htp-about-gallery-04&orientation=landscape',
    title: 'Quality Products',
  },
];

const floatingIcons = [
  { icon: 'ri-flask-line', x: '8%', y: '15%', delay: 0, duration: 5, color: 'text-primary-300' },
  { icon: 'ri-test-tube-line', x: '88%', y: '22%', delay: 1, duration: 6, color: 'text-accent-300' },
  { icon: 'ri-lightbulb-line', x: '5%', y: '68%', delay: 2, duration: 7, color: 'text-primary-300' },
  { icon: 'ri-dropper-line', x: '92%', y: '65%', delay: 0.5, duration: 5.5, color: 'text-accent-300' },
  { icon: 'ri-microscope-line', x: '50%', y: '5%', delay: 1.5, duration: 8, color: 'text-primary-200' },
  { icon: 'ri-shield-star-line', x: '38%', y: '88%', delay: 2.5, duration: 6.5, color: 'text-accent-200' },
];

export default function AboutSection() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="about" className="relative py-20 md:py-28 bg-background-50 overflow-hidden" style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Very%20subtle%20abstract%20polymer%20molecular%20chain%20pattern%20on%20light%20grey%20background%2C%20extremely%20faint%20geometric%20hexagonal%20chemical%20structure%2C%20minimalist%20scientific%20decorative%20backdrop%2C%20soft%20grey%20and%20warm%20white%20tones%2C%20clean%20modern%20laboratory%20aesthetic%2C%20barely%20visible%20texture%20for%20website%20section%20background&width=1920&height=1200&seq=htp-about-bg&orientation=landscape)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-background-50/80"></div>
      {/* Animated mesh gradient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-50/50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none animate-mesh-blob-1"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-50/30 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none animate-mesh-blob-2"></div>

      {/* Floating decorative chemical icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} pointer-events-none hidden lg:block opacity-20`}
          style={{ left: item.x, top: item.y, fontSize: '24px' }}
          animate={{
            y: [0, -20, 0, -10, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: 'easeInOut',
          }}
        >
          <i className={item.icon}></i>
        </motion.div>
      ))}

      {/* Large morphing blob behind image */}
      <motion.div
        className="absolute left-[10%] top-[30%] w-80 h-80 bg-gradient-to-br from-primary-200/20 to-accent-200/15 pointer-events-none hidden lg:block"
        animate={{
          borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%'],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'blur(60px)' }}
      />

      <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-16">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setLightbox({ src: 'https://storage.helloreaddy.io/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/be4c2b27-44d7-4f24-ae60-d6a209893324_compressed_WhatsApp-Image-2026-08-10-at-13.22.49-1.webp', title: 'Our Manufacturing Facility' })}>
                  <img
                    src="https://storage.helloreaddy.io/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/be4c2b27-44d7-4f24-ae60-d6a209893324_compressed_WhatsApp-Image-2026-08-10-at-13.22.49-1.webp"
                    alt="High Tech Polymers manufacturing facility exterior"
                    className="w-full h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background-50/10 to-transparent animate-shine-sweep" />
                  </div>
                  {/* Zoom indicator */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background-50/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="ri-zoom-in-line text-background-50 text-sm"></i>
                  </div>
                </div>

                {/* Floating chemical icons near image */}
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-8 top-16 hidden xl:flex items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 border border-primary-200/60 flex items-center justify-center shadow-sm">
                    <i className="ri-flask-line text-primary-500 text-xl"></i>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -right-8 top-36 hidden xl:flex items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent-50 border border-accent-200/60 flex items-center justify-center shadow-sm">
                    <i className="ri-test-tube-line text-accent-500 text-xl"></i>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute -right-8 top-56 hidden xl:flex items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 border border-primary-200/60 flex items-center justify-center shadow-sm">
                    <i className="ri-microscope-line text-primary-500 text-xl"></i>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -right-6 bg-background-50 rounded-2xl p-5 shadow-lg border border-background-200/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                      <motion.i
                        className="ri-award-line text-primary-500 text-2xl"
                        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground-900 font-heading">
                        <AnimatedCounter end={18} suffix="+" />
                      </div>
                      <p className="text-xs text-foreground-500">Years of Excellence</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 bg-background-50 rounded-xl px-4 py-3 shadow-lg border border-background-200/60 hidden lg:flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center">
                    <i className="ri-shield-check-line text-accent-500 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground-900">Since 2007</p>
                    <p className="text-[10px] text-foreground-500">Trusted Manufacturer</p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200/60 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-primary-600 tracking-wide uppercase">About Us</span>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 leading-tight mb-6">
                  Engineering The Future of{' '}
                  <span className="text-primary-500">Polymer Technology</span>
                </h2>

                <p className="text-foreground-600 leading-relaxed mb-5">
                  Founded in 2007, High-Tech Polymers has grown into one of India&apos;s premier
                  manufacturers of Azodicarbonamide (ADC) blowing agents and EVA processing
                  solutions. We combine deep technical expertise with state-of-the-art
                  manufacturing to deliver consistent, high-performance products.
                </p>

                <p className="text-foreground-600 leading-relaxed mb-8">
                  Our mission is to empower industries with superior chemical solutions that
                  enhance product quality, reduce costs, and drive innovation. Every batch
                  leaving our facility represents our commitment to precision and excellence.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className="text-center p-4 rounded-xl bg-background-100/80 border border-background-200/40 transition-all duration-200 hover:border-primary-200/60 hover:shadow-lg hover:shadow-primary-500/10 cursor-default"
                    >
                      <div className="font-heading text-2xl md:text-3xl font-bold text-primary-500 mb-1">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-xs text-foreground-500 font-medium leading-tight">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image gallery strip */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -4 }}
                  onClick={() => setLightbox(img)}
                  className="relative rounded-xl overflow-hidden h-36 cursor-pointer group"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-xs font-semibold text-background-50">{img.title}</span>
                  </div>
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-background-50/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="ri-zoom-in-line text-background-50 text-xs"></i>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
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