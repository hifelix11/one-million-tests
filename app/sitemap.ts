import { MetadataRoute } from "next";
import { getAllSlugs, getAllCategories } from "@/lib/quizLoader";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://healthcheck.example.com";

  const quizPages = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/tests/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const categoryPages = getAllCategories().map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...quizPages,
    ...categoryPages,
  ];
}
