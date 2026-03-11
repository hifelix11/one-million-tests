import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
        Gesundheits-Selbsttests
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
        Kostenlose, wissenschaftsbasierte Gesundheits-Selbsttests
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-gray-500 leading-relaxed">
        Screening-Tests zur Erkennung potenzieller Nährstoffmängel. Verstehen Sie Ihren Körper, dann sprechen Sie mit Ihrem Arzt.
      </p>
      <div className="mt-10 flex gap-4">
        <Link
          href="/categories/vitamins-minerals"
          className="inline-flex items-center rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
        >
          Alle Tests ansehen
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-green-600 hover:text-green-700"
        >
          Unsere Methodik
        </Link>
      </div>
    </section>
  );
}
