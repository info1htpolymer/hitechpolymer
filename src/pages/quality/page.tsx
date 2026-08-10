import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { Link } from 'react-router-dom';
import { qualityProcess } from '@/mocks/quality';
import { useState, useEffect } from 'react';
import { AnimGradientText } from '@readdy/anim/header/gradient-text/react';

export default function Quality() {
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
            src="https://readdy.ai/api/search-image?query=Clean%20modern%20quality%20control%20laboratory%20with%20bright%20ambient%20lighting%2C%20glass%20test%20equipment%20on%20white%20benches%2C%20soft%20warm%20and%20amber%20tones%2C%20scientific%20abstract%20visualization%2C%20very%20subtle%20out%20of%20focus%20background%2C%20minimalist%20aesthetic%20for%20website%20hero%20banner&width=1600&height=900&seq=quality-hero-bg&orientation=landscape"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 to-primary-800/70"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-14 py-20">
          <span className="text-accent-400 text-xs font-medium uppercase tracking-widest">Quality Assurance</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-background-50 mt-4 max-w-3xl leading-tight">
            {reducedMotion ? (
              <>Quality Control<br />at Every Stage</>
            ) : (
              <AnimGradientText duration={2400}>Quality Control<br />at Every Stage</AnimGradientText>
            )}
          </h1>
          <p className="text-background-50/70 max-w-xl mt-6 leading-relaxed">
            Consistency isn't a claim we make once — it's checked four times before a single drum leaves our plant.
          </p>
        </div>
      </section>

      <section className="w-full bg-background-50 py-20 md:py-28">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-12 leading-tight">
            Our 4-Stage Quality Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityProcess.map((stage) => (
              <div key={stage.stage} className="rounded-xl bg-background-100 p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent-100/50 rounded-bl-full"></div>
                <div className="font-heading text-5xl font-bold text-accent-500/30 mb-4">{stage.stage}</div>
                <h3 className="font-heading text-lg font-bold text-foreground-900 mb-3">{stage.title}</h3>
                <p className="text-sm text-foreground-600 leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-background-50 py-20 md:py-28">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground-900 mb-6 leading-tight">
                Testing &amp; Analysis
              </h2>
              <p className="text-foreground-600 leading-relaxed mb-4">
                Every batch undergoes comprehensive analysis before release. Our in-house laboratory is equipped with modern instrumentation for decomposition profiling, gas yield measurement, and particle size analysis.
              </p>
              <p className="text-foreground-600 leading-relaxed mb-6">
                We maintain detailed batch records and certificates of analysis for every drum that leaves our facility, giving you complete traceability from raw material to finished product.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                    <i className="ri-flask-line text-accent-600"></i>
                  </div>
                  <span className="text-sm text-foreground-700">Gas Yield Measurement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                    <i className="ri-temp-hot-line text-accent-600"></i>
                  </div>
                  <span className="text-sm text-foreground-700">Decomposition Temperature Profiling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                    <i className="ri-dashboard-line text-accent-600"></i>
                  </div>
                  <span className="text-sm text-foreground-700">Particle Size Distribution Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                    <i className="ri-file-list-3-line text-accent-600"></i>
                  </div>
                  <span className="text-sm text-foreground-700">Certificate of Analysis per Batch</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://readdy.ai/api/search-image?query=Quality%20control%20laboratory%20with%20modern%20testing%20equipment%2C%20clean%20minimal%20scientific%20environment%2C%20warm%20neutral%20lighting%2C%20professional%20laboratory%20photography%2C%20organized%20workspace%20with%20instruments%20and%20glassware&width=800&height=600&seq=quality-lab-02&orientation=landscape"
                alt="Quality testing laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-800 py-16 md:py-20">
        <div className="w-full px-6 md:px-10 lg:px-14 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-background-50 mb-4 leading-tight">
            Request Quality Documentation
          </h2>
          <p className="text-background-50/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Need certificates of analysis, safety data sheets, or technical specifications for your quality team? We are ready to share.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent-500 text-background-50 font-semibold text-sm hover:bg-accent-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Contact Quality Team
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}