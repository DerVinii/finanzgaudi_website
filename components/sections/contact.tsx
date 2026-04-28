"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactBg = dynamic(
  () =>
    import("@/components/three/contact-background").then(
      (m) => m.ContactBackground
    ),
  { ssr: false }
);

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-40 overflow-hidden noise-bg"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ContactBg />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,183,36,0.08),transparent_70%)]" />

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <div>
            <div className="text-xs sm:text-sm text-gold-400 font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Kontakt
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Lass uns{" "}
              <span className="text-gold-gradient">reden.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6 leading-relaxed max-w-lg">
              Das erste Gespräch ist kostenlos und unverbindlich. Schreib mir
              oder buch direkt einen Termin – ich freue mich auf dich.
            </p>
          </div>

          <div className="space-y-5">
            <a
              href="mailto:kontakt@joel-dziobek.de"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <Mail size={20} className="text-gold-400" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">E-Mail</div>
                <div className="font-medium group-hover:text-gold-400 transition-colors">
                  kontakt@joel-dziobek.de
                </div>
              </div>
            </a>

            <a
              href="tel:+49391000000"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <Phone size={20} className="text-gold-400" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Telefon</div>
                <div className="font-medium group-hover:text-gold-400 transition-colors">
                  +49 391 · auf Anfrage
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <MapPin size={20} className="text-gold-400" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Standort</div>
                <div className="font-medium">Schleinufer 11, 39104 Magdeburg</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-6 sm:p-8 md:p-10 rounded-3xl border border-gold-500/10 space-y-4 sm:space-y-5"
        >
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Dein Name
            </label>
            <input
              required
              type="text"
              placeholder="Max Mustermann"
              className="w-full px-4 py-3 rounded-xl bg-background/60 border border-gold-500/10 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              E-Mail
            </label>
            <input
              required
              type="email"
              placeholder="max@beispiel.de"
              className="w-full px-4 py-3 rounded-xl bg-background/60 border border-gold-500/10 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Ich interessiere mich für
            </label>
            <select className="w-full px-4 py-3 rounded-xl bg-background/60 border border-gold-500/10 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all">
              <option>Vermögensaufbau</option>
              <option>Altersvorsorge</option>
              <option>Sachabsicherung</option>
              <option>Finanzgutachten</option>
              <option>Bin mir noch nicht sicher</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Deine Nachricht
            </label>
            <textarea
              rows={4}
              placeholder="Erzähl mir kurz, wo du stehst und was du erreichen willst…"
              className="w-full px-4 py-3 rounded-xl bg-background/60 border border-gold-500/10 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading || sent}
            className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-neutral-900 font-semibold glow-gold hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-70"
          >
            {sent ? (
              "Danke! Ich melde mich in Kürze ✨"
            ) : loading ? (
              "Wird gesendet…"
            ) : (
              <>
                Nachricht senden
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Mit dem Absenden stimmst du der Verarbeitung gemäß Datenschutz zu.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
