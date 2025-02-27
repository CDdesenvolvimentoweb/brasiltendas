import{r as l,j as e,m as d}from"./index-77761d01.js";import{A as i}from"./AnimatedSection-24bb5bb1.js";import{t as c,a as m}from"./tenda4-2302f537.js";import{t as o}from"./tenda5-328cd0db.js";import{t as x}from"./tenda6-e980ab5b.js";import{t as p}from"./tenda7-c4e7779a.js";import{t as h}from"./tamanhos-eaa9a799.js";import"./index-137ea080.js";const u=[{id:1,name:"Tenda Piramidal",description:"Ideal para eventos ao ar livre, com design elegante e proteção completa.",image:c,sizes:["3x3m","4x4m","5x5m","6x6m","8x8m","10x10m"],features:["Estrutura em aço galvanizado","Cobertura em lona PVC","Blackout e proteção UV","Resistente a ventos","Fácil montagem"],applications:["Festas e eventos","Feiras","Exposições","Áreas de lazer"]},{id:2,name:"Tenda Cristal",description:"Perfeita para eventos a noite.",image:o,sizes:["10x20m","15x30m","20x40m","25x50m"],features:["Estrutura modular","Vão livre sem colunas internas","Cobertura dupla face","Sistema de drenagem integrado","Alta resistência estrutural"],applications:["Eventos corporativos","Armazenamento","Centros logísticos","Shows e espetáculos"]},{id:4,name:"Tenda Tensionada",description:"Moderna e elegante, ideal para eventos sofisticados.",image:m,sizes:["Personalizado"],features:["Design contemporâneo","Formas orgânicas","Lona especial tensionada","Resistente às intempéries","Personalização total"],applications:["Casamentos","Eventos corporativos","Áreas de piscina","Hotéis e resorts"]},{id:5,name:"Tenda Duas Águas",description:"Estrutura tradicional com excelente aproveitamento de espaço.",image:o,sizes:["5x5m","6x6m","8x8m","10x10m"],features:["Design clássico","Ótimo escoamento de água","Estrutura reforçada","Versatilidade de uso","Fácil instalação"],applications:["Eventos ao ar livre","Feiras comerciais","Áreas de lazer","Eventos esportivos"]},{id:6,name:"Tenda Personalizada",description:"Soluções sob medida para necessidades específicas.",image:x,sizes:["Conforme projeto"],features:["Projeto personalizado","Cores customizadas","Acabamentos especiais","Acessórios opcionais","Soluções únicas"],applications:["Eventos especiais","Projetos corporativos","Instalações permanentes","Usos específicos"]}];function z(){const[t,r]=l.useState(null);return e.jsxs("div",{children:[e.jsxs("section",{className:"relative py-20 bg-gray-900 text-white",children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("img",{src:p,alt:"Produtos",className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-black/60"})]}),e.jsx(i,{className:"relative container",children:e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:"Nossos Produtos"}),e.jsx("p",{className:"text-xl text-gray-200",children:"Conheça nossa linha completa de tendas profissionais para todos os tipos de eventos e necessidades."})]})})]}),e.jsx("section",{className:"py-20 bg-gray-50",children:e.jsxs("div",{className:"container",children:[e.jsxs(i,{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Tamanhos Disponíveis"}),e.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Oferecemos uma ampla variedade de tamanhos para atender todas as suas necessidades. Confira nossa tabela de medidas padrão."})]}),e.jsx(i,{delay:.2,className:"rounded-lg overflow-hidden shadow-lg",children:e.jsx("img",{src:h,alt:"Tamanhos disponíveis de tendas",className:"w-full h-auto"})})]})}),e.jsx("section",{className:"py-20",children:e.jsxs("div",{className:"container",children:[e.jsxs(i,{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Catálogo de Tendas"}),e.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Explore nossa variedade de tendas profissionais, desenvolvidas com tecnologia avançada e materiais de alta qualidade."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:u.map((s,n)=>e.jsxs(i,{delay:n*.1,className:"bg-white rounded-lg shadow-lg overflow-hidden group",children:[e.jsxs("div",{className:"relative h-64 overflow-hidden",children:[e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-full object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-110"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-2xl font-bold mb-4",children:s.name}),e.jsx("p",{className:"text-gray-600 mb-6",children:s.description}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Tamanhos Disponíveis:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.sizes.map(a=>e.jsx("span",{className:"px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium",children:a},a))})]}),e.jsxs("button",{onClick:()=>r(t===s.id?null:s.id),className:"text-primary-500 hover:text-primary-600 font-medium flex items-center",children:[t===s.id?"Ver menos":"Ver mais detalhes",e.jsx("svg",{className:`ml-2 h-5 w-5 transform transition-transform ${t===s.id?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),t===s.id&&e.jsxs(d.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"mt-6 pt-6 border-t",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Características:"}),e.jsx("ul",{className:"list-disc list-inside space-y-1 text-gray-600",children:s.features.map(a=>e.jsx("li",{children:a},a))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Aplicações:"}),e.jsx("ul",{className:"list-disc list-inside space-y-1 text-gray-600",children:s.applications.map(a=>e.jsx("li",{children:a},a))})]})]})]})]},s.id))})]})}),e.jsx("section",{className:"py-20 bg-primary-500 text-white",children:e.jsxs(i,{className:"container text-center",children:[e.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Encontrou o Produto Ideal?"}),e.jsx("p",{className:"text-xl mb-8 max-w-2xl mx-auto",children:"Entre em contato conosco para obter mais informações sobre nossos produtos e solicitar um orçamento personalizado."}),e.jsx("a",{href:"/contato",className:"btn bg-white text-primary-500 hover:bg-gray-100",children:"Solicitar Orçamento"})]})})]})}export{z as default};
