import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511988120388', '_blank');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        aria-label="Abrir chat"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.874-.377-4.086-1.038l-2.864.854.854-2.864A7.96 7.96 0 015 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-8 z-50 w-72 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-green-500 p-4 text-white">
              <h3 className="text-lg font-semibold">Atendimento</h3>
              <p className="text-sm opacity-90">
                Como podemos ajudar você hoje?
              </p>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-gray-600">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp com nossa equipe de atendimento.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Iniciar Conversa
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 