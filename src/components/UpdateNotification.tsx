import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UpdateNotification = () => {
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Verificar se há atualizações disponíveis
      let refreshing = false;

      // Lidar com a atualização quando o Service Worker detectar uma nova versão
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });

      // Verificar se há um novo Service Worker esperando para se tornar ativo
      navigator.serviceWorker.ready.then(registration => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Mostrar notificação de nova versão disponível
                setShowUpdateNotification(true);
              }
            });
          }
        });

        // Verificar imediatamente se há atualizações
        registration.update();
        
        // Verificar periodicamente por atualizações
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000); // Verificar a cada 1 hora
      });
    }
  }, []);

  const handleUpdate = () => {
    // Atualizar a página para carregar a nova versão
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        if (registration.waiting) {
          // Enviar mensagem para o service worker em espera
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      });
    }
    setShowUpdateNotification(false);
  };

  return (
    <AnimatePresence>
      {showUpdateNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-premium z-50 p-4 border border-primary-100"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-3 sm:mb-0">
              <h3 className="text-lg font-medium text-gray-900">Nova versão disponível!</h3>
              <p className="text-sm text-gray-600">Atualize para obter as últimas melhorias e recursos.</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowUpdateNotification(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
              >
                Depois
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded hover:bg-primary-600"
              >
                Atualizar agora
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UpdateNotification; 