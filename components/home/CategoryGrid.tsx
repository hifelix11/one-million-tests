import Link from "next/link";
import { CATEGORY_LABELS } from "@/lib/seo";
import { QuizCategory } from "@/lib/types";

interface CategoryGridProps {
  categories: { category: QuizCategory; count: number }[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section className="py-14">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
        Kategorien
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-10">
        Test-Kategorien
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ category, count }) => (
          <Link
            key={category}
            href={`/categories/${category}`}
            className="group rounded-2xl bg-cream p-5 transition-all hover:shadow-lg"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
              {CATEGORY_LABELS[category] ?? category}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {count} {count === 1 ? "Test" : "Tests"} verfügbar
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
