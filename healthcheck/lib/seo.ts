import { Metadata } from "next";
import { Quiz } from "./types";

export function generateQuizMetadata(quiz: Quiz): Metadata {
  const title = `${quiz.title} — Kostenloser Selbsttest | HealthCheck`;
  return {
    title,
    description: quiz.description,
    openGraph: {
      title,
      description: quiz.description,
      type: "website",
      siteName: "HealthCheck",
    },
  };
}

export const CATEGORY_LABELS: Record<string, string> = {
  "vitamins-minerals": "Vitamine & Mineralstoffe",
  "sleep-energy": "Schlaf & Energie",
  "mental-health": "Psychische Gesundheit",
  "gut-digestion": "Darm & Verdauung",
  "heart-cardiovascular": "Herz & Kreislauf",
  "fitness-movement": "Fitness & Bewegung",
  "nutrition-diet": "Ernährung & Diät",
  "hormones-metabolism": "Hormone & Stoffwechsel",
  "skin-hair": "Haut & Haare",
  "immune-system": "Immunsystem",
  "body-signals": "Körpersignale",
  "lifestyle-longevity": "Lebensstil & Langlebigkeit",
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "vitamins-minerals":
    "Bewerten Sie Ihr Risiko für häufige Vitamin- und Mineralstoffmängel mit unseren wissenschaftsbasierten Screening-Tests.",
  "sleep-energy":
    "Bewerten Sie Ihre Schlafqualität und Ihr Energieniveau mit evidenzbasierten Tests.",
  "mental-health":
    "Überprüfen Sie häufige psychische Gesundheitsprobleme mit validierten Selbstbewertungsinstrumenten.",
  "gut-digestion":
    "Überprüfen Sie Ihre Verdauungsgesundheit mit unseren darmorientierten Screening-Tests.",
  "heart-cardiovascular":
    "Bewerten Sie kardiovaskuläre Risikofaktoren mit unseren Herzgesundheits-Screenings.",
  "fitness-movement":
    "Bewerten Sie Ihr Fitnessniveau und Ihre Bewegungsmuster.",
  "nutrition-diet":
    "Überprüfen Sie Ihre Ernährungsgewohnheiten und Ihre ausgewogene Ernährung.",
  "hormones-metabolism":
    "Überprüfen Sie hormonelle Ungleichgewichte und Stoffwechselprobleme.",
  "skin-hair":
    "Bewerten Sie Indikatoren für Haut- und Haargesundheit.",
  "immune-system":
    "Bewerten Sie die Funktion und Widerstandsfähigkeit Ihres Immunsystems.",
  "body-signals":
    "Lernen Sie, die Signale Ihres Körpers zu deuten.",
  "lifestyle-longevity":
    "Bewerten Sie Lebensstilfaktoren, die sich auf die langfristige Gesundheit und Langlebigkeit auswirken.",
};
