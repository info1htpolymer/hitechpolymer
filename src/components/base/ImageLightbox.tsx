import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageLightbox({ isOpen, onClose, src, alt, caption }: ImageLightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-foreground-950/85 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-background-50/15 text-background-50 hover:bg-background-50/25 transition-colors"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl"
              />
            </div>
            {caption && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-4 text-center"
              >
                <h4 className="font-heading text-lg font-bold text-background-50">{caption}</h4>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}