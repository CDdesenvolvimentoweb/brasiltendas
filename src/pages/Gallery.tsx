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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const categories = [
  'Todos',
  'Casamentos',
  'Eventos Corporativos',
  'Feiras',
  'Shows',
  'Festas',
];

const galleryItems = [
  {
    id: 1,
    title: 'Tenda Piramidal Elegante',
    category: 'Casamentos',
    image: tenda1,
    description: 'Tenda piramidal com acabamento premium para casamentos ao ar livre.',
  },
  {
    id: 2,
    title: 'Tenda para Eventos',
    category: 'Feiras',
    image: tenda2,
    description: 'Estrutura versátil ideal para feiras e exposições.',
  },
  {
    id: 3,
    title: 'Tenda Corporativa',
    category: 'Eventos Corporativos',
    image: tenda3,
    description: 'Tenda personalizada para eventos empresariais de grande porte.',
  },
  {
    id: 4,
    title: 'Tenda para Shows',
    category: 'Shows',
    image: tenda4,
    description: 'Cobertura ampla para eventos musicais e shows.',
  },
  {
    id: 5,
    title: 'Tenda para Festas',
    category: 'Festas',
    image: tenda5,
    description: 'Tenda ideal para festas e celebrações.',
  },
  {
    id: 6,
    title: 'Tenda Especial',
    category: 'Feiras',
    image: tenda6,
    description: 'Estrutura moderna para eventos especiais.',
  },
  {
    id: 7,
    title: 'Tenda Premium',
    category: 'Casamentos',
    image: tenda7,
    description: 'Tenda com design sofisticado para eventos premium.',
  },
  {
    id: 8,
    title: 'Tenda Galpão',
    category: 'Eventos Corporativos',
    image: tenda8,
    description: 'Estrutura de grande porte para eventos corporativos.',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredGallery = selectedCategory === 'Todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const selectedItem = selectedImage !== null
    ? galleryItems.find(item => item.id === selectedImage)
    : null;

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
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm">{item.category}</p>
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
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-4xl bg-white rounded-lg overflow-hidden">
            {selectedItem && (
              <div>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full max-h-[70vh] object-cover"
                />
                <div className="p-6">
                  <Dialog.Title className="text-2xl font-bold mb-2">
                    {selectedItem.title}
                  </Dialog.Title>
                  <p className="text-gray-600 mb-2">{selectedItem.category}</p>
                  <p className="text-gray-800">{selectedItem.description}</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
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