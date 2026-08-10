import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/base/ScrollReveal';

const WEB3FORMS_KEY = import.meta.env.VITE_PUBLIC_WEB3FORMS_KEY;

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productRequired: '',
    message: '',
    websiteAlt: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.fullName.trim()) return 'Please enter your full name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address.';
    if (!formData.phone.trim()) return 'Please enter your phone number.';
    if (!formData.productRequired.trim()) return 'Please select a product.';
    if (!formData.message.trim()) return 'Please enter your message.';
    if (formData.message.length > 500) return 'Message must be 500 characters or less.';
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitResult(null);

    const validationError = validate();
    if (validationError) {
      setSubmitResult({ type: 'error', message: validationError });
      return;
    }

    const honeypot = (e.currentTarget.elements.namedItem('website_alt') as HTMLInputElement)?.value?.trim();
    if (honeypot) {
      setSubmitResult({ type: 'success', message: 'Thank you for your inquiry! We will get back to you shortly.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const formEl = e.currentTarget;
      const fd = new FormData(formEl);
      fd.delete('website_alt');
      fd.append('access_key', WEB3FORMS_KEY || '');
      fd.append('subject', 'New Inquiry from High-Tech Polymers Website');
      fd.append('from_name', 'High-Tech Polymers Website');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(fd as unknown as Record<string, string>).toString(),
      });

      const responseText = await response.text();

      let parsed: Record<string, unknown> = {};
      try { parsed = JSON.parse(responseText); } catch { /* ignore */ }

      if (response.ok && parsed?.success) {
        setSubmitResult({ type: 'success', message: 'Thank you for your inquiry! Our team will get back to you within 24 hours.' });
        setFormData({ fullName: '', companyName: '', email: '', phone: '', productRequired: '', message: '', websiteAlt: '' });
      } else {
        const serverMsg = (parsed?.message as string) || responseText || 'Something went wrong. Please try again later.';
        setSubmitResult({ type: 'error', message: serverMsg });
      }
    } catch {
      setSubmitResult({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-in-touch" className="relative py-20 md:py-28 overflow-hidden" style={{
      backgroundImage: 'url(https://readdy.ai/api/search-image?query=Clean%20modern%20chemical%20industrial%20office%20interior%20with%20glass%20windows%20and%20blue%20skyline%2C%20professional%20corporate%20setting%20with%20soft%20natural%20lighting%2C%20very%20subtle%20background%20texture%2C%20airy%20bright%20workspace%20atmosphere&width=1920&height=1200&seq=htp-contact-bg&orientation=landscape)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-background-100/90"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary-50/40 blur-3xl -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-50/30 blur-3xl translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

      {/* Floating icons in blank areas */}
      {[
        { icon: 'ri-mail-send-line', x: '2%', y: '20%', delay: 0, color: 'text-primary-200' },
        { icon: 'ri-phone-line', x: '97%', y: '30%', delay: 1, color: 'text-accent-200' },
        { icon: 'ri-map-pin-line', x: '1%', y: '65%', delay: 2, color: 'text-primary-100' },
        { icon: 'ri-customer-service-2-line', x: '96%', y: '68%', delay: 0.7, color: 'text-accent-100' },
        { icon: 'ri-flask-line', x: '50%', y: '2%', delay: 1.5, color: 'text-primary-100' },
        { icon: 'ri-global-line', x: '50%', y: '94%', delay: 2.5, color: 'text-accent-100' },
      ].map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} pointer-events-none hidden lg:block`}
          style={{ left: item.x, top: item.y, fontSize: '22px' }}
          animate={{ y: [0, -14, 0], rotate: [0, 8, -8, 0], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
        >
          <i className={item.icon}></i>
        </motion.div>
      ))}

      <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 border border-accent-200/60 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></div>
                <span className="text-xs font-semibold text-accent-600 tracking-wide uppercase">Get In Touch</span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground-900 mb-4">
                Let&apos;s Build <span className="text-primary-500">Something Great</span>
              </h2>
              <p className="text-foreground-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Ready to discuss your requirements? Fill out the form below and
                our team will get back to you within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-background-50 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground-900 mb-1">Visit Us</h4>
                    <p className="text-sm text-foreground-600 leading-relaxed">
                      2328, Sector 64<br />
                      Faridabad, Haryana 121004<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-500 flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-background-50 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground-900 mb-1">Call Us</h4>
                    <p className="text-sm text-foreground-600">+91-9899411155</p>
                    <p className="text-sm text-foreground-500">Mon–Sat, 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-background-50 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground-900 mb-1">Email Us</h4>
                    <p className="text-sm text-foreground-600">Info.1htpolymer@gmail.com</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const pdfUrl = 'https://storage.readdy-site.link/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/920c36c5-7901-4b6b-9d83-30231903eb32_High_Tech_Polymers_Company_Profile-1.pdf';
                    const a = document.createElement('a');
                    a.href = pdfUrl;
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    a.download = 'High-Tech-Polymers-Company-Profile.pdf';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  }}
                  className="w-full px-5 py-3.5 bg-background-50 border-2 border-dashed border-primary-300 hover:border-primary-500 rounded-xl text-sm font-semibold text-primary-600 hover:text-primary-700 hover:bg-primary-50/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap group"
                >
                  <i className="ri-download-2-line text-lg group-hover:scale-110 transition-transform duration-200"></i>
                  Download Company Profile
                </button>

                <div className="rounded-2xl overflow-hidden h-56">
                  <iframe
                    src="https://maps.google.com/maps?q=2328+Sector+64+Faridabad+Haryana+121004&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="High-Tech Polymers - Faridabad, Haryana Location"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} data-readdy-form="" className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-foreground-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-200"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productRequired" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Product Required *
                  </label>
                  <select
                    id="productRequired"
                    name="productRequired"
                    value={formData.productRequired}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select a product...</option>
                    <option value="Pure ADC">Pure ADC</option>
                    <option value="Modified ADC">Modified ADC</option>
                    <option value="EV PT">EV PT</option>
                    <option value="Custom Grades">Custom Grades</option>
                    <option value="Multiple Products">Multiple Products</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 text-sm bg-background-50 border border-background-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all duration-200 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  <p className="text-xs text-foreground-400 mt-1 text-right">{formData.message.length}/500</p>
                </div>

                <div className="honeypot-wrapper">
                  <input
                    type="text"
                    name="website_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                    value={formData.websiteAlt}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-background-50 font-semibold text-sm rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/30 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-background-50/30 border-t-background-50 rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <i className="ri-send-plane-line"></i>
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {submitResult && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl text-sm ${
                        submitResult.type === 'success'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <i className={`${submitResult.type === 'success' ? 'ri-checkbox-circle-fill text-green-500' : 'ri-error-warning-fill text-red-500'} mt-0.5`}></i>
                        <span>{submitResult.message}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}