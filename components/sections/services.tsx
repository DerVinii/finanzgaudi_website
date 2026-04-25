"use client";

import { MouseEvent, useRef } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  PiggyBank,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Rocket,
    title: "ETF-Starterplan",
    desc: "Dein Einstieg ins Investieren. Für junge Leute, die ab 25 €/Monat durchstarten wollen.",
    tag: "Für Anfänger",
    accent: "from-gold-400/20 to-gold-600/5",
  },
  {
    icon: LineChart,
    title: "Vermögensaufbau",
    desc: "Langfristige, diversifizierte Investmentpläne mit globalem ETF-Portfolio.",
    tag: "Beliebt",
    accent: "from-amber-400/20 to-orange-600/5",
  },
  {
    icon: PiggyBank,
    title: "Altersvorsorge",
    desc: "Moderne Rentenlösungen jenseits von Riester – transparent und renditestark.",
    tag: "Zukunft",
    accent: "from-yellow-400/20 to-amber-600/5",
  },
  {
    icon: Shield,
    title: "Absicherung",
    desc: "Nur sinnvolle Versicherungen. Keine Abzocke, keine unnötigen Verträge.",
    tag: "Ehrlich",
    accent: "from-gold-500/20 to-amber-700/5",
  },
  {
    icon: TrendingUp,
    title: "Portfolio-Optimierung",
    desc: "Du hast schon investiert? Ich prüfe dein Portfolio und hole das Maximum raus.",
    tag: "Fortgeschritten",
    accent: "from-orange-400/20 to-gold-600/5",
  },
  {
    icon: Sparkles,
    title: "Finanz-Coaching",
    desc: "1:1 Sessions – wir besprechen alles von Budgeting bis Krypto auf Augenhöhe.",
    tag: "Individuell",
    accent: "from-gold-300/20 to-gold-700/5",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -10;
    const ry = ((x - rect.width / 2) / rect.width) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full p-8 rounded-2xl glass border border-gold-500/10 hover:border-gold-500/30 transition-colors duration-500 cursor-pointer overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out, border-color 0.5s",
        }}
      >
        {/* Mouse glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at var(--mx) var(--my), rgba(251,183,36,0.12), transparent 40%)`,
          }}
        />

        {/* Gradient bg */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-60",
            service.accent
          )}
        />

        <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center glow-gold group-hover:scale-110 transition-transform duration-500">
              <Icon size={24} className="text-neutral-900" />
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/20">
              {service.tag}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold mb-3">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {service.desc}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-gold-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span>Mehr erfahren</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 lg:py-40 noise-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,183,36,0.05),transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-sm text-gold-400 font-semibold tracking-widest uppercase mb-4">
            Meine Leistungen
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Maßgeschneiderte{" "}
            <span className="text-gold-gradient">Investmentpläne</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Kein Copy-Paste. Jeder Plan ist so einzigartig wie du – abgestimmt
            auf deine Lebenssituation, Ziele und deinen Zeithorizont.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
