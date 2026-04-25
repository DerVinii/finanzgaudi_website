"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura M.",
    role: "Studentin, 23",
    text: "Ich dachte, Investieren sei was für Leute mit viel Geld. Joel hat mir gezeigt, dass ich schon mit 30 € im Monat loslegen kann. Heute habe ich einen Plan.",
    rating: 5,
  },
  {
    name: "Tim K.",
    role: "Berufseinsteiger, 26",
    text: "Endlich jemand, der mir Finanzen ohne Fachchinesisch erklärt. Joel erklärt so lange, bis es wirklich sitzt. Absolute Empfehlung.",
    rating: 5,
  },
  {
    name: "Sarah B.",
    role: "Selbstständig, 29",
    text: "Honorarberatung war für mich ein Gamechanger. Kein Druck, keine versteckten Provisionen. Ich weiß endlich, wofür ich zahle.",
    rating: 5,
  },
  {
    name: "Jonas P.",
    role: "Ingenieur, 31",
    text: "Mein altes Portfolio war ein Zombie. Joel hat es komplett umgebaut – einfach erklärt und mit klarer Strategie. Top!",
    rating: 5,
  },
  {
    name: "Mia S.",
    role: "Lehrerin, 28",
    text: "Ich hatte riesige Angst vor dem Thema Altersvorsorge. Joel hat mir Struktur gegeben und das Gefühl, dass ich alles im Griff habe.",
    rating: 5,
  },
  {
    name: "Felix R.",
    role: "Young Professional, 25",
    text: "Wir haben uns online getroffen – super unkompliziert. Der Plan sitzt, ich verstehe jeden Euro. So hätte ich mir das nie vorgestellt.",
    rating: 5,
  },
];

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials)[number];
}) {
  return (
    <div className="flex-shrink-0 w-[360px] md:w-[420px] p-8 rounded-2xl glass border border-gold-500/10 hover:border-gold-500/30 transition-colors">
      <Quote className="text-gold-400/30 mb-4" size={32} />
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-gold-400 text-gold-400"
          />
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
        „{t.text}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gold-500/10">
        <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-display font-bold text-neutral-900">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-32 lg:py-40 overflow-hidden noise-bg"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,183,36,0.05),transparent_60%)]" />

      <div className="container mx-auto relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="text-sm text-gold-400 font-semibold tracking-widest uppercase mb-4">
            Stimmen
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Was junge{" "}
            <span className="text-gold-gradient">Investoren</span> sagen
          </h2>
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-6 marquee-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }
      `}</style>
    </section>
  );
}
