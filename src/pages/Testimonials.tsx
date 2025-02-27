import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import tenda5 from '../assets/images/tenda5.jpeg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    id: 1,
    name: 'Marcela Presti Marino',
    role: 'Cliente',
    rating: 5,
    text: 'Adorei o atendimento! Rápidos na montagem e desmontagem! As tendas ficaram ótimas e todos foram super simpáticos e prestativos! Recomendo e não vejo a hora de uma nova festa para poder contratá-los novamente! Obrigada a toda equipe!',
    event: 'Festa Particular',
  },
  {
    id: 2,
    name: 'Vanessa Perroni',
    role: 'Cliente',
    rating: 5,
    text: 'Super atenciosos, pontuais cumprem o que prometem, ótimo atendimento, parabéns, super recomendo',
    event: 'Evento Corporativo',
  },
  {
    id: 3,
    name: 'Lazaro Castro',
    role: 'Local Guide',
    rating: 5,
    text: 'Parabéns A Brasil Tendas, por excelente trabalho feito em nossa festa comunitária, a empresa não mediu esforços para nos atender e prestar um bom atendimento! Super recomendo.',
    event: 'Festa Comunitária',
  }
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
        <div className="absolute inset-0">
          <img 
            src={tenda5}
            alt="Depoimentos" 
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              O Que Dizem Nossos Clientes
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A satisfação de nossos clientes é o que nos motiva a continuar oferecendo 
              serviços de excelência em todos os eventos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-full w-14 h-14 flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-xl text-gray-900">{testimonial.name}</h3>
                      <p className="text-primary-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <blockquote className="relative">
                    <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 opacity-50" 
                         fill="currentColor" 
                         viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                    </svg>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed relative z-10 pl-4">
                      {testimonial.text}
                    </p>
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center text-primary-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{testimonial.event}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 