import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { Link } from 'react-router-dom';
import { industries } from '@/mocks/industries';
import { useState, useEffect } from 'react';
import { AnimGradientText } from '@readdy/anim/header/gradient-text/react';

export default function Industries() {
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

      <section className="relative w-full min-h-[380px] md:min-h-[480px] flex items-end pt-16 bg-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Abstract%20industrial%20polymer%20manufacturing%20plant%20with%20warm%20amber%20and%20deep%20bronze%20tones%2C%20soft%20geometric%20shapes%20representing%20chemical%20processing%20equipment%2C%20artistic%20rendering%20with%20smooth%20gradients%2C%20sophisticated%20industrial%20aesthetic%2C%20very%20subtle%20blurred%20background%20for%20website%20hero%20section&width=1600&height=900&seq=industries-hero-bg&orientation=landscape"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 to-primary-800/70"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-14 py-20">
          <span className="text-accent-400 text-xs font-medium uppercase tracking-widest">Industries Served</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-background-50 mt-4 max-w-3xl leading-tight">
            {reducedMotion ? (
              <>Built for Demanding,<br />High-Volume Processes</>
            ) : (
              <AnimGradientText duration={2400}>Built for Demanding,<br />High-Volume Processes</AnimGradientText>
            )}
          </h1>
          <p className="text-background-50/70 max-w-xl mt-6 leading-relaxed">
            Our blowing agents and EVA processing systems serve demanding industrial applications worldwide — anywhere controlled cellular structure isn't optional.
          </p>
        </div>
      </section>

      <section className="w-full bg-background-50 py-20 md:py-28">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="rounded-2xl border border-background-200/70 bg-background-50 overflow-hidden">
                <div className="w-full aspect-[16/10] bg-background-100 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground-900 leading-tight">{industry.name}</h3>
                  <p className="text-sm text-foreground-600 mt-3 leading-relaxed">{industry.description}</p>
                  <div className="mt-5">
                    <p className="text-xs font-semibold text-foreground-500 uppercase tracking-wider mb-2">Products Used</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.products.map((p) => (
                        <span key={p} className="px-3 py-1 rounded-full bg-secondary-100 text-secondary-800 text-xs font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-xs font-semibold text-foreground-500 uppercase tracking-wider mb-2">Key Benefits</p>
                    <ul className="flex flex-col gap-2">
                      {industry.keyBenefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground-600">
                          <i className="ri-check-line text-accent-500 mt-0.5 shrink-0"></i>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background-100 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-4 leading-tight">
            Serve Your Industry?
          </h2>
          <p className="text-foreground-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Let's discuss how our ADC blowing agents and EVA processing technology can meet your specific production requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-500 text-background-50 font-semibold text-sm hover:bg-primary-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Start a Conversation
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}