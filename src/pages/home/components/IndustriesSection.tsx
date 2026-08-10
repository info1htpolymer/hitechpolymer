import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';
import Modal from '@/components/base/Modal';

const industries = [
  {
    id: 'footwear',
    name: 'Footwear',
    icon: 'ri-footprint-line',
    image: 'https://readdy.ai/api/search-image?query=Modern%20sports%20shoe%20manufacturing%20production%20line%20with%20colorful%20EVA%20foam%20shoe%20soles%20being%20processed%2C%20clean%20factory%20environment%2C%20white%20and%20blue%20color%20scheme%2C%20professional%20industrial%20photography%2C%20bright%20lighting%2C%20organized%20workspace%2C%20manufacturing%20facility&width=600&height=450&seq=htp-ind-01&orientation=landscape',
    description: 'High-performance ADC blowing agents for footwear sole manufacturing, delivering lightweight cushioning, durability, and consistent cell structure across EVA, rubber, and PU foam applications.',
    details: 'Our ADC blowing agents are specifically engineered for footwear applications, providing optimal cell size distribution for superior cushioning and rebound properties. Used by leading footwear manufacturers for athletic shoes, casual footwear, sandals, and safety shoes.',
    applications: ['Athletic shoes', 'Casual footwear', 'Sandals & slippers', 'Safety shoes', 'Orthopedic footwear'],
  },
  {
    id: 'eva-foam',
    name: 'EVA Foam',
    icon: 'ri-stack-line',
    image: 'https://readdy.ai/api/search-image?query=Stacked%20colorful%20EVA%20foam%20sheets%20in%20various%20thicknesses%20and%20colors%20neatly%20arranged%20in%20a%20clean%20warehouse%2C%20professional%20industrial%20product%20photography%2C%20bright%20even%20lighting%2C%20organized%20inventory%2C%20white%20background%20setting&width=600&height=450&seq=htp-ind-02&orientation=landscape',
    description: 'Specialized ADC grades for EVA foam sheet and roll production, ensuring uniform expansion, smooth surface finish, and consistent density across the entire product.',
    details: 'EVA foam manufacturing demands precise blowing agent performance for consistent product quality. Our formulations deliver uniform cell structure, controlled expansion, and excellent surface aesthetics for foam sheets, rolls, and blocks.',
    applications: ['Foam sheets & rolls', 'Yoga mats', 'Sports padding', 'Craft foam', 'Industrial gaskets'],
  },
  {
    id: 'pvc',
    name: 'PVC Processing',
    icon: 'ri-building-line',
    image: 'https://readdy.ai/api/search-image?query=PVC%20foam%20board%20and%20profile%20extrusion%20production%20line%20in%20modern%20factory%2C%20white%20PVC%20products%20being%20manufactured%2C%20clean%20industrial%20setting%2C%20professional%20photography%2C%20bright%20workspace%2C%20blue%20safety%20markings&width=600&height=450&seq=htp-ind-03&orientation=landscape',
    description: 'ADC blowing agents optimized for PVC foam board, profile extrusion, and leather cloth, providing excellent thermal stability and processing characteristics.',
    details: 'PVC processing requires blowing agents with specific decomposition profiles. Our ADC grades are formulated to match PVC processing temperatures, ensuring optimal foam structure and surface quality for boards, profiles, and synthetic leather.',
    applications: ['PVC foam boards', 'Window profiles', 'Synthetic leather', 'Pipe insulation', 'Decorative panels'],
  },
  {
    id: 'rubber',
    name: 'Rubber',
    icon: 'ri-contrast-drop-line',
    image: 'https://readdy.ai/api/search-image?query=Rubber%20manufacturing%20facility%20with%20black%20rubber%20sheets%20and%20rolls%20being%20processed%2C%20industrial%20mixing%20and%20calendering%20equipment%2C%20clean%20factory%20floor%2C%20professional%20industrial%20photography%2C%20bright%20lighting%2C%20organized%20production%20environment&width=600&height=450&seq=htp-ind-04&orientation=landscape',
    description: 'High-purity ADC blowing agents for natural and synthetic rubber foaming, delivering uniform cell structure and excellent physical properties in rubber products.',
    details: 'Our ADC blowing agents are widely used in rubber applications including sponge rubber, microcellular rubber, and foamed rubber products. We offer grades suited for various curing systems and processing methods.',
    applications: ['Sponge rubber', 'Rubber mats', 'Automotive seals', 'Gaskets', 'Neoprene foam'],
  },
  {
    id: 'packaging',
    name: 'Packaging',
    icon: 'ri-box-3-line',
    image: 'https://readdy.ai/api/search-image?query=Modern%20packaging%20foam%20manufacturing%20facility%20with%20white%20protective%20foam%20packaging%20products%20being%20produced%2C%20clean%20industrial%20setting%2C%20professional%20photography%2C%20bright%20lighting%2C%20organized%20production%20line%2C%20foam%20sheets%20and%20rolls&width=600&height=450&seq=htp-ind-05&orientation=landscape',
    description: 'ADC blowing agents for protective and industrial foam packaging, offering lightweight cushioning with excellent shock absorption and consistent quality.',
    details: 'Packaging foam production requires reliable blowing agents for consistent density and cushioning performance. Our ADC grades ensure optimal foam structure for protective packaging, insulation, and cushioning applications.',
    applications: ['Protective packaging', 'Food containers', 'Insulated shipping', 'Electronics packaging', 'Cushion inserts'],
  },
  {
    id: 'insulation',
    name: 'Insulation',
    icon: 'ri-temp-hot-line',
    image: 'https://readdy.ai/api/search-image?query=Thermal%20insulation%20foam%20panels%20and%20boards%20in%20modern%20manufacturing%20facility%2C%20white%20and%20silver%20insulation%20materials%2C%20clean%20industrial%20setting%2C%20professional%20photography%2C%20bright%20lighting%2C%20organized%20production%20environment&width=600&height=450&seq=htp-ind-06&orientation=landscape',
    description: 'Specialized blowing agents for thermal and acoustic insulation foam, providing excellent insulation properties and fire-retardant compatibility.',
    details: 'Our ADC blowing agents are formulated for insulation applications requiring specific cell structure, density, and thermal properties. Suitable for both thermal and acoustic insulation products used in construction and industrial applications.',
    applications: ['Building insulation', 'Pipe insulation', 'HVAC insulation', 'Acoustic panels', 'Cold storage'],
  },
  {
    id: 'plastic-processing',
    name: 'Plastic Processing',
    icon: 'ri-recycle-line',
    image: 'https://readdy.ai/api/search-image?query=Plastic%20injection%20molding%20and%20extrusion%20manufacturing%20facility%20with%20white%20plastic%20products%2C%20clean%20modern%20factory%2C%20professional%20industrial%20photography%2C%20bright%20lighting%2C%20organized%20workspace%2C%20production%20machinery&width=600&height=450&seq=htp-ind-07&orientation=landscape',
    description: 'ADC blowing agents for a wide range of plastic processing applications including injection molding, extrusion, and rotational molding of foamed plastic products.',
    details: 'Plastic processors benefit from our ADC grades across multiple polymer systems. Our blowing agents are compatible with PE, PP, PS, ABS, and other thermoplastics, providing weight reduction and cost savings while maintaining mechanical properties.',
    applications: ['Structural foam', 'Weight reduction', 'Cost optimization', 'Surface finish', 'Density control'],
  },
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof industries)[0] | null>(null);

  return (
    <>
      <section id="industries" className="relative py-20 md:py-28 bg-background-100/60 overflow-hidden" style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Soft%20abstract%20industrial%20manufacturing%20plant%20background%20with%20subtle%20grey%20and%20white%20tones%2C%20clean%20modern%20factory%20aesthetic%2C%20very%20faint%20geometric%20industrial%20pattern%2C%20minimalist%20corporate%20background%20texture%2C%20extremely%20subtle%20gradient%2C%20gentle%20blurred%20background%20for%20website%20content%20overlay&width=1920&height=1200&seq=htp-industries-bg&orientation=landscape)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background-100/80"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-50/40 blur-3xl -translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>

        {/* Animated mesh blob */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-100/30 blur-3xl pointer-events-none"
        />

        <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200/60 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-accent-600 tracking-wide uppercase">Industries Served</span>
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-900 mb-4">
                  Solutions <span className="text-primary-500">Across Industries</span>
                </h2>
                <p className="text-foreground-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                  Our products power manufacturing across diverse sectors — from footwear to
                  packaging, delivering consistent quality in every application.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {industries.map((industry, i) => (
                <ScrollReveal key={industry.id} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={() => setSelectedIndustry(industry)}
                    className="group relative cursor-pointer rounded-2xl overflow-hidden h-48 md:h-56"
                  >
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-125"
                      loading="lazy"
                    />
                    {/* Gradient overlay intensifies on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/80 via-foreground-950/30 to-transparent transition-all duration-500 group-hover:from-foreground-950/90 group-hover:via-foreground-950/50"></div>

                    {/* Animated border glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 0 2px oklch(var(--accent-500) / 0.4), 0 0 20px oklch(var(--accent-500) / 0.15)',
                      }}
                    />

                    {/* Content area */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-accent-500/90 flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-300">
                          <i className={`${industry.icon} text-background-50 text-sm`}></i>
                        </div>
                        <h3 className="font-heading text-base font-bold text-background-50">{industry.name}</h3>
                      </div>

                      {/* Description slides up on hover */}
                      <div className="overflow-hidden">
                        <p className="text-xs text-background-50/70 leading-relaxed translate-y-full group-hover:translate-y-0 transition-transform duration-500 line-clamp-2">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background-50/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <i className="ri-arrow-right-up-line text-background-50 text-sm"></i>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedIndustry} onClose={() => setSelectedIndustry(null)}>
        {selectedIndustry && (
          <div>
            <div className="h-56 md:h-72 overflow-hidden">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500 flex items-center justify-center">
                  <i className={`${selectedIndustry.icon} text-background-50 text-xl`}></i>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground-900">{selectedIndustry.name}</h3>
              </div>
              <p className="text-foreground-600 leading-relaxed mb-6">{selectedIndustry.details}</p>
              <div>
                <h4 className="text-sm font-semibold text-foreground-900 uppercase tracking-wider mb-3">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.applications.map((a) => (
                    <span key={a} className="px-3 py-1.5 text-xs font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-200/60">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}