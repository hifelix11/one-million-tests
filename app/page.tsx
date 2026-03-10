import { getAllQuizzes } from "@/lib/quizLoader";
import { QuizCategory } from "@/lib/types";
import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedQuizzes from "@/components/home/FeaturedQuizzes";
import MedicalDisclaimer from "@/components/layout/MedicalDisclaimer";

export default function HomePage() {
  const quizzes = getAllQuizzes();

  const categoryMap = new Map<QuizCategory, number>();
  quizzes.forEach((q) => {
    categoryMap.set(q.category, (categoryMap.get(q.category) ?? 0) + 1);
  });
  const categories = Array.from(categoryMap.entries()).map(
    ([category, count]) => ({ category, count })
  );

  const featured = quizzes.slice(0, 4);

  return (
    <div className="py-4">
      <HeroSection />
      <FeaturedQuizzes quizzes={featured} />
      <CategoryGrid categories={categories} />

      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">So funktioniert es</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-lg">
              1
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Wählen Sie einen Test</h3>
            <p className="mt-2 text-sm text-gray-500">
              Wählen Sie ein Gesundheitsthema aus unseren wissenschaftsbasierten Tests.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-lg">
              2
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">
              Beantworten Sie 10 Fragen
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Bewerten Sie ehrlich Ihre Symptome und Lebensstilfaktoren. Dauert etwa 2 Minuten.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold text-lg">
              3
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">
              Erhalten Sie Ihre Ergebnisse
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Erhalten Sie eine Risikobewertung mit umsetzbaren Empfehlungen und nächsten Schritten.
            </p>
          </div>
        </div>
      </section>

      <div className="mb-12">
        <MedicalDisclaimer />
      </div>
    </div>
  );
}
