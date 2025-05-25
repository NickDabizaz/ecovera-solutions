// src/components/SEOHead.tsx
import Head from 'next/head';
import { SEOData } from '@/utils/seo';

interface SEOHeadProps {
  seo: SEOData;
}

const SEOHead: React.FC<SEOHeadProps> = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={seo.openGraph?.title || seo.title} />
      <meta property="og:description" content={seo.openGraph?.description || seo.description} />
      <meta property="og:type" content="website" />
      {seo.openGraph?.image && <meta property="og:image" content={seo.openGraph.image} />}
      {seo.openGraph?.url && <meta property="og:url" content={seo.openGraph.url} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.openGraph?.title || seo.title} />
      <meta name="twitter:description" content={seo.openGraph?.description || seo.description} />
      {seo.openGraph?.image && <meta name="twitter:image" content={seo.openGraph.image} />}
      
      {/* Canonical URL */}
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Ecovera Solutions" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#22c55e" />
    </Head>
  );
};

export default SEOHead;
