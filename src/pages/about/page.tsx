import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { Link } from 'react-router-dom';
import { aboutStats, processSteps } from '@/mocks/about';
import { useState, useEffect } from 'react';
import { AnimGradientText } from '@readdy/anim/header/gradient-text/react';

export default function About() {
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

      <section className="relative w-full min-h-[420px] md:min-h-[520px] flex items-end pt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Abstract%20stylized%20chemical%20molecular%20structures%20with%20warm%20amber%20and%20bronze%20tones%2C%20artistic%20scientific%20visualization%2C%20soft%20diffused%20lighting%2C%20sophisticated%20laboratory%20aesthetic%2C%20no%20people%2C%20minimalist%20composition%2C%20artistic%20rendering%20with%20smooth%20gradients&width=1600&height=900&seq=about-hero-01&orientation=landscape"
            alt="Abstract polymer molecular structure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-14 py-20">
          <span className="text-accent-400 text-xs font-medium uppercase tracking-widest">About Us</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-background-50 mt-4 max-w-3xl leading-tight">
            {reducedMotion ? (
              <>Engineering Cellular<br />Performance Into Polymers</>
            ) : (
              <AnimGradientText duration={2400}>Engineering Cellular<br />Performance Into Polymers</AnimGradientText>
            )}
          </h1>
        </div>
      </section>

      <section className="w-full bg-background-50 py-20 md:py-28">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-6 leading-tight">
                A deliberately narrow mission since 2007
              </h2>
              <p className="text-foreground-600 leading-relaxed mb-4">
                High-Tech Polymers was founded in 2007 with a single focus: to manufacture Azodicarbonamide-based blowing agents and EVA processing technology to a standard of consistency that broad-line additive suppliers rarely match.
              </p>
              <p className="text-foreground-600 leading-relaxed mb-4">
                Nearly two decades later, that focus remains our defining advantage. Rather than spreading across dozens of unrelated additive categories, HTP has stayed close to a single family of chemistry — Pure ADC, Modified ADC, and our proprietary EV PT process — going deep instead of wide.
              </p>
              <p className="text-foreground-600 leading-relaxed">
                For converters who cannot absorb batch-to-batch variation in cell structure, density, or cure behaviour, that depth is the whole point.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://storage.helloreaddy.io/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/be4c2b27-44d7-4f24-ae60-d6a209893324_compressed_WhatsApp-Image-2026-08-10-at-13.22.49-1.webp"
                alt="High-Tech Polymers manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background-100 py-20 md:py-28">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-900 mb-6 leading-tight">
              Depth Over Breadth
            </h2>
            <p className="text-lg text-foreground-600 leading-relaxed mb-6">
              We compete against multi-category groups many times our size — and we do it by staying specialists, matching decomposition profile, gas yield, and particle size to the exact compound being foamed.
            </p>
            <p className="text-foreground-600 leading-relaxed">
              For converters who cannot absorb batch-to-batch variation in cell structure, density, or cure behaviour, that depth is the whole point. Our clients don't need a supplier who knows a little about everything. They need a partner who knows everything about one thing.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-800 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-background-50">{stat.value}</div>
                <p className="text-sm text-background-50/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background-50 py-20 md:py-28">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-12 leading-tight">
            Quality Control at Every Stage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-xl bg-background-100 p-6 md:p-8">
                <div className="font-heading text-5xl font-bold text-accent-500/30 mb-4">{step.step}</div>
                <h3 className="font-heading text-lg font-bold text-foreground-900 mb-3">{step.title}</h3>
                <p className="text-sm text-foreground-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground-600 mt-8 max-w-2xl leading-relaxed">
            Consistency isn't a claim we make once — it's checked four times before a single drum leaves our plant.
          </p>
        </div>
      </section>

      <section className="w-full bg-background-100 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
            Partner with Specialists
          </h2>
          <p className="text-foreground-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Ready to eliminate batch-to-batch variation in your polymer processing? Let's talk about how our depth of expertise can support your production goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-500 text-background-50 font-semibold text-sm hover:bg-primary-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Get In Touch
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}