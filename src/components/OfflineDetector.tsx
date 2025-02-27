import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiIcon } from '@heroicons/react/24/outline';

const OfflineDetector = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      
      // Mostrar banner temporário de "Voltou online"
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      {/* Notificação de Offline Permanente */}
      <AnimatePresence>
        {isOffline && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white py-2 px-4 z-50 text-center"
          >
            <div className="flex items-center justify-center space-x-2">
              <WifiIcon className="h-5 w-5" />
              <p>Você está offline. Algumas funcionalidades podem estar limitadas.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Banner temporário de "Voltou online" */}
      <AnimatePresence>
        {showBanner && !isOffline && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 mx-auto w-max bg-green-500 text-white py-2 px-4 rounded-full shadow-md z-50"
          >
            <p className="text-sm font-medium">Você está online novamente! 🎉</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OfflineDetector; 