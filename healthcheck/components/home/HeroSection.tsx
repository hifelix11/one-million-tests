import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Kostenlose Gesundheits-Selbsttests
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
        Wissenschaftsbasierte Screening-Tests zur Erkennung potenzieller Nährstoffmängel. Verstehen Sie Ihren Körper, dann sprechen Sie mit Ihrem Arzt.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/categories/vitamins-minerals"
          className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
        >
          Alle Tests ansehen
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          Unsere Methodik
        </Link>
      </div>
    </section>
  );
}
