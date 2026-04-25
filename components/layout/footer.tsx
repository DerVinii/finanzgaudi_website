"use client";

import Link from "next/link";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.27 29 29 0 0 0-.46-5.41z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold-500/10 py-16 mt-20 noise-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,183,36,0.04),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto relative z-10 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-display font-bold text-neutral-900 glow-gold">
              JD
            </div>
            <div>
              <div className="font-display font-semibold">Joel Dziobek</div>
              <div className="text-xs text-muted-foreground">
                Finanzberatung · Magdeburg
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Investmentpläne für junge Menschen. Transparent, verständlich und
            auf Augenhöhe – damit aus deinem ersten Euro echte finanzielle
            Freiheit wird.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[
              { Icon: InstagramIcon, label: "Instagram" },
              { Icon: LinkedinIcon, label: "LinkedIn" },
              { Icon: YoutubeIcon, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-muted-foreground hover:text-gold-400 hover:border-gold-500/50 transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-semibold mb-4">Navigation</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#about" className="hover:text-gold-400 transition-colors">Über Joel</Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-gold-400 transition-colors">Leistungen</Link>
            </li>
            <li>
              <Link href="#journey" className="hover:text-gold-400 transition-colors">Dein Weg</Link>
            </li>
            <li>
              <Link href="#process" className="hover:text-gold-400 transition-colors">Prozess</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gold-400 transition-colors">Kontakt</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-4">Rechtliches</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-gold-400 transition-colors">Impressum</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gold-400 transition-colors">Datenschutz</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gold-400 transition-colors">AGB</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gold-400 transition-colors">Cookies</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-gold-500/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-xs text-muted-foreground">
          © {year} Joel Dziobek · Alle Rechte vorbehalten
        </p>
        <p className="text-xs text-muted-foreground">
          Designed & built with{" "}
          <span className="text-gold-400">♦</span> in Magdeburg
        </p>
      </div>
    </footer>
  );
}
