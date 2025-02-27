import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'Brasil Tendas - Soluções em Tendas para Todos os Eventos',
  description = 'Fabricação e locação de tendas profissionais com qualidade e compromisso. Soluções completas para eventos, com montagem e desmontagem incluídas.',
  image = '/og-image.jpg',
  url = 'https://brasiltendas.com.br',
  type = 'website'
}: SEOProps) {
  const siteUrl = 'https://brasiltendas.com.br';
  const siteTitle = 'Brasil Tendas';
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph meta tags */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: siteTitle,
          image: imageUrl,
          description: description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua Nelson dos Santos Antônio, 31',
            addressLocality: 'Itu',
            addressRegion: 'SP',
            postalCode: '13309-773',
            addressCountry: 'BR'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '-23.550520',
            longitude: '-46.633308'
          },
          url: siteUrl,
          telephone: '+55 11 2428-9800',
          priceRange: '$$'
        })}
      </script>
    </Helmet>
  );
} 