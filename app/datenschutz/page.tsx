import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Joel Dziobek",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO auf joel-dziobek.de.",
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

export default function DatenschutzPage() {
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
              <span className="text-gold-gradient">Datenschutz</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6 leading-relaxed">
              Informationen zur Verarbeitung deiner personenbezogenen Daten
              gemäß Art. 13 DSGVO.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Section title="1. Verantwortlicher">
              <p>
                Verantwortlich für die Verarbeitung personenbezogener Daten
                auf dieser Webseite im Sinne der Datenschutz-Grundverordnung
                (DSGVO) ist:
              </p>
              <p>
                Joel Dziobek
                <br />
                Schleinufer 11
                <br />
                39104 Magdeburg
                <br />
                Deutschland
              </p>
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

            <Section title="2. Allgemeine Hinweise">
              <p>
                Der Schutz deiner persönlichen Daten ist mir ein wichtiges
                Anliegen. Ich behandle deine personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften (DSGVO, BDSG, TTDSG) sowie dieser
                Datenschutzerklärung.
              </p>
              <p>
                Personenbezogene Daten sind alle Daten, die sich auf dich
                persönlich beziehen lassen, z.&nbsp;B. Name, Anschrift,
                E-Mail-Adressen, Nutzerverhalten.
              </p>
            </Section>

            <Section title="3. Server-Logfiles beim Aufruf der Webseite">
              <p>
                Beim Aufruf dieser Webseite werden durch den Hosting-Provider
                automatisch technische Daten in sogenannten Server-Logfiles
                erfasst, die dein Browser automatisch übermittelt:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP-Adresse des aufrufenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Webseite, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>verwendeter Browser und ggf. Betriebssystem</li>
              </ul>
              <p>
                Diese Daten werden ausschließlich zur Sicherstellung eines
                störungsfreien Betriebs der Webseite und zur Verbesserung
                meines Angebots verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse). Die Daten werden nach
                spätestens 30 Tagen gelöscht.
              </p>
              <p>
                Hosting-Provider: Vercel Inc., 440 N Barranca Ave #4133,
                Covina, CA 91723, USA. Da hierbei eine Übermittlung in ein
                Drittland (USA) stattfindet, stützt sich die Verarbeitung auf
                Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO als
                Garantie für ein angemessenes Datenschutzniveau. Mit Vercel
                besteht ein Auftragsverarbeitungsvertrag (Data Processing
                Addendum) gemäß Art. 28 DSGVO. Weitere Informationen zum
                Datenschutz bei Vercel:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline"
                >
                  vercel.com/legal/privacy-policy
                </a>
                .
              </p>
            </Section>

            <Section title="4. Kontaktformular">
              <p>
                Wenn du mir über das Kontaktformular Anfragen zukommen lässt,
                werden deine Angaben aus dem Anfrageformular inklusive der von
                dir dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei mir
                gespeichert.
              </p>
              <p>
                Erhoben werden:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Auswahl des Interessen-Themas</li>
                <li>Inhalt deiner Nachricht</li>
              </ul>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO (Anbahnung eines Vertrags) bzw. Art. 6 Abs.
                1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung
                deiner Anfrage). Deine Angaben werden ausschließlich zur
                Bearbeitung deiner Anfrage verwendet und nicht ohne deine
                Einwilligung an Dritte weitergegeben.
              </p>
              <p>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zwecks ihrer Erhebung nicht mehr erforderlich sind &ndash; in
                der Regel nach Abschluss der Korrespondenz mit dir, soweit
                keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </Section>

            <Section title="5. Verarbeitung durch n8n (Workflow-Automation)">
              <p>
                Die über das Kontaktformular übermittelten Daten werden an
                eine selbst betriebene n8n-Instanz weitergeleitet, die unter{" "}
                <code className="text-gold-300">
                  n8n-self-host-ito3.onrender.com
                </code>{" "}
                gehostet wird (Hosting-Provider: Render Services, Inc., USA).
                Die n8n-Instanz wandelt deine Anfrage in eine E-Mail an mich um.
              </p>
              <p>
                Es findet eine Übermittlung in ein Drittland (USA) statt.
                Render verwendet Standardvertragsklauseln gemäß Art. 46 DSGVO
                als Garantie für ein angemessenes Datenschutzniveau.
                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b
                bzw. lit. f DSGVO.
              </p>
              <p>
                Die übermittelten Daten werden nach Bearbeitung der Anfrage
                wieder gelöscht. Es findet kein dauerhaftes Speichern in der
                n8n-Instanz statt.
              </p>
            </Section>

            <Section title="6. Cookies und lokale Speicherung">
              <p>
                Diese Webseite setzt aktuell{" "}
                <strong className="text-foreground">
                  keine Cookies, die einer Einwilligung bedürfen
                </strong>
                . Es werden weder Tracking-, Marketing- noch
                Analyse-Cookies verwendet. Auch der Local Storage und Session
                Storage des Browsers werden nicht zur Erhebung
                personenbezogener Daten genutzt.
              </p>
              <p>
                Weitere Informationen findest du auf unserer{" "}
                <a href="/cookies" className="text-gold-400 hover:underline">
                  Cookie-Seite
                </a>
                .
              </p>
            </Section>

            <Section title="7. Eingebundene Schriftarten und Skripte">
              <p>
                Die auf dieser Webseite verwendeten Schriftarten (Inter,
                Playfair Display) werden lokal vom Server ausgeliefert. Es
                besteht{" "}
                <strong className="text-foreground">
                  keine Verbindung zu Google Fonts
                </strong>{" "}
                oder anderen externen Schriftanbietern. Es werden somit beim
                Aufruf der Webseite keine personenbezogenen Daten an
                Drittanbieter übertragen.
              </p>
            </Section>

            <Section title="8. SSL-/TLS-Verschlüsselung">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.
                Eine verschlüsselte Verbindung erkennst du an der
                Adresszeile des Browsers (&bdquo;https://&ldquo; statt
                &bdquo;http://&ldquo;) und am Schloss-Symbol.
              </p>
            </Section>

            <Section title="9. Deine Rechte">
              <p>Du hast jederzeit das Recht auf:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong className="text-foreground">Auskunft</strong> über
                  die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)
                </li>
                <li>
                  <strong className="text-foreground">Berichtigung</strong>{" "}
                  unrichtiger Daten (Art. 16 DSGVO)
                </li>
                <li>
                  <strong className="text-foreground">Löschung</strong>{" "}
                  deiner Daten (Art. 17 DSGVO)
                </li>
                <li>
                  <strong className="text-foreground">Einschränkung</strong>{" "}
                  der Verarbeitung (Art. 18 DSGVO)
                </li>
                <li>
                  <strong className="text-foreground">Datenübertragbarkeit</strong>{" "}
                  (Art. 20 DSGVO)
                </li>
                <li>
                  <strong className="text-foreground">Widerspruch</strong>{" "}
                  gegen die Verarbeitung (Art. 21 DSGVO)
                </li>
                <li>
                  <strong className="text-foreground">Widerruf</strong>{" "}
                  einer erteilten Einwilligung mit Wirkung für die Zukunft
                  (Art. 7 Abs. 3 DSGVO)
                </li>
              </ul>
              <p>
                Zur Ausübung deiner Rechte genügt eine formlose Mitteilung an
                die oben angegebenen Kontaktdaten.
              </p>
            </Section>

            <Section title="10. Beschwerderecht bei der Aufsichtsbehörde">
              <p>
                Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde
                zu beschweren, wenn du der Ansicht bist, dass die Verarbeitung
                deiner Daten gegen die DSGVO verstößt (Art. 77 DSGVO).
              </p>
              <p>
                Zuständig für Sachsen-Anhalt:
                <br />
                Landesbeauftragter für den Datenschutz Sachsen-Anhalt
                <br />
                Leiterstraße 9, 39104 Magdeburg
                <br />
                <a
                  href="https://datenschutz.sachsen-anhalt.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline"
                >
                  datenschutz.sachsen-anhalt.de
                </a>
              </p>
            </Section>

            <Section title="11. Aktualität und Änderung dieser Datenschutzerklärung">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig. Durch die
                Weiterentwicklung der Webseite oder aufgrund geänderter
                gesetzlicher bzw. behördlicher Vorgaben kann es notwendig
                werden, diese Datenschutzerklärung anzupassen. Die jeweils
                aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite
                abgerufen werden.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
