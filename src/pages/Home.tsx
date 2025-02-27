import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
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
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const services = [
  {
    title: 'Locação de Tendas',
    description: 'Tendas profissionais para eventos de todos os portes, com montagem e desmontagem incluídas.',
    image: tenda1,
  },
  {
    title: 'Fabricação Personalizada',
    description: 'Tendas sob medida para atender às suas necessidades específicas.',
    image: tenda2,
  },
  {
    title: 'Manutenção',
    description: 'Serviços de manutenção e reparo para garantir a durabilidade das suas tendas.',
    image: tenda3,
  },
];

const featuredProducts = [
  {
    name: 'Tenda Piramidal',
    description: 'Ideal para eventos ao ar livre, com design elegante e proteção completa.',
    image: tenda4,
  },
  {
    name: 'Tenda Cristal',
    description: 'Perfeita para eventos noturnos.',
    image: tenda5,
  },
  {
    name: 'Tendas Modulares',
    description: 'Estrutura moderna e versátil, ideal para grandes coberturas.',
    image: tenda2,
  },
];

export default function Home() {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px -25% 0px'
  });

  const [tamanhosRef, tamanhosInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px -25% 0px'
  });

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px -25% 0px'
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px -25% 0px'
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[93vh] bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src={tenda8} 
            alt="Tenda para eventos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Soluções em Tendas para Todos os Eventos
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Fabricação e locação de tendas com qualidade e compromisso para tornar seu evento ainda mais especial.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <Link to="/contato" className="btn btn-secondary">
                Solicite um Orçamento
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" ref={servicesRef}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em tendas, desde a fabricação até a instalação,
              garantindo qualidade e satisfação em cada projeto.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-contain bg-white p-2"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Conheça nosso serviço</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Assista ao nosso vídeo institucional e descubra como podemos tornar seu evento ainda mais especial.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xqvcLz3h0Vc"
              title="Vídeo Institucional Brasil Tendas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Tamanhos Section */}
      <section className="py-20" ref={tamanhosRef}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={tamanhosInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Tamanhos Disponíveis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de tamanhos para atender todas as suas necessidades.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={tamanhosInView ? "visible" : "hidden"}
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

      {/* Featured Products */}
      <section className="py-20 bg-gray-50" ref={productsRef}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça nossa linha de tendas profissionais, desenvolvidas com materiais de alta qualidade
              e tecnologia avançada.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial="hidden"
                animate={productsInView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain bg-white p-2"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to="/produtos"
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Saiba mais →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white" ref={ctaRef}>
        <motion.div
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="container text-center"
        >
          <h2 className="text-3xl font-bold mb-8">
            Pronto para Transformar seu Evento?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a tornar seu evento ainda mais especial
            com nossas soluções em tendas.
          </p>
          <Link to="/contato" className="btn bg-white text-primary-500 hover:bg-gray-100">
            Fale Conosco
          </Link>
        </motion.div>
      </section>
    </div>
  );
} 