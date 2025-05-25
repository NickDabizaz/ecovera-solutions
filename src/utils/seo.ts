// src/utils/seo.ts
export interface SEOData {
  title: string;
  description: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
  keywords?: string;
  canonical?: string;
}

export const defaultSEO: SEOData = {
  title: "Ecovera Solutions - Sustainable Business Solutions",
  description: "Leading provider of eco-friendly and sustainable solutions for businesses. Expert consulting, green energy, waste reduction, and sustainable product design services.",
  keywords: "sustainability, eco-friendly, green energy, sustainable consulting, waste reduction, environmental solutions",
  openGraph: {
    title: "Ecovera Solutions - Sustainable Business Solutions",
    description: "Leading provider of eco-friendly and sustainable solutions for businesses. Expert consulting, green energy, waste reduction, and sustainable product design services.",
    image: "/images/logo.png",
  }
};

export const pageSEO: Record<string, SEOData> = {
  home: {
    title: "Ecovera Solutions - Sustainable Business Solutions",
    description: "Transform your business with our eco-friendly solutions. Expert consulting, renewable energy, waste reduction, and sustainable product design services.",
    keywords: "sustainability, eco-friendly, green energy, sustainable consulting, waste reduction, environmental solutions",
  },
  about: {
    title: "About Us - Ecovera Solutions",
    description: "Learn about Ecovera Solutions' mission to empower businesses with sustainable practices. Founded in 2020, we've helped 500+ clients reduce their environmental impact.",
    keywords: "about ecovera, sustainability company, environmental consulting, green business solutions",
  },
  services: {
    title: "Our Services - Ecovera Solutions",
    description: "Comprehensive sustainable business services including consulting, green energy solutions, waste reduction programs, and eco-friendly product design.",
    keywords: "sustainable consulting, green energy, renewable energy, waste reduction, eco-friendly product design, environmental services",
  },
  contact: {
    title: "Contact Us - Ecovera Solutions",
    description: "Get in touch with Ecovera Solutions for sustainable business consulting. Call +1 (555) 123-4567 or email hello@ecoverasolutions.com",
    keywords: "contact ecovera, sustainability consulting, green business contact, environmental solutions",
  }
};

export function generateSEOProps(page: keyof typeof pageSEO): SEOData {
  const pageData = pageSEO[page];
  return {
    ...defaultSEO,
    ...pageData,
    openGraph: {
      ...defaultSEO.openGraph,
      ...pageData.openGraph,
    }
  };
}
