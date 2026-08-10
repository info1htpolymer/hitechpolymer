import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { useState, useEffect, type FormEvent } from 'react';
import { AnimGradientText } from '@readdy/anim/header/gradient-text/react';

const WEB3FORMS_KEY = import.meta.env.VITE_PUBLIC_WEB3FORMS_KEY;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get('website_alt');
    if (honeypot && String(honeypot).trim()) {
      setStatus('success');
      return;
    }

    if (!WEB3FORMS_KEY) {
      setErrorMsg('Contact form is not yet configured. Please add your Web3Forms access key in project settings.');
      setStatus('error');
      return;
    }

    formData.delete('website_alt');

    setStatus('loading');
    setErrorMsg('');

    try {
      const payload = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        payload.append(key, String(value));
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      if (response.ok && parsed?.success) {
        setStatus('success');
        form.reset();
      } else {
        const serverMsg = parsed?.message || responseText || 'Submission failed. Please try again.';
        setErrorMsg(serverMsg);
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <main>
      <Navbar />

      <section className="relative w-full min-h-[320px] md:min-h-[400px] flex items-end pt-16 bg-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Soft%20abstract%20corporate%20office%20environment%20with%20warm%20golden%20and%20cream%20tones%2C%20gentle%20bokeh%20lighting%2C%20very%20subtle%20blurred%20background%2C%20clean%20modern%20industrial%20aesthetic%2C%20professional%20atmosphere%20for%20website%20contact%20hero%20section%2C%20minimalist%20composition&width=1600&height=900&seq=contact-hero-bg&orientation=landscape"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 to-primary-800/70"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-14 py-20">
          <span className="text-accent-400 text-xs font-medium uppercase tracking-widest">Contact</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-background-50 mt-4 leading-tight">
            {reducedMotion ? (
              <>Get In Touch</>
            ) : (
              <AnimGradientText duration={2400}>Get In Touch</AnimGradientText>
            )}
          </h1>
          <p className="text-background-50/70 max-w-xl mt-4 leading-relaxed">
            Ready to discuss your polymer processing needs? Our team is here to answer technical questions, provide samples, and explore custom formulations.
          </p>
        </div>
      </section>

      <section className="w-full bg-background-50 py-20 md:py-28">
        <div className="w-full px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-2 leading-tight">
                Send an Inquiry
              </h2>
              <p className="text-sm text-foreground-600 mb-8">Fill out the form below and we will respond within 24-48 hours.</p>

              {!WEB3FORMS_KEY && (
                <div className="mb-6 p-4 rounded-lg bg-accent-100/70 border border-accent-200 text-accent-800 text-sm">
                  <i className="ri-information-line mr-2"></i>
                  Form configuration pending: Add your Web3Forms access key to enable submissions.
                </div>
              )}

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-primary-100/70 border border-primary-200 text-primary-800 text-sm">
                  <i className="ri-checkbox-circle-line mr-2"></i>
                  Thank you for your inquiry. Our team will contact you shortly.
                </div>
              )}

              {status === 'error' && errorMsg && (
                <div className="mb-6 p-4 rounded-lg bg-accent-50 border border-accent-200 text-accent-800 text-sm">
                  <i className="ri-error-warning-line mr-2"></i>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} data-readdy-form="" className="flex flex-col gap-5">
                <input type="hidden" name="access_key" value={WEB3FORMS_KEY || ''} />
                <input type="hidden" name="subject" value="New Inquiry from High-Tech Polymers Website" />
                <input type="hidden" name="from_name" value="High-Tech Polymers Website" />

                <div className="honeypot-wrapper">
                  <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-background-200 bg-background-50 text-foreground-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-background-200 bg-background-50 text-foreground-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground-700 mb-1.5">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-background-200 bg-background-50 text-foreground-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-background-200 bg-background-50 text-foreground-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                    placeholder="+91 ..."
                  />
                </div>

                <div>
                  <label htmlFor="product_interest" className="block text-sm font-medium text-foreground-700 mb-1.5">Product Interest</label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    className="w-full px-4 py-3 rounded-lg border border-background-200 bg-background-50 text-foreground-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
                  >
                    <option value="">Select a product</option>
                    <option value="pure-adc">Pure ADC</option>
                    <option value="modified-adc">Modified ADC</option>
                    <option value="ev-pt">EV PT</option>
                    <option value="custom-grades">Custom Grades</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-lg border border-background-200 bg-background-50 text-foreground-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  <p className="text-xs text-foreground-500 mt-1">Maximum 500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary-500 text-background-50 font-semibold text-sm hover:bg-primary-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>

            <div className="lg:pl-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground-900 mb-8 leading-tight">
                Contact Information
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center shrink-0">
                    <i className="ri-phone-line text-accent-600"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground-900 mb-1">Helpline</h3>
                    <p className="text-sm text-foreground-600">+91-9899411155</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center shrink-0">
                    <i className="ri-mail-line text-accent-600"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground-900 mb-1">Email</h3>
                    <p className="text-sm text-foreground-600">Info.1htpolymer@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center shrink-0">
                    <i className="ri-map-pin-line text-accent-600"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground-900 mb-1">Location</h3>
                    <p className="text-sm text-foreground-600">2328, Sector 64, Faridabad<br />Haryana 121004, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center shrink-0">
                    <i className="ri-time-line text-accent-600"></i>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground-900 mb-1">Response Time</h3>
                    <p className="text-sm text-foreground-600">24-48 hours for all inquiries</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-background-100">
                <h3 className="font-heading text-lg font-bold text-foreground-900 mb-3">Looking for Technical Support?</h3>
                <p className="text-sm text-foreground-600 leading-relaxed mb-4">
                  Our technical team is available to discuss formulation challenges, process optimization, and custom development projects.
                </p>
                <p className="text-sm text-foreground-600">
                  Call us directly at <span className="font-semibold text-foreground-900">+91-9899411155</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}