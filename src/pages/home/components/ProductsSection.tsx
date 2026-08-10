import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';
import Modal from '@/components/base/Modal';

const products = [
  {
    id: 'pure-adc',
    name: 'Pure ADC',
    subtitle: 'Azodicarbonamide Blowing Agent',
    image: 'https://readdy.ai/api/search-image?query=Fine%20yellow%20chemical%20powder%20in%20a%20clean%20modern%20laboratory%20glass%20beaker%20on%20white%20surface%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20clean%20minimalist%20composition%2C%20industrial%20chemical%20product%20showcase%2C%20subtle%20shadows%2C%20high%20resolution%20detail%20of%20powder%20texture&width=600&height=600&seq=htp-prod-01&orientation=squarish',
    features: ['High purity > 98%', 'Consistent particle size', 'Excellent gas yield', 'Superior dispersion'],
    description: 'Our flagship Pure ADC blowing agent delivers exceptional foaming performance across a wide range of polymer applications. Manufactured under strict quality controls to ensure consistent particle size distribution and optimal gas yield.',
    applications: ['Footwear soles', 'EVA foam sheets', 'PVC foam boards', 'Rubber products', 'Packaging materials'],
    benefits: ['Uniform cell structure', 'High expansion ratio', 'Low odor formulation', 'Excellent thermal stability'],
    technicalSpecs: [
      { label: 'Purity', value: '≥ 98%' },
      { label: 'Particle Size', value: '8-12 µm' },
      { label: 'Gas Yield', value: '220-240 ml/g' },
      { label: 'Decomposition Temp', value: '200-210°C' },
      { label: 'Moisture Content', value: '≤ 0.3%' },
      { label: 'Ash Content', value: '≤ 0.5%' },
    ],
  },
  {
    id: 'modified-adc',
    name: 'Modified ADC',
    subtitle: 'Customized Blowing Agent',
    image: 'https://readdy.ai/api/search-image?query=Light%20orange%20fine%20chemical%20powder%20sample%20in%20petri%20dish%20on%20white%20laboratory%20bench%2C%20professional%20industrial%20chemical%20product%20photography%2C%20clean%20minimalist%20composition%20with%20soft%20diffused%20lighting%2C%20scientific%20laboratory%20aesthetic%2C%20high%20resolution%20texture%20detail&width=600&height=600&seq=htp-prod-02&orientation=squarish',
    features: ['Tailored activation temp', 'Modified decomposition', 'Enhanced compatibility', 'Custom particle size'],
    description: 'Modified ADC grades are engineered for specific processing conditions. Through controlled surface treatment and additive incorporation, we customize decomposition temperature, gas evolution rate, and polymer compatibility.',
    applications: ['Cross-linked PE foam', 'High-temp EVA processing', 'Specialty rubber compounds', 'Technical foam products'],
    benefits: ['Precise temperature control', 'Reduced scorching', 'Better surface finish', 'Wider processing window'],
    technicalSpecs: [
      { label: 'Purity', value: '≥ 96%' },
      { label: 'Particle Size', value: '6-15 µm' },
      { label: 'Gas Yield', value: '200-230 ml/g' },
      { label: 'Decomposition Temp', value: '180-220°C' },
      { label: 'Moisture Content', value: '≤ 0.3%' },
      { label: 'pH Value', value: '6.5-7.5' },
    ],
  },
  {
    id: 'ev-pt',
    name: 'EV PT',
    subtitle: 'EVA Processing Technology',
    image: 'https://readdy.ai/api/search-image?query=White%20EVA%20polymer%20granules%20and%20pellets%20in%20organized%20display%20on%20clean%20white%20surface%2C%20professional%20industrial%20product%20photography%2C%20modern%20minimalist%20composition%2C%20soft%20even%20lighting%2C%20clean%20background%2C%20high%20resolution%20detail%20of%20polymer%20materials&width=600&height=600&seq=htp-prod-03&orientation=squarish',
    features: ['Processing additives', 'Flow enhancers', 'Release agents', 'Stabilizer packages'],
    description: 'Our EVA Processing Technology range includes specialized additives designed to optimize EVA compound processing. From flow enhancers to stabilizer packages, every component is formulated for maximum efficiency.',
    applications: ['EVA footwear', 'Sports equipment', 'EVA packaging', 'Automotive interiors'],
    benefits: ['Faster cycle times', 'Improved surface quality', 'Reduced scrap rates', 'Energy savings'],
    technicalSpecs: [
      { label: 'Form', value: 'Granules / Powder' },
      { label: 'Melting Point', value: '60-85°C' },
      { label: 'MFI Range', value: '2-30 g/10min' },
      { label: 'Density', value: '0.92-0.95 g/cm³' },
      { label: 'VA Content', value: '12-28%' },
      { label: 'Additive Package', value: 'Custom' },
    ],
  },
  {
    id: 'custom-grades',
    name: 'Custom Grades',
    subtitle: 'Tailored Chemical Solutions',
    image: 'https://readdy.ai/api/search-image?query=Multiple%20glass%20vials%20with%20different%20colored%20chemical%20powders%20arranged%20neatly%20on%20white%20laboratory%20table%2C%20professional%20scientific%20product%20photography%2C%20clean%20minimalist%20composition%2C%20soft%20laboratory%20lighting%2C%20organized%20display%2C%20high%20resolution%20detail&width=600&height=600&seq=htp-prod-04&orientation=squarish',
    features: ['Fully customizable', 'Application-specific', 'Dedicated R&D support', 'Pilot batch testing'],
    description: 'When standard products don\'t meet your needs, our Custom Grades service delivers bespoke chemical formulations. Our R&D team works closely with you to develop the perfect solution for your unique manufacturing requirements.',
    applications: ['Specialty foams', 'Unique processing conditions', 'New product development', 'Performance optimization'],
    benefits: ['Perfect fit for your process', 'Competitive advantage', 'Technical collaboration', 'Confidential development'],
    technicalSpecs: [
      { label: 'Formulation', value: 'Custom' },
      { label: 'Specifications', value: 'Per requirement' },
      { label: 'Development Time', value: '4-8 weeks' },
      { label: 'Trial Batch', value: 'Available' },
      { label: 'Documentation', value: 'Full TDS & MSDS' },
      { label: 'Support', value: 'On-site technical' },
    ],
  },
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <>
      <section id="products" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundImage: 'url(https://storage.helloreaddy.io/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/be4c2b27-44d7-4f24-ae60-d6a209893324_compressed_WhatsApp-Image-2026-08-10-at-13.22.49-1.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background-50/88"></div>
        {/* Wireframe flasks background */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'url(https://static.readdy.ai/image/08828b63898a37ef57179e26d405039d/918118d90c9946784bba477de710fadc.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Floating decorative blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary-200/30 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-accent-200/25 blur-3xl pointer-events-none"
        />

        <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200/60 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>
                  <span className="text-xs font-semibold text-primary-600 tracking-wide uppercase">Our Products</span>
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-900 mb-4">
                  Advanced <span className="text-primary-500">Chemical Solutions</span>
                </h2>
                <p className="text-foreground-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                  Comprehensive range of ADC blowing agents and EVA processing products
                  engineered for superior performance and consistency.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 0.1}>
                  <div
                    ref={(el) => { cardRefs.current[i] = el; }}
                    className="flip-card h-[420px] cursor-pointer group"
                    onClick={() => setSelectedProduct(product)}
                    onMouseMove={(e) => handleMouseMove(e, i)}
                  >
                    <div className="flip-card-inner w-full h-full">
                      <div className="flip-card-front absolute inset-0 bg-background-50 rounded-2xl border border-background-200/60 overflow-hidden flex flex-col">
                        {/* Shine sweep effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 rounded-2xl overflow-hidden">
                          <div
                            className="absolute inset-0 animate-shine-sweep"
                            style={{
                              background: 'linear-gradient(105deg, transparent 40%, oklch(var(--background-50) / 0.4) 45%, oklch(var(--primary-300) / 0.15) 50%, oklch(var(--background-50) / 0.4) 55%, transparent 60%)',
                            }}
                          />
                        </div>

                        {/* Spotlight glow on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 rounded-2xl"
                          style={{
                            background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), oklch(var(--primary-500) / 0.08), transparent 40%)',
                          }}
                        />

                        <div className="relative h-48 overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/45 via-transparent to-transparent"></div>
                          <div className="absolute bottom-3 left-4">
                            <span className="text-xs text-background-50/90 font-medium bg-background-50/15 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                              {product.subtitle}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3">
                            <motion.div
                              animate={{ rotate: [0, 8, -8, 0] }}
                              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                              className="w-8 h-8 rounded-lg bg-background-50/20 backdrop-blur-sm flex items-center justify-center"
                            >
                              <i className="ri-arrow-turn-forward-line text-background-50 text-sm"></i>
                            </motion.div>
                          </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="font-heading text-lg font-bold text-foreground-900 mb-3">
                            {product.name}
                          </h3>
                          <ul className="space-y-2 flex-1">
                            {product.features.map((f) => (
                              <li key={f} className="flex items-start gap-2 text-sm text-foreground-600">
                                <i className="ri-checkbox-circle-fill text-primary-500 text-sm mt-0.5 flex-shrink-0"></i>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-3 mt-auto border-t border-background-100">
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 whitespace-nowrap">
                              Learn More
                              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-200"></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flip-card-back absolute inset-0 bg-background-50 rounded-2xl border border-primary-200/60 overflow-hidden flex flex-col p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                            <i className="ri-flask-line text-background-50 text-lg"></i>
                          </div>
                          <div>
                            <h3 className="font-heading text-base font-bold text-foreground-900 leading-tight">{product.name}</h3>
                            <p className="text-xs text-foreground-500">{product.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-xs text-foreground-600 leading-relaxed mb-3 line-clamp-3">{product.description}</p>

                        <div className="mb-3">
                          <h4 className="text-xs font-semibold text-foreground-900 uppercase tracking-wider mb-2">Benefits</h4>
                          <div className="space-y-1">
                            {product.benefits.map((b) => (
                              <div key={b} className="flex items-center gap-1.5 text-xs text-foreground-600">
                                <i className="ri-check-line text-primary-500 flex-shrink-0"></i>
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-3">
                          <h4 className="text-xs font-semibold text-foreground-900 uppercase tracking-wider mb-2">Applications</h4>
                          <div className="flex flex-wrap gap-1">
                            {product.applications.slice(0, 3).map((a) => (
                              <span key={a} className="px-2 py-1 text-xs font-medium bg-accent-50 text-accent-700 rounded-full border border-accent-200/60">
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 whitespace-nowrap">
                            Click for full details
                            <i className="ri-arrow-right-line text-xs"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} maxWidth="max-w-4xl">
        {selectedProduct && (
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              <div>
                <div className="rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-72 md:h-80 object-cover object-top"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center">
                    <i className="ri-flask-line text-background-50 text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground-900">{selectedProduct.name}</h3>
                    <p className="text-sm text-foreground-500">{selectedProduct.subtitle}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-foreground-600 leading-relaxed mb-6">{selectedProduct.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground-900 uppercase tracking-wider mb-3">Key Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProduct.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm text-foreground-600 p-2 rounded-lg bg-primary-50/60">
                        <i className="ri-check-line text-primary-500"></i>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground-900 uppercase tracking-wider mb-3">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.applications.map((a) => (
                      <span key={a} className="px-3 py-1.5 text-xs font-medium bg-accent-50 text-accent-700 rounded-full border border-accent-200/60">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground-900 uppercase tracking-wider mb-3">Technical Specifications</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProduct.technicalSpecs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center p-2.5 rounded-lg bg-background-100 text-sm">
                        <span className="text-foreground-500">{spec.label}</span>
                        <span className="font-semibold text-foreground-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}