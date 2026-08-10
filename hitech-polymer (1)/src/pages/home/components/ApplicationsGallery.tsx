import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';
import { AnimTiltedCard } from '@readdy/anim/card/tilted-card/react';

const galleryItems = [
  {
    id: 1,
    src: 'https://readdy.ai/api/search-image?query=White%20EVA%20shoe%20soles%20and%20footwear%20components%20neatly%20displayed%20on%20clean%20white%20surface%2C%20professional%20product%20photography%2C%20soft%20studio%20lighting%2C%20minimalist%20composition%2C%20industrial%20product%20showcase%2C%20clean%20background&width=600&height=750&seq=htp-gal-01&orientation=portrait',
    title: 'Shoe Soles',
    category: 'Footwear',
    cols: 1,
  },
  {
    id: 2,
    src: 'https://readdy.ai/api/search-image?query=Colorful%20EVA%20foam%20sheets%20in%20various%20colors%20stacked%20neatly%2C%20professional%20product%20photography%2C%20clean%20white%20background%2C%20soft%20lighting%2C%20minimalist%20composition%2C%20industrial%20material%20showcase&width=600&height=450&seq=htp-gal-02&orientation=landscape',
    title: 'EVA Sheets',
    category: 'EVA Foam',
    cols: 2,
  },
  {
    id: 3,
    src: 'https://readdy.ai/api/search-image?query=White%20protective%20foam%20packaging%20inserts%20and%20cushions%20arranged%20on%20clean%20surface%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20minimalist%20composition%2C%20industrial%20product%20showcase&width=600&height=600&seq=htp-gal-03&orientation=squarish',
    title: 'Foam Packaging',
    category: 'Packaging',
    cols: 1,
  },
  {
    id: 4,
    src: 'https://readdy.ai/api/search-image?query=Black%20rubber%20products%20and%20foamed%20rubber%20components%20displayed%20on%20white%20surface%2C%20professional%20product%20photography%2C%20clean%20background%2C%20soft%20lighting%2C%20industrial%20product%20showcase&width=600&height=450&seq=htp-gal-04&orientation=landscape',
    title: 'Rubber Products',
    category: 'Rubber',
    cols: 2,
  },
  {
    id: 5,
    src: 'https://readdy.ai/api/search-image?query=White%20PVC%20foam%20profiles%20and%20extruded%20components%20displayed%20on%20clean%20surface%2C%20professional%20product%20photography%2C%20soft%20studio%20lighting%2C%20minimalist%20composition%2C%20industrial%20product%20showcase&width=600&height=750&seq=htp-gal-05&orientation=portrait',
    title: 'PVC Profiles',
    category: 'PVC',
    cols: 1,
  },
  {
    id: 6,
    src: 'https://readdy.ai/api/search-image?query=Thermal%20insulation%20foam%20panels%20and%20boards%20displayed%20on%20clean%20white%20surface%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20minimalist%20composition%2C%20industrial%20material%20showcase&width=600&height=450&seq=htp-gal-06&orientation=landscape',
    title: 'Insulation Materials',
    category: 'Insulation',
    cols: 2,
  },
];

export default function ApplicationsGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <>
      <section className="relative py-20 md:py-28 bg-background-100/60 overflow-hidden" style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Very%20soft%20abstract%20industrial%20product%20photography%20backdrop%20with%20subtle%20warm%20cream%20and%20beige%20tones%2C%20extremely%20faint%20grid%20pattern%2C%20clean%20minimalist%20gallery%20background%20texture%2C%20gentle%20diffused%20lighting%2C%20professional%20product%20display%20atmosphere%20for%20website%20portfolio%20section&width=1920&height=1200&seq=htp-gallery-bg&orientation=landscape)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background-100/45"></div>
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200/60 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-primary-600 tracking-wide uppercase">Applications Gallery</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-950 mb-4">
                See Our Products <span className="text-accent-600">In Action</span>
              </h2>
              <p className="text-foreground-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                From footwear to packaging, our products deliver consistent quality
                across diverse applications worldwide.
              </p>
            </div>

            <div className="masonry-grid">
              {galleryItems.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.1}>
                  {reducedMotion ? (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedImage(item)}
                      className="group relative cursor-pointer rounded-2xl overflow-hidden"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <div>
                          <h4 className="font-heading text-base font-bold text-background-50">{item.title}</h4>
                          <p className="text-xs text-background-50/70">{item.category}</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <AnimTiltedCard maxTilt={12} strength={0.08}>
                      <motion.div
                        onClick={() => setSelectedImage(item)}
                        className="group relative cursor-pointer rounded-2xl overflow-hidden"
                      >
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                          <div>
                            <h4 className="font-heading text-base font-bold text-background-50">{item.title}</h4>
                            <p className="text-xs text-background-50/70">{item.category}</p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimTiltedCard>
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-foreground-950/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-background-50/10 text-background-50 hover:bg-background-50/20 transition-colors"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <h4 className="font-heading text-xl font-bold text-background-50">{selectedImage.title}</h4>
                <p className="text-sm text-background-50/60">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}