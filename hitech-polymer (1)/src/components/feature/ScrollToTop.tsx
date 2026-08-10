import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[90] w-11 h-11 flex items-center justify-center rounded-full bg-primary-500 text-background-50 hover:bg-primary-600 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
          aria-label="Scroll to top"
        >
          <i className="ri-arrow-up-line text-lg"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
}