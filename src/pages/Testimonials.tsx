import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Organizadora de Eventos',
    image: '/images/testimonial-1.jpg',
    rating: 5,
    text: 'A Brasil Tendas superou todas as nossas expectativas. A qualidade das tendas e o profissionalismo da equipe foram excepcionais. Recomendo fortemente para qualquer tipo de evento.',
    event: 'Casamento ao Ar Livre',
  },
  {
    id: 2,
    name: 'Carlos Santos',
    role: 'Diretor Comercial',
    image: '/images/testimonial-2.jpg',
    rating: 5,
    text: 'Excelente serviço! As tendas foram perfeitas para nossa feira de negócios. A montagem foi rápida e a equipe muito prestativa.',
    event: 'Feira Empresarial',
  },
  {
    id: 3,
    name: 'Mariana Costa',
    role: 'Noiva',
    image: '/images/testimonial-3.jpg',
    rating: 5,
    text: 'Meu casamento ficou ainda mais especial com as tendas da Brasil Tendas. A decoração ficou incrível e todos os convidados elogiaram muito.',
    event: 'Casamento',
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    role: 'Produtor de Eventos',
    image: '/images/testimonial-4.jpg',
    rating: 4,
    text: 'Trabalho com a Brasil Tendas há anos e nunca tive problemas. São sempre pontuais e profissionais. As tendas são de excelente qualidade.',
    event: 'Shows e Festivais',
  },
  {
    id: 5,
    name: 'Juliana Lima',
    role: 'Gerente de Marketing',
    image: '/images/testimonial-5.jpg',
    rating: 5,
    text: 'A estrutura fornecida para nosso evento corporativo foi impecável. Atendimento de primeira linha e muita atenção aos detalhes.',
    event: 'Evento Corporativo',
  },
  {
    id: 6,
    name: 'Roberto Mendes',
    role: 'Empresário',
    image: '/images/testimonial-6.jpg',
    rating: 5,
    text: 'Contratamos as tendas para uma exposição e o resultado foi incrível. Profissionalismo e qualidade são as marcas da Brasil Tendas.',
    event: 'Exposição de Arte',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/testimonials-hero.jpg')] bg-cover bg-center">
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
              Depoimentos
            </h1>
            <p className="text-xl text-gray-200">
              Veja o que nossos clientes dizem sobre nossas tendas e serviços.
              A satisfação deles é nossa maior recompensa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira os depoimentos de clientes que já utilizaram nossas tendas
              e serviços em seus eventos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-4 text-gray-600">{testimonial.text}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Evento:</span> {testimonial.event}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">
            Pronto para Fazer Parte da Nossa História?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e junte-se aos nossos clientes satisfeitos.
            Vamos tornar seu evento inesquecível!
          </p>
          <a
            href="/contato"
            className="btn bg-white text-primary hover:bg-gray-100"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </div>
  );
} 