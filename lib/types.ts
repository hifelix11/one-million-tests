export type QuizCategory =
  | "vitamins-minerals"
  | "sleep-energy"
  | "mental-health"
  | "gut-digestion"
  | "heart-cardiovascular"
  | "fitness-movement"
  | "nutrition-diet"
  | "hormones-metabolism"
  | "skin-hair"
  | "immune-system"
  | "body-signals"
  | "lifestyle-longevity";

export interface Option {
  label: string;
  value: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface ResultTier {
  minScore: number;
  maxScore: number;
  tier: string;
  title: string;
  description: string;
  recommendations: string[];
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Quiz {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: QuizCategory;
  scientificBasis: string;
  seoIntro: string;
  questions: Question[];
  results: ResultTier[];
  faq: FAQItem[];
  relatedSlugs: string[];
  sources: string[];
}
