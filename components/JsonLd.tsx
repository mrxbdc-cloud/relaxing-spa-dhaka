import { BUSINESS_INFO } from "@/lib/utils";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface JsonLdProps {
  url?: string;
  title?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  serviceName?: string;
  serviceDescription?: string;
  faqs?: FAQItem[];
}

export default function JsonLd({
  url = "https://relaxingspadhaka.com/",
  title = "Relaxing Spa Dhaka | Thai Massage in Banani | Premium Wellness Experience",
  description = "Relaxing Spa Dhaka offers authentic Thai Massage in Banani, body oil therapies & deep tissue treatments on Kamal Ataturk Avenue, Dhaka. Book your premium wellness experience today.",
  breadcrumbs,
  serviceName,
  serviceDescription,
  faqs,
}: JsonLdProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "DaySpa", "LocalBusiness"],
    "name": BUSINESS_INFO.name,
    "image": "https://relaxingspadhaka.com/logo.png",
    "logo": "https://relaxingspadhaka.com/logo.png",
    "@id": "https://relaxingspadhaka.com/#business",
    "url": "https://relaxingspadhaka.com/",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "৳৳",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kamal Ataturk Avenue",
      "addressLocality": "Banani",
      "addressRegion": "Dhaka",
      "postalCode": "1213",
      "addressCountry": "BD",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.793407,
      "longitude": 90.404928,
    },
    "openingHours": ["Mo-Su 10:00-23:00"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "10:00",
        "closes": "23:00",
      },
    ],
    "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7080776290477!2d90.40492827389416!3d23.793407487126668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72082f69c33%3A0x5617b6a2678fe7ad!2sRelaxing%20Spa%20Dhaka%20-%20Banani%20Heaven!5e0!3m2!1sen!2sbd!4v1787388453682!5m2!1sen!2sbd",
    "sameAs": [
      "https://t.me/relaxingspadhaka"
    ],
    "currenciesAccepted": "BDT",
    "paymentAccepted": "Cash",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Banani, Dhaka",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Gulshan, Dhaka",
      },
      {
        "@type": "City",
        "name": "Dhaka",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://relaxingspadhaka.com/#website",
    "url": "https://relaxingspadhaka.com/",
    "name": BUSINESS_INFO.name,
    "publisher": {
      "@id": "https://relaxingspadhaka.com/#business",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://relaxingspadhaka.com/#organization",
    "name": BUSINESS_INFO.name,
    "url": "https://relaxingspadhaka.com/",
    "logo": "https://relaxingspadhaka.com/logo.png",
    "sameAs": [
      "https://t.me/relaxingspadhaka"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "customer service",
      "areaServed": "BD",
      "availableLanguage": ["English", "Bengali"],
    },
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  } : null;

  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription || description,
    "provider": {
      "@id": "https://relaxingspadhaka.com/#business",
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Banani, Dhaka",
    },
  } : null;

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
