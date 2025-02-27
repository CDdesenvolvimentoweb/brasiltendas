import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import tenda8 from '../assets/images/tenda8.jpeg';
import novas1 from '../assets/images/novas/novas1.jpeg';

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

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src={tenda8}
            alt="Sobre nós" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <AnimatedSection className="relative container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa História
            </h1>
            <p className="text-xl text-gray-200">
              Há 10 anos sendo referência no mercado de tendas,
              oferecendo soluções inovadoras e de qualidade para nossos clientes.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">
                Uma Trajetória de Sucesso
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundada em 2015, a Brasil Tendas nasceu com o objetivo de oferecer
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
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={novas1}
                alt="Nossa estrutura"
                className="rounded-lg shadow-lg w-full h-[500px] object-contain bg-white p-2 hover:scale-[1.02] transition-transform duration-300"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa empresa é guiada por princípios sólidos que norteiam todas as
              nossas ações e decisões.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection delay={0.1} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções inovadoras em tendas e coberturas, garantindo a
                satisfação de nossos clientes através de produtos de qualidade e
                excelência no atendimento.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a empresa líder no mercado de tendas,
                referência em inovação, qualidade e sustentabilidade.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                delay={index * 0.1}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 