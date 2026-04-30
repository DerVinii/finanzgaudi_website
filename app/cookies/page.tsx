import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Cookie-Hinweise – Joel Dziobek",
  description:
    "Informationen zur Verwendung von Cookies auf joel-dziobek.de.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="glass border border-gold-500/10 rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gold-gradient">
        {title}
      </h2>
      <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28 noise-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,183,36,0.08),transparent_60%)] pointer-events-none" />

        <div className="container mx-auto relative z-10 max-w-3xl">
          <div className="mb-12 sm:mb-16">
            <div className="text-xs sm:text-sm text-gold-400 font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Rechtliches
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gold-gradient">Cookies</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6 leading-relaxed">
              Transparenz darüber, was diese Webseite im Browser speichert.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Section title="Diese Webseite verwendet keine zustimmungspflichtigen Cookies">
              <p>
                Diese Webseite setzt{" "}
                <strong className="text-foreground">
                  keine Cookies, die einer Einwilligung gemäß § 25 TTDSG
                  bedürfen
                </strong>
                . Konkret bedeutet das:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Keine Tracking-Cookies</li>
                <li>
                  Keine Web-Analyse (kein Google Analytics, Plausible, Matomo
                  o.&nbsp;ä.)
                </li>
                <li>
                  Keine Marketing- oder Retargeting-Cookies (kein Meta Pixel,
                  Google Ads o.&nbsp;ä.)
                </li>
                <li>
                  Keine Drittanbieter-Cookies durch eingebundene Inhalte
                  (Schriften werden lokal ausgeliefert, keine externen Maps,
                  keine eingebetteten YouTube-Videos)
                </li>
              </ul>
              <p>
                Aus diesem Grund findest du auf dieser Webseite auch keinen
                Cookie-Banner &ndash; ein solcher wäre rechtlich nicht
                erforderlich und würde dich nur unnötig stören.
              </p>
            </Section>

            <Section title="Was sind Cookies?">
              <p>
                Cookies sind kleine Textdateien, die beim Besuch einer Webseite
                im Browser gespeichert werden. Sie können von der besuchten
                Seite selbst (First-Party-Cookies) oder von eingebundenen
                Drittanbietern (Third-Party-Cookies) gesetzt werden und
                dienen z.&nbsp;B. der Wiedererkennung, dem Tracking oder der
                Funktionsfähigkeit einer Webseite.
              </p>
              <p>
                Ein vergleichbarer Mechanismus ist der Browser-eigene Local
                Storage und Session Storage. Auch dieser wird auf dieser
                Webseite{" "}
                <strong className="text-foreground">
                  nicht zur Erfassung personenbezogener Daten verwendet
                </strong>
                .
              </p>
            </Section>

            <Section title="Technisch notwendige Speicherung">
              <p>
                Damit die Webseite stabil läuft, kann es vorkommen, dass dein
                Browser kurzfristig technische Daten zwischenspeichert
                (z.&nbsp;B. zur Darstellung von Animationen oder zur
                Fenstergröße). Diese Speicherung:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>enthält keine personenbezogenen Daten</li>
                <li>wird nicht an Dritte übertragen</li>
                <li>
                  ist nach § 25 Abs. 2 Nr. 2 TTDSG einwilligungsfrei zulässig
                </li>
              </ul>
            </Section>

            <Section title="Wenn sich daran etwas ändert">
              <p>
                Sollte ich diese Webseite künftig um Funktionen erweitern, die
                den Einsatz zustimmungspflichtiger Cookies erfordern (z.&nbsp;B.
                statistische Auswertung des Besucherverhaltens), wird zuvor
                ein Cookie-Banner mit echter Wahlmöglichkeit eingeblendet
                werden &ndash; und die Liste der eingesetzten Cookies wird an
                dieser Stelle entsprechend ergänzt.
              </p>
            </Section>

            <Section title="Cookies in deinem Browser verwalten">
              <p>
                Unabhängig davon kannst du in deinem Browser jederzeit alle
                gespeicherten Cookies einsehen, einzeln oder vollständig löschen
                und das Setzen neuer Cookies einschränken oder verhindern. Die
                konkrete Vorgehensweise findest du in der Hilfe deines Browsers:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-400 hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-400 hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/de-de/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-400 hover:underline"
                  >
                    Apple Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/de-de/microsoft-edge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-400 hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </Section>

            <Section title="Mehr Details zum Datenschutz">
              <p>
                Wenn du wissen möchtest, welche personenbezogenen Daten beim
                Besuch dieser Webseite verarbeitet werden &ndash; insbesondere
                bei Nutzung des Kontaktformulars &ndash; findest du alle
                Informationen in der{" "}
                <a
                  href="/datenschutz"
                  className="text-gold-400 hover:underline"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
