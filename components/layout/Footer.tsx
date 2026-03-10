import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-gray-900">HealthCheck</h3>
            <p className="mt-2 text-sm text-gray-500">
              Kostenlose, wissenschaftsbasierte Gesundheits-Selbsttests. Bildungsscreening-Tools — keine medizinischen Diagnosen.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Schnellzugriff</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-teal-700">
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/vitamins-minerals"
                  className="hover:text-teal-700"
                >
                  Alle Tests
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-700">
                  Über uns &amp; Methodik
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Rechtliches</h3>
            <p className="mt-2 text-sm text-gray-500">
              Diese Selbsttests sind Bildungsscreening-Tools, keine medizinischen Diagnosen. Konsultieren Sie immer einen qualifizierten Gesundheitsfachmann.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} HealthCheck. Alle Rechte vorbehalten. Nur zu Bildungszwecken.
        </div>
      </div>
    </footer>
  );
}
