import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { Link } from 'react-router-dom';
import { allProducts } from '@/mocks/products';
import { useState, useEffect } from 'react';
import { AnimGradientText } from '@readdy/anim/header/gradient-text/react';

export default function Products() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return (
    <main>
      <Navbar />

      <section className="relative w-full min-h-[380px] md:min-h-[480px] flex items-end pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://storage.helloreaddy.io/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/be4c2b27-44d7-4f24-ae60-d6a209893324_compressed_WhatsApp-Image-2026-08-10-at-13.22.49-1.webp"
            alt="High Tech Polymers manufacturing facility"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary-800/80"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-14 py-20">
          <span className="text-accent-400 text-xs font-medium uppercase tracking-widest">Our Product Range</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-background-50 mt-4 max-w-3xl leading-tight">
            {reducedMotion ? (
              <>Three Products.<br />One Standard of Precision.</>
            ) : (
              <AnimGradientText duration={2400}>Three Products.<br />One Standard of Precision.</AnimGradientText>
            )}
          </h1>
          <p className="text-background-50/70 max-w-xl mt-6 leading-relaxed">
            Each product line is built around a single job, with the same disciplined quality control behind every batch.
          </p>
        </div>
      </section>

      <section className="w-full bg-background-50 py-20 md:py-28">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-product-shop="">
            {allProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group rounded-2xl border border-background-200/70 bg-background-50 overflow-hidden cursor-pointer hover:border-background-300/80 transition-all duration-300"
              >
                <div className="w-full aspect-[16/10] bg-background-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mt-2 leading-tight">{product.name}</h3>
                  <p className="text-sm text-foreground-500 mt-1">{product.subtitle}</p>
                  <p className="text-sm text-foreground-600 mt-4 leading-relaxed">{product.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 mt-6 text-sm text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background-100 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
            Need a Custom Formulation?
          </h2>
          <p className="text-foreground-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Where standard grades don't fit, our technical team develops ADC formulations matched to your specific compound and process window.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-500 text-background-50 font-semibold text-sm hover:bg-primary-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Discuss Your Requirements
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}