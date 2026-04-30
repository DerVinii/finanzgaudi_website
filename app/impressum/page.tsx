import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Impressum – Joel Dziobek",
  description:
    "Impressum und gesetzliche Pflichtangaben gemäß § 5 TMG für joel-dziobek.de.",
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

export default function ImpressumPage() {
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
              <span className="text-gold-gradient">Impressum</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6 leading-relaxed">
              Angaben gemäß § 5 TMG.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Section title="Anbieter">
              <p>
                Joel Dziobek
                <br />
                Schleinufer 11
                <br />
                39104 Magdeburg
                <br />
                Deutschland
              </p>
            </Section>

            <Section title="Kontakt">
              <p>
                Telefon:{" "}
                <a
                  href="tel:+491735932325"
                  className="text-gold-400 hover:underline"
                >
                  +49 173 5932325
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:joeldziobek68@gmail.com"
                  className="text-gold-400 hover:underline"
                >
                  joeldziobek68@gmail.com
                </a>
              </p>
            </Section>

            <Section title="Berufsbezeichnung und berufsrechtliche Regelungen">
              <p>
                Berufsbezeichnung: Versicherungsmakler und
                Finanzanlagenvermittler
                <br />
                Verliehen in: Bundesrepublik Deutschland
              </p>
              <p>
                Zuständige Aufsichtsbehörde:
                <br />
                Industrie- und Handelskammer Magdeburg
                <br />
                Alter Markt 8, 39104 Magdeburg
              </p>
              <p>
                Erlaubnis als Versicherungsmakler nach § 34d Abs. 1 GewO
                <br />
                Registernummer: D-90WI-LSMVU-26
              </p>
              <p>
                Erlaubnis als Finanzanlagenvermittler nach § 34f Abs. 1 GewO
                <br />
                Registernummer: D-F-171-N2YJ-38
              </p>
              <p>
                Gemeinsames Vermittlerregister:{" "}
                <a
                  href="https://www.vermittlerregister.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline"
                >
                  www.vermittlerregister.info
                </a>
              </p>
            </Section>

            <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
              <p>
                Joel Dziobek
                <br />
                Schleinufer 11
                <br />
                39104 Magdeburg
              </p>
            </Section>

            <Section title="Streitschlichtung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Meine E-Mail-Adresse findest du oben im Impressum.
              </p>
              <p>
                Ich bin nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </Section>

            <Section title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich
                diese Inhalte umgehend entfernen.
              </p>
            </Section>

            <Section title="Haftung für Links">
              <p>
                Mein Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
                Links umgehend entfernen.
              </p>
            </Section>

            <Section title="Urheberrecht">
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Solltest du
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werde ich derartige Inhalte umgehend
                entfernen.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
