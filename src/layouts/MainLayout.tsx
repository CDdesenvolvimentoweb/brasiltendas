import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import logoBranco from '../assets/images/logo-10-anos-branca.png';
import logoPreto from '../assets/images/logo-10-anos-preto.png';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import ChatWidget from '../components/ChatWidget';
import InstallPWA from '../components/InstallPWA';
import UpdateNotification from '../components/UpdateNotification';
import OfflineDetector from '../components/OfflineDetector';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Galeria', href: '/galeria' },
  { name: 'Depoimentos', href: '/depoimentos' },
  { name: 'Contato', href: '/contato' },
];

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Define se está rolando para cima ou para baixo
      setIsVisible((prevIsVisible) => {
        const isScrollingUp = prevScrollPos > currentScrollPos;
        const isAtTop = currentScrollPos < 50;
        return isScrollingUp || isAtTop;
      });
      
      // Atualiza o estado de scroll para a barra de cores
      setIsScrolled(currentScrollPos > 50);
      
      // Atualiza a posição anterior do scroll
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <div className="flex flex-col min-h-screen scrollbar-premium">
      <SEO />
      <InstallPWA />
      <UpdateNotification />
      <OfflineDetector />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary-500"
      >
        Pular para o conteúdo principal
      </a>
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300
          ${isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-primary-500 py-4'}`}
        role="banner"
      >
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <Link
            to="/"
            className="mr-4 cursor-pointer py-1 lg:ml-2"
          >
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={isScrolled ? logoPreto : logoBranco}
              alt="Brasil Tendas Logo"
              className="h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-2 py-1 text-sm font-medium transition-colors
                  ${isScrolled 
                    ? 'text-gray-700 hover:text-primary-500' 
                    : 'text-white hover:text-white/90'}
                  ${location.pathname === item.href 
                    ? isScrolled ? 'text-primary-500' : 'text-white font-bold' 
                    : ''}
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:w-0 hover:after:w-full after:bg-current 
                  after:transition-all after:duration-300
                  ${location.pathname === item.href ? 'after:w-full' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link
              to="/contato"
              className={`btn ${isScrolled 
                ? 'bg-primary-500 text-white hover:bg-primary-600' 
                : 'bg-white text-primary-500 hover:bg-white/90'}`}
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 lg:hidden
              ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-primary-400'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-50 lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            />

            <Dialog.Panel
              as={motion.div}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
            >
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleNavigation('/')}
                  className="-m-1.5 p-1.5"
                >
                  <img
                    src={logoPreto}
                    alt="Brasil Tendas Logo"
                    className="h-8 w-auto"
                  />
                </button>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Fechar menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className={`-mx-3 block w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-left
                          ${location.pathname === item.href
                            ? 'bg-primary-50 text-primary-500'
                            : 'text-gray-900 hover:bg-gray-50'}`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                  <div className="py-6">
                    <button
                      onClick={() => handleNavigation('/contato')}
                      className="btn w-full justify-center"
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>

      <main id="main-content" className="flex-grow pt-16" role="main">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white mt-auto" role="contentinfo">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Brasil Tendas</h3>
              <p className="text-gray-400">
                Especialistas em fabricação e locação de tendas para eventos.
                Transformando seus eventos em momentos inesquecíveis.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1HLpkdTiAM/?mibextid=wwXIfr" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/brasil.tendas/" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div>
                <h3 className="font-semibold mb-1">Endereço</h3>
                <p className="text-gray-600">
                  Rua Nelson dos Santos Antônio, 31
                  <br />
                  Jardim Santa Rosa
                  <br />
                  Itu - SP
                  <br />
                  CEP: 13309-773
                </p>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mt-1 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <p className="text-gray-600">
                    (11) 98812-0388 (WhatsApp)
                    <br />
                    (11) 2428-9800
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mt-1 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <p className="text-gray-600">contatos@brasiltendas.com.br</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links Rápidos</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Brasil Tendas. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Site desenvolvido pela C&D Desenvolvimentos</p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
      <ChatWidget />
    </div>
  );
} 