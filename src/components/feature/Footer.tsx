import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Industries', href: '/industries' },
      { label: 'Quality', href: '/quality' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Pure ADC', href: '/products' },
      { label: 'Modified ADC', href: '/products' },
      { label: 'EV PT', href: '/products' },
      { label: 'Custom Grades', href: '/products' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Footwear & EVA', href: '/industries' },
      { label: 'PVC & Rubber', href: '/industries' },
      { label: 'Packaging', href: '/industries' },
      { label: 'Insulation', href: '/industries' },
      { label: 'Plastic Processing', href: '/industries' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground-950 text-background-50/80">
      <div className="w-full px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center">
                  <i className="ri-flask-line text-background-50 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-background-50 tracking-tight">
                    HIGH-TECH
                  </h3>
                  <p className="text-xs text-primary-400 tracking-widest">POLYMERS</p>
                </div>
              </div>
              <p className="text-sm text-background-50/60 max-w-sm leading-relaxed mb-6">
                Leading manufacturer of Azodicarbonamide blowing agents and EVA processing technology since 2007. Engineering cellular performance into polymers worldwide.
              </p>
              <a
                href="https://storage.readdy-site.link/project_files/00f3fac9-ce38-44e0-92c0-362a5f4aedc3/920c36c5-7901-4b6b-9d83-30231903eb32_High_Tech_Polymers_Company_Profile-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="High-Tech-Polymers-Company-Profile.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary-500 text-background-50 rounded-xl hover:bg-primary-600 transition-all duration-200 whitespace-nowrap"
              >
                <i className="ri-download-line"></i>
                Download Company Profile
              </a>
            </div>

            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-label text-xs font-semibold uppercase tracking-widest text-background-50/40 mb-5">
                  {col.title}
                </h4>
                <div className="w-8 h-px bg-primary-500/50 mb-5"></div>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-background-50/55 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-background-50/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <p className="text-xs text-background-50/40">
                &copy; {new Date().getFullYear()} High-Tech Polymers. All rights reserved.
              </p>
              <span className="hidden sm:block text-background-50/20">|</span>
              <p className="text-xs text-background-50/40">
                Helpline: +91-9899411155 | Info.1htpolymer@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-background-50/8 text-background-50/50 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-200" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-base"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-background-50/8 text-background-50/50 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-200" aria-label="Twitter">
                <i className="ri-twitter-x-fill text-base"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-background-50/8 text-background-50/50 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-200" aria-label="YouTube">
                <i className="ri-youtube-fill text-base"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-background-50/8 text-background-50/50 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-200" aria-label="Email">
                <i className="ri-mail-line text-base"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}