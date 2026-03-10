import { Metadata } from "next";
import MedicalDisclaimer from "@/components/layout/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Über uns — Methodik & Medizinischer Haftungsausschluss",
  description:
    "Erfahren Sie mehr über die wissenschaftsbasierte Quiz-Methodik, Datenquellen und wichtige medizinische Haftungsausschlüsse von HealthCheck. Unsere Selbsttests sind Bildungswerkzeuge, keine Diagnosen.",
};

export default function AboutPage() {
  return (
    <div className="py-10 mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">
        Über HealthCheck
      </h1>

      <div className="mt-8">
        <MedicalDisclaimer />
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">Unsere Mission</h2>
        <p className="mt-3 text-gray-600">
          HealthCheck bietet kostenlose, wissenschaftsbasierte Gesundheits-Selbsttests,
          um Einzelpersonen zu helfen, potenzielle Nährstoffmängel und
          Gesundheitsprobleme zu erkennen. Unser Ziel ist es, Menschen mit Wissen zu
          befähigen, damit sie fundiertere Gespräche mit ihren Gesundheitsdienstleistern führen können.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">Methodik</h2>
        <p className="mt-3 text-gray-600">
          Jeder Test wird auf Grundlage veröffentlichter klinischer Screening-Kriterien,
          begutachteter Forschung und etablierter Diagnoserichtlinien von
          Organisationen wie der WHO, den NIH und großen medizinischen Fachzeitschriften entwickelt. Wir
          verweisen auf die spezifische wissenschaftliche Grundlage jedes Tests auf seiner Seite.
        </p>
        <p className="mt-3 text-gray-600">
          Unsere Tests verwenden ein Bewertungsmodell für Symptome und Risikofaktoren. Jede Frage
          bewertet einen bestimmten klinischen Indikator, und die Antworten werden auf einer
          Skala von 0–3 bewertet, die Schweregrad oder Häufigkeit widerspiegelt. Die Gesamtpunktzahl wird
          Risikostufen (Niedrig, Leicht, Mäßig, Hoch) zugeordnet, basierend auf der Häufung von
          Symptomen und Risikofaktoren.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">Einschränkungen</h2>
        <ul className="mt-3 list-disc list-inside space-y-2 text-gray-600">
          <li>
            Dies sind Screening-Werkzeuge, keine Diagnoseinstrumente. Sie können
            Bluttests, körperliche Untersuchungen oder professionelle medizinische
            Bewertungen nicht ersetzen.
          </li>
          <li>
            Die Ergebnisse basieren ausschließlich auf selbstberichteten Symptomen, die
            von Natur aus subjektiv sind und sich zwischen verschiedenen Erkrankungen überschneiden können.
          </li>
          <li>
            Kein Selbsttest kann Ihre vollständige Krankengeschichte,
            Medikamente oder einzigartigen gesundheitlichen Umstände berücksichtigen.
          </li>
          <li>
            Ein &quot;Niedriges Risiko&quot;-Ergebnis garantiert nicht das Fehlen eines Mangels,
            und ein &quot;Hohes Risiko&quot;-Ergebnis bestätigt keine Diagnose.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">
          Medizinischer Haftungsausschluss
        </h2>
        <div className="mt-3 text-gray-600 space-y-3">
          <p>
            Die Inhalte auf HealthCheck werden ausschließlich zu Informations- und
            Bildungszwecken bereitgestellt. Sie sind nicht als Ersatz für
            professionelle medizinische Beratung, Diagnose oder Behandlung gedacht.
          </p>
          <p>
            Suchen Sie bei Fragen zu einer Erkrankung immer den Rat Ihres Arztes
            oder eines anderen qualifizierten Gesundheitsdienstleisters. Ignorieren Sie
            niemals professionellen medizinischen Rat und verzögern Sie nicht die
            Inanspruchnahme aufgrund von Informationen, die Sie auf dieser Website gelesen haben.
          </p>
          <p>
            Wenn Sie glauben, einen medizinischen Notfall zu haben, rufen Sie sofort
            Ihren Arzt oder den Rettungsdienst an. HealthCheck empfiehlt oder
            befürwortet keine bestimmten Tests, Ärzte, Produkte, Verfahren,
            Meinungen oder andere Informationen, die auf der Website erwähnt werden könnten.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900">Datenschutz</h2>
        <p className="mt-3 text-gray-600">
          HealthCheck erhebt, speichert oder übermittelt keine Ihrer Testantworten.
          Die gesamte Testverarbeitung erfolgt vollständig in Ihrem Browser. Wir
          verwenden keine Cookies zur Nachverfolgung und geben keine persönlichen Daten
          an Dritte weiter.
        </p>
      </section>
    </div>
  );
}
