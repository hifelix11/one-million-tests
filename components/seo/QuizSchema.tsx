import { Quiz } from "@/lib/types";

interface QuizSchemaProps {
  quiz: Quiz;
}

export default function QuizSchema({ quiz }: QuizSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: quiz.title,
    description: quiz.description,
    about: {
      "@type": "MedicalCondition",
      name: quiz.title.replace(" Risk Assessment", ""),
    },
    audience: {
      "@type": "PeopleAudience",
      healthCondition: {
        "@type": "MedicalCondition",
        name: quiz.title.replace(" Risk Assessment", ""),
      },
    },
    lastReviewed: new Date().toISOString().split("T")[0],
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "article",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
