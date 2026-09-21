import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://relaxingspadhaka.com";
  const lastModified = new Date();

  const serviceSlugs = [
    "thai-massage",
    "dry-massage",
    "oil-massage",
    "hot-oil-massage",
    "hot-stone-massage",
    "aroma-body-massage",
    "deep-tissue-massage",
    "body-to-body-massage",
    "nuru-massage",
    "four-hand-massage",
    "six-hand-massage",
    "couple-massage",
  ];

  const routes = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${baseUrl}/about/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/gallery/`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/faq/`, priority: 0.8, changeFrequency: "monthly" as const },
    
    // Services Hub & Dedicated Service Pages
    { url: `${baseUrl}/services/`, priority: 0.95, changeFrequency: "weekly" as const },
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}/`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    })),

    // Location Hub & Location Pages
    { url: `${baseUrl}/locations/`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-in-banani/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-in-gulshan/`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-in-dhaka/`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-near-badda/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-near-baridhara/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-near-mohakhali/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-near-bashundhara/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-near-nikunja/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-near-khilkhet/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-near-uttara/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/locations/spa-near-vatara/`, priority: 0.85, changeFrequency: "weekly" as const },

    // Primary Keyword Landing Pages
    { url: `${baseUrl}/spa-near-me/`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/aroma-oil-massage-dhaka/`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/body-massage-banani/`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/body-massage-dhaka/`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/couple-spa-banani/`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/deep-tissue-massage-dhaka/`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/hot-stone-massage-dhaka/`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/thai-foot-massage-dhaka/`, priority: 0.9, changeFrequency: "weekly" as const },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
