import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Quality', href: '/quality' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  const handleGetInTouch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHome) {
      const el = document.getElementById('get-in-touch');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMobileOpen(false);
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('get-in-touch');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 600);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[99] transition-all duration-400 ${
        scrolled || !isHome
          ? 'bg-background-50/90 backdrop-blur-xl border-b border-background-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Molecular network decorative background - visible when scrolled */}
      {(scrolled || !isHome) && (
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Abstract%20orange%20and%20blue%20chemical%20molecular%20bond%20network%20pattern%20on%20clean%20white%20background%2C%20hexagonal%20structure%20with%20connecting%20nodes%2C%20subtle%20scientific%20decorative%20pattern%2C%20minimalist%20chemistry%20inspired%20art%2C%20soft%20gradient%20colors%2C%20seamless%20texture%20for%20website%20header%20background&width=1920&height=200&seq=htp-nav-bg-01&orientation=landscape)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
          }}
        />
      )}

      {/* Floating decorative icons for navbar */}
      {(!scrolled && isHome) && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { icon: 'ri-flask-line', x: '12%', delay: 0 },
            { icon: 'ri-test-tube-line', x: '88%', delay: 1.2 },
            { icon: 'ri-lightbulb-line', x: '25%', delay: 0.6 },
            { icon: 'ri-dropper-line', x: '72%', delay: 1.8 },
          ].map((item, i) => (
            <motion.div
              key={`nav-float-${i}`}
              className="absolute text-background-50/10"
              style={{ left: item.x, top: '50%', fontSize: '16px' }}
              animate={{
                y: [0, -8, 0],
                opacity: [0.06, 0.12, 0.06],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: item.delay,
                ease: 'easeInOut',
              }}
            >
              <i className={item.icon}></i>
            </motion.div>
          ))}
        </div>
      )}

      <div className="w-full px-4 md:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-105">
              <i className="ri-flask-line text-background-50 text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading text-sm md:text-base font-bold tracking-wide leading-none whitespace-nowrap transition-colors duration-300 ${
                scrolled || !isHome ? 'text-foreground-900' : 'text-background-50'
              }`}>
                HIGH-TECH
              </span>
              <span className={`font-heading text-xs md:text-sm tracking-widest whitespace-nowrap transition-colors duration-300 ${
                scrolled || !isHome ? 'text-primary-500' : 'text-accent-400'
              }`}>
                POLYMERS
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1 relative z-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                    scrolled || !isHome
                      ? isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-foreground-600 hover:text-foreground-900 hover:bg-background-100'
                      : isActive
                        ? 'text-background-50 bg-background-50/15'
                        : 'text-background-50/80 hover:text-background-50 hover:bg-background-50/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary-500"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href="/#get-in-touch"
              onClick={handleGetInTouch}
              className={`ml-3 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                scrolled || !isHome
                  ? 'bg-primary-500 text-background-50 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25'
                  : 'bg-accent-500 text-background-50 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/25'
              }`}
            >
              Get In Touch
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors relative z-10 ${
              scrolled || !isHome
                ? 'text-foreground-800 hover:bg-background-100'
                : 'text-background-50 hover:bg-background-50/10'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`text-xl transition-transform duration-200 ${mobileOpen ? 'ri-close-line rotate-90' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-50/95 backdrop-blur-xl border-t border-background-200/50 overflow-hidden relative z-10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-foreground-600 hover:text-foreground-900 hover:bg-background-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="/#get-in-touch"
                onClick={handleGetInTouch}
                className="mt-2 px-5 py-3 text-sm font-semibold text-background-50 bg-primary-500 hover:bg-primary-600 rounded-xl text-center transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}