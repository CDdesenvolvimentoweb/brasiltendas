import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed', platform: string }>;
}

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
      
      // Verificar se o usuário já recusou antes
      const hasUserRejectedInstall = localStorage.getItem('pwaBannerDismissed');
      if (!hasUserRejectedInstall) {
        setTimeout(() => setIsVisible(true), 3000);
      }
    };

    // Verificar se é iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Mostrar o banner para iOS com um atraso, se não tiver sido descartado antes
    if (isIOSDevice) {
      const hasIOSBannerBeenDismissed = localStorage.getItem('iosBannerDismissed');
      if (!hasIOSBannerBeenDismissed) {
        setTimeout(() => setIsVisible(true), 3000);
      }
    }

    window.addEventListener('beforeinstallprompt', handler as any);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler as any);
    };
  }, []);

  const onInstall = () => {
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
    promptInstall.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação do PWA');
      } else {
        console.log('Usuário recusou a instalação do PWA');
        localStorage.setItem('pwaBannerDismissed', 'true');
      }
      setIsVisible(false);
    });
  };

  const dismissBanner = () => {
    setIsVisible(false);
    if (isIOS) {
      localStorage.setItem('iosBannerDismissed', 'true');
    } else {
      localStorage.setItem('pwaBannerDismissed', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md z-50 border-t border-gray-200 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-4">
          {isIOS ? (
            <p className="text-sm text-gray-700">
              Instale nosso aplicativo: toque em <span className="inline-block"><svg className="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg></span> e depois "Adicionar à Tela de Início"
            </p>
          ) : (
            <p className="text-sm text-gray-700">
              Instale este aplicativo para um acesso mais rápido
            </p>
          )}
        </div>
        
        <div className="flex items-center">
          {!isIOS && (
            <button
              onClick={onInstall}
              className="bg-primary-500 text-white px-4 py-2 rounded text-sm font-medium mr-2"
            >
              Instalar
            </button>
          )}
          <button
            onClick={dismissBanner}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fechar"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPWA; 