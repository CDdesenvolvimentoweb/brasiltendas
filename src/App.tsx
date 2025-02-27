import { 
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LoadingSpinner from './components/LoadingSpinner';

// Configuração de lazy loading otimizada
const lazyLoad = (importFn: () => Promise<any>) => {
  return lazy(() => {
    return Promise.all([
      importFn(),
      new Promise(resolve => setTimeout(resolve, 300)) // Mínimo de tempo para evitar flash
    ]).then(([moduleExports]) => moduleExports);
  });
};

// Lazy load components com prefetch
const MainLayout = lazyLoad(() => import('./layouts/MainLayout'));
const Home = lazyLoad(() => import('./pages/Home'));
const About = lazyLoad(() => import('./pages/About'));
const Products = lazyLoad(() => import('./pages/Products'));
const Gallery = lazyLoad(() => import('./pages/Gallery'));
const Testimonials = lazyLoad(() => import('./pages/Testimonials'));
const Contact = lazyLoad(() => import('./pages/Contact'));

// Configuração do Suspense com fallback otimizado
const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

const router = createHashRouter([
  {
    path: "/",
    element: withSuspense(MainLayout),
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: "sobre",
        element: withSuspense(About),
      },
      {
        path: "produtos",
        element: withSuspense(Products),
      },
      {
        path: "galeria",
        element: withSuspense(Gallery),
      },
      {
        path: "depoimentos",
        element: withSuspense(Testimonials),
      },
      {
        path: "contato",
        element: withSuspense(Contact),
      },
    ],
  },
]);

// Prefetch das rotas mais comuns
const prefetchRoutes = () => {
  const routes = [About, Products, Gallery];
  routes.forEach(route => {
    const prefetchComponent = route as any;
    if (prefetchComponent.preload) {
      prefetchComponent.preload();
    }
  });
};

// Executa o prefetch após o carregamento inicial
setTimeout(prefetchRoutes, 1000);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
