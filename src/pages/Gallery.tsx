import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dialog } from '@headlessui/react';
import tenda1 from '../assets/images/tenda1.jpeg';
import tenda2 from '../assets/images/tenda2.jpeg';
import tenda3 from '../assets/images/tenda3.jpeg';
import tenda4 from '../assets/images/tenda4.jpeg';
import tenda5 from '../assets/images/tenda5.jpeg';
import tenda6 from '../assets/images/tenda6.jpeg';
import tenda7 from '../assets/images/tenda7.jpeg';
import tenda8 from '../assets/images/tenda8.jpeg';
import novas1 from '../assets/images/novas/novas1.jpeg';
import novas2 from '../assets/images/novas/novas2.jpeg';
import novas3 from '../assets/images/novas/novas3.jpeg';
import novas4 from '../assets/images/novas/novas4.jpeg';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const galleryItems = [
  {
    id: 1,
    title: 'Tenda Piramidal Elegante',
    image: tenda1,
    description: 'Tenda piramidal com acabamento premium para casamentos ao ar livre.',
  },
  {
    id: 2,
    title: 'Tenda para Festas',
    image: tenda5,
    description: 'Tenda ideal para festas e celebrações.',
  },
  {
    id: 3,
    title: 'Tenda Corporativa',
    image: tenda3,
    description: 'Tenda personalizada para eventos empresariais de grande porte.',
  },
  {
    id: 4,
    title: 'Tenda para Shows',
    image: tenda4,
    description: 'Cobertura ampla para eventos musicais e shows.',
  },
  {
    id: 5,
    
    title: 'Tenda para Eventos',
    image: tenda2,
    description: 'Estrutura versátil ideal para feiras e exposições.',
  },
  {
    id: 6,
    title: 'Tenda Especial',
    image: tenda6,
    description: 'Estrutura moderna para eventos especiais.',
  },
  {
    id: 7,
    title: 'Tenda Premium',
    image: tenda7,
    description: 'Tenda com design sofisticado para eventos premium.',
  },
  {
    id: 8,
    title: 'Tenda Cristal',
    image: tenda8,
    description: 'Perfeita para eventos a noite.',
  },
  {
    id: 9,
    title: 'Tenda para Eventos Corporativos',
    image: novas1,
    description: 'Estrutura ampla e elegante para eventos empresariais.',
  },
  {
    id: 10,
    title: 'Tenda para Casamentos',
    image: novas2,
    description: 'Ambiente sofisticado para celebrações especiais.',
  },
  {
    id: 11,
    title: 'Tenda para Feiras',
    image: novas3,
    description: 'Espaço ideal para exposições e feiras comerciais.',
  },
  {
    id: 12,
    title: 'Tenda para Eventos Sociais',
    image: novas4,
    description: 'Cobertura perfeita para eventos sociais e festas.',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentIndex = selectedImage !== null
    ? galleryItems.findIndex(item => item.id === selectedImage)
    : -1;

  const selectedItem = currentIndex !== -1 ? galleryItems[currentIndex] : null;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(galleryItems[currentIndex - 1].id);
    } else {
      setSelectedImage(galleryItems[galleryItems.length - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < galleryItems.length - 1) {
      setSelectedImage(galleryItems[currentIndex + 1].id);
    } else {
      setSelectedImage(galleryItems[0].id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src={tenda8} 
            alt="Galeria de Tendas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galeria de Eventos
            </h1>
            <p className="text-xl text-gray-200">
              Explore nossa galeria de eventos realizados e inspire-se com as
              possibilidades que nossas tendas podem oferecer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-12"
          >
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="relative rounded-lg shadow-lg overflow-hidden">
                    <div className="pb-[75%] relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-contain bg-white p-2"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                      <div className="text-white text-center p-4">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        
        <div 
          className="fixed inset-0 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <Dialog.Panel className="w-full h-full flex items-center justify-center relative">
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full flex flex-col items-center justify-center p-4"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="max-h-[80vh] max-w-[80vw] object-contain"
                    />
                  </div>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevious();
                    }}
                    className="absolute left-4 p-2 text-white hover:text-gray-300 focus:outline-none"
                    aria-label="Previous image"
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-4 p-2 text-white hover:text-gray-300 focus:outline-none"
                    aria-label="Next image"
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
                  <p className="text-gray-200">{selectedItem.description}</p>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 focus:outline-none"
                  aria-label="Close modal"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">
            Quer Seu Evento em Nossa Galeria?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e realize seu evento com nossas tendas.
            Transforme seu sonho em realidade!
          </p>
          <a
            href="/contato"
            className="btn bg-white text-primary-500 hover:bg-gray-100"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </div>
  );
} 