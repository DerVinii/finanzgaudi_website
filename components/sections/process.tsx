"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Calendar, FileText, MessageCircle, Rocket } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Erstgespräch",
    duration: "30 Minuten · kostenlos",
    text: "Wir lernen uns kennen. Du erzählst mir von deinen Zielen, ich höre zu. Keine Verpflichtungen, kein Verkaufsgespräch.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Analyse",
    duration: "1 Woche",
    text: "Ich schaue mir deine Situation im Detail an. Einkommen, Ausgaben, Ziele, Risikoprofil – alles wird transparent erfasst.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Dein Plan",
    duration: "2 Stunden · gemeinsam",
    text: "Ich präsentiere dir deinen persönlichen Investmentplan. Wir gehen jedes Detail gemeinsam durch – so lange, bis alles sitzt.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Umsetzung",
    duration: "Ongoing · Begleitung",
    text: "Wir setzen deinen Plan um und ich bin an deiner Seite. Regelmäßige Check-ins, Anpassungen bei Lebensveränderungen.",
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(251,183,36,0.06),transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <div className="text-sm text-gold-400 font-semibold tracking-widest uppercase mb-4">
            So arbeiten wir zusammen
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Dein Weg zum <span className="text-gold-gradient">Plan</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold-500/10 md:-translate-x-1/2" />
          <div className="process-line absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold-gradient md:-translate-x-1/2 origin-top" />

          <div className="space-y-16">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-center gap-6 md:gap-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 -translate-x-1/2 rounded-full bg-gold-gradient glow-gold ring-4 ring-background z-10" />

                  {/* Content card */}
                  <div className="ml-20 md:ml-0 md:w-1/2 md:px-8">
                    <div className="glass p-7 rounded-2xl border border-gold-500/10 hover:border-gold-500/30 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
                          <Icon size={22} className="text-neutral-900" />
                        </div>
                        <div>
                          <div className="text-xs text-gold-400 font-mono">
                            {s.step}
                          </div>
                          <h3 className="font-display text-xl font-bold">
                            {s.title}
                          </h3>
                        </div>
                      </div>
                      <div className="text-xs text-gold-300/80 font-medium mb-3 uppercase tracking-wider">
                        {s.duration}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
