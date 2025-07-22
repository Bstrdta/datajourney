import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCalendly } from '../contexts/CalendlyContext';

const CalendlyModal = () => {
  const { t } = useTranslation('common');
  const { isCalendlyOpen, closeCalendly } = useCalendly();

  return (
    <AnimatePresence>
      {isCalendlyOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCalendly}
        >
          <motion.div
            className="bg-white rounded-3xl w-full max-w-4xl h-[90vh] relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-dark to-blue-900 text-white p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{t('buttons.book_audit')}</h2>
                <p className="text-neutral-300">
                  {t('language.current') === 'English' 
                    ? '30 minutes to analyze your needs and define your Power BI strategy'
                    : '30 minutes pour analyser vos besoins et définir votre stratégie Power BI'
                  }
                </p>
              </div>
              <button
                onClick={closeCalendly}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Calendly Iframe */}
            <div className="h-[calc(100%-120px)]">
              <iframe
                src="https://calendly.com/aminebennouna514/30min?embed_domain=datajourney.com&embed_type=Inline"
                width="100%"
                height="100%"
                frameBorder="0"
                title={t('buttons.book_audit')}
                className="rounded-b-3xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CalendlyModal;