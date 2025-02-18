import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  {
    title: 'Qualidade',
    description: 'Comprometimento com a excelência em todos os nossos produtos e serviços.',
    icon: '🌟',
  },
  {
    title: 'Inovação',
    description: 'Busca constante por novas tecnologias e soluções para nossos clientes.',
    icon: '💡',
  },
  {
    title: 'Confiabilidade',
    description: 'Cumprimento de prazos e compromissos estabelecidos com nossos clientes.',
    icon: '🤝',
  },
  {
    title: 'Sustentabilidade',
    description: 'Preocupação com o meio ambiente em todos os nossos processos.',
    icon: '🌱',
  },
];

const team = [
  {
    name: 'João Silva',
    role: 'Diretor Executivo',
    image: '/images/team-1.jpg',
  },
  {
    name: 'Maria Santos',
    role: 'Gerente de Operações',
    image: '/images/team-2.jpg',
  },
  {
    name: 'Pedro Oliveira',
    role: 'Supervisor de Produção',
    image: '/images/team-3.jpg',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '0px 0px -10% 0px'
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center">
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
              Nossa História
            </h1>
            <p className="text-xl text-gray-200">
              Há mais de duas décadas, somos referência no mercado de tendas,
              oferecendo soluções inovadoras e de qualidade para nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20" ref={ref}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">
                Uma Trajetória de Sucesso
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundada em 2000, a Brasil Tendas nasceu com o objetivo de oferecer
                  soluções inovadoras em coberturas para eventos e estruturas temporárias.
                </p>
                <p>
                  Ao longo dos anos, investimos constantemente em tecnologia e
                  capacitação de nossa equipe, o que nos permitiu expandir nossa
                  atuação e nos tornar referência no mercado.
                </p>
                <p>
                  Hoje, contamos com uma moderna fábrica e uma equipe altamente
                  qualificada, prontos para atender às mais diversas necessidades
                  de nossos clientes.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/images/factory.jpg"
                alt="Nossa fábrica"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50" ref={ref}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa empresa é guiada por princípios sólidos que norteiam todas as
              nossas ações e decisões.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções inovadoras em tendas e coberturas, garantindo a
                satisfação de nossos clientes através de produtos de qualidade e
                excelência no atendimento.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a empresa líder no mercado de tendas,
                referência em inovação, qualidade e sustentabilidade.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" ref={ref}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais dedicados que fazem da Brasil Tendas
              uma empresa de excelência.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 