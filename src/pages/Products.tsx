import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import tenda1 from '../assets/images/tenda1.jpeg';
import tenda2 from '../assets/images/tenda2.jpeg';
import tenda3 from '../assets/images/tenda3.jpeg';
import tenda4 from '../assets/images/tenda4.jpeg';
import tenda5 from '../assets/images/tenda5.jpeg';
import tenda6 from '../assets/images/tenda6.jpeg';
import tenda7 from '../assets/images/tenda7.jpeg';
import tenda8 from '../assets/images/tenda8.jpeg';
import tamanhos from '../assets/images/tamanhos.jpeg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const products = [
  {
    id: 1,
    name: 'Tenda Piramidal',
    description: 'Ideal para eventos ao ar livre, com design elegante e proteção completa.',
    image: tenda1,
    sizes: ['3x3m', '4x4m', '5x5m', '6x6m', '8x8m', '10x10m'],
    features: [
      'Estrutura em aço galvanizado',
      'Cobertura em lona PVC',
      'Blackout e proteção UV',
      'Resistente a ventos',
      'Fácil montagem',
    ],
    applications: [
      'Festas e eventos',
      'Feiras',
      'Exposições',
      'Áreas de lazer',
    ],
  },
  {
    id: 2,
    name: 'Tenda Galpão',
    description: 'Perfeita para grandes eventos e armazenamento temporário.',
    image: tenda8,
    sizes: ['10x20m', '15x30m', '20x40m', '25x50m'],
    features: [
      'Estrutura modular',
      'Vão livre sem colunas internas',
      'Cobertura dupla face',
      'Sistema de drenagem integrado',
      'Alta resistência estrutural',
    ],
    applications: [
      'Eventos corporativos',
      'Armazenamento',
      'Centros logísticos',
      'Shows e espetáculos',
    ],
  },
  {
    id: 3,
    name: 'Tenda Chapéu de Bruxa',
    description: 'Design clássico e versátil para diversos tipos de eventos.',
    image: tenda3,
    sizes: ['3x3m', '4x4m', '5x5m', '6x6m'],
    features: [
      'Design tradicional',
      'Excelente ventilação',
      'Lona anti-chama',
      'Montagem rápida',
      'Versatilidade de uso',
    ],
    applications: [
      'Eventos sociais',
      'Áreas de alimentação',
      'Praças de alimentação',
      'Pequenos eventos',
    ],
  },
  {
    id: 4,
    name: 'Tenda Tensionada',
    description: 'Moderna e elegante, ideal para eventos sofisticados.',
    image: tenda4,
    sizes: ['Personalizado'],
    features: [
      'Design contemporâneo',
      'Formas orgânicas',
      'Lona especial tensionada',
      'Resistente às intempéries',
      'Personalização total',
    ],
    applications: [
      'Casamentos',
      'Eventos corporativos',
      'Áreas de piscina',
      'Hotéis e resorts',
    ],
  },
  {
    id: 5,
    name: 'Tenda Duas Águas',
    description: 'Estrutura tradicional com excelente aproveitamento de espaço.',
    image: tenda5,
    sizes: ['5x5m', '6x6m', '8x8m', '10x10m'],
    features: [
      'Design clássico',
      'Ótimo escoamento de água',
      'Estrutura reforçada',
      'Versatilidade de uso',
      'Fácil instalação',
    ],
    applications: [
      'Eventos ao ar livre',
      'Feiras comerciais',
      'Áreas de lazer',
      'Eventos esportivos',
    ],
  },
  {
    id: 6,
    name: 'Tenda Personalizada',
    description: 'Soluções sob medida para necessidades específicas.',
    image: tenda6,
    sizes: ['Conforme projeto'],
    features: [
      'Projeto personalizado',
      'Cores customizadas',
      'Acabamentos especiais',
      'Acessórios opcionais',
      'Soluções únicas',
    ],
    applications: [
      'Eventos especiais',
      'Projetos corporativos',
      'Instalações permanentes',
      'Usos específicos',
    ],
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px -10% 0px'
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src={tenda7} 
            alt="Produtos" 
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
              Nossos Produtos
            </h1>
            <p className="text-xl text-gray-200">
              Conheça nossa linha completa de tendas profissionais para
              todos os tipos de eventos e necessidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tamanhos Section */}
      <section className="py-20 bg-gray-50" ref={ref}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Tamanhos Disponíveis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de tamanhos para atender todas as suas necessidades.
              Confira nossa tabela de medidas padrão.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={tamanhos}
              alt="Tamanhos disponíveis de tendas"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-20" ref={ref}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Catálogo de Tendas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore nossa variedade de tendas profissionais, desenvolvidas com
              tecnologia avançada e materiais de alta qualidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Tamanhos Disponíveis:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                    className="text-primary-500 hover:text-primary-600 font-medium flex items-center"
                  >
                    {selectedProduct === product.id ? 'Ver menos' : 'Ver mais detalhes'}
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform ${
                        selectedProduct === product.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {selectedProduct === product.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t"
                    >
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Características:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {product.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Aplicações:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {product.applications.map((application) => (
                            <li key={application}>{application}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="container text-center"
        >
          <h2 className="text-3xl font-bold mb-8">
            Encontrou o Produto Ideal?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para obter mais informações sobre nossos
            produtos e solicitar um orçamento personalizado.
          </p>
          <a
            href="/contato"
            className="btn bg-white text-primary-500 hover:bg-gray-100"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </section>
    </div>
  );
} 