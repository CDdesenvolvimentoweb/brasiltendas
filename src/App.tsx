import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LoadingSpinner from './components/LoadingSpinner';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

// Lazy load components
const MainLayoutLazy = lazy(() => import('./layouts/MainLayout'));
const HomeLazy = lazy(() => import('./pages/Home'));
const AboutLazy = lazy(() => import('./pages/About'));
const ProductsLazy = lazy(() => import('./pages/Products'));
const GalleryLazy = lazy(() => import('./pages/Gallery'));
const TestimonialsLazy = lazy(() => import('./pages/Testimonials'));
const ContactLazy = lazy(() => import('./pages/Contact'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={
      <Suspense fallback={<LoadingSpinner />}>
        <MainLayoutLazy />
      </Suspense>
    }>
      <Route index element={
        <Suspense fallback={<LoadingSpinner />}>
          <HomeLazy />
        </Suspense>
      } />
      <Route path="sobre" element={
        <Suspense fallback={<LoadingSpinner />}>
          <AboutLazy />
        </Suspense>
      } />
      <Route path="produtos" element={
        <Suspense fallback={<LoadingSpinner />}>
          <ProductsLazy />
        </Suspense>
      } />
      <Route path="galeria" element={
        <Suspense fallback={<LoadingSpinner />}>
          <GalleryLazy />
        </Suspense>
      } />
      <Route path="depoimentos" element={
        <Suspense fallback={<LoadingSpinner />}>
          <TestimonialsLazy />
        </Suspense>
      } />
      <Route path="contato" element={
        <Suspense fallback={<LoadingSpinner />}>
          <ContactLazy />
        </Suspense>
      } />
    </Route>
  )
);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
