"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Coins, Sprout, TreePine, Trophy } from "lucide-react";

const steps = [
  {
    icon: Coins,
    year: "Heute",
    euro: "25 €",
    title: "Dein erster Euro",
    text: "Alles beginnt klein. 25 €/Monat – weniger als dein Streaming-Abo. Aber der Zinseszins beginnt zu arbeiten.",
  },
  {
    icon: Sprout,
    year: "Nach 5 Jahren",
    euro: "1.900 €",
    title: "Dein Fundament",
    text: "Du hast dein erstes echtes Polster. Die Angst vor finanziellen Engpässen weicht Gelassenheit.",
  },
  {
    icon: TreePine,
    year: "Nach 15 Jahren",
    euro: "9.200 €",
    title: "Dein Baum wächst",
    text: "Dein Vermögen arbeitet härter als du selbst. Dividenden und Kurssteigerungen summieren sich spürbar.",
  },
  {
    icon: Trophy,
    year: "Nach 30 Jahren",
    euro: "37.800 €",
    title: "Finanzielle Freiheit",
    text: "Was du eingezahlt hast: 9.000 €. Was dein Geld gearbeitet hat: ~28.800 €. So funktioniert Zinseszins.",
  },
];

export function JourneySection() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".journey-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${wrap.current!.offsetWidth * 1.5}`,
        },
      });

      // Animate progress bar
      gsap.to(".journey-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${wrap.current!.offsetWidth * 1.5}`,
          scrub: true,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={wrap}
      className="relative h-screen overflow-hidden noise-bg bg-background"
    >
      {/* Section header overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-10 pb-6 bg-gradient-to-b from-background via-background/95 to-transparent pointer-events-none">
        <div className="container mx-auto">
          <div className="text-sm text-gold-400 font-semibold tracking-widest uppercase mb-2">
            Dein Weg
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Vom ersten Euro zum{" "}
            <span className="text-gold-gradient">Vermögen</span>
          </h2>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500/10 z-30">
        <div className="journey-progress h-full bg-gold-gradient origin-left scale-x-0" />
      </div>

      {/* Horizontal scroll track */}
      <div ref={track} className="flex h-full">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="journey-panel flex-shrink-0 w-screen h-full flex items-center justify-center relative"
            >
              {/* Background visual — growing sphere */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl"
                style={{
                  width: `${200 + i * 200}px`,
                  height: `${200 + i * 200}px`,
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,183,36,0.08),transparent_60%)]" />

              <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6 relative z-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                    {s.year}
                  </div>
                  <div className="text-7xl md:text-9xl font-display font-bold text-gold-gradient leading-none">
                    {s.euro}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold">
                    {s.title}
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                    {s.text}
                  </p>
                </div>

                {/* Giant 3D Icon */}
                <div className="relative flex items-center justify-center perspective-1000">
                  <div
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #fde28a, #d97706 60%, #78350f 100%)",
                      boxShadow:
                        "0 20px 80px rgba(251,183,36,0.4), inset -10px -10px 30px rgba(120,53,15,0.5), inset 10px 10px 30px rgba(253,226,138,0.3)",
                      transform: "rotateY(-15deg) rotateX(8deg)",
                    }}
                  >
                    <Icon
                      size={120}
                      className="text-neutral-900/80"
                      strokeWidth={1.5}
                    />
                    <div className="absolute -inset-4 rounded-full border border-gold-500/20 animate-spin-slow" />
                    <div className="absolute -inset-8 rounded-full border border-gold-500/10 animate-spin-slow [animation-direction:reverse]" />
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-gold-gradient">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {steps.map((_, i) => (
          <div
            key={i}
            className="w-8 h-1 rounded-full bg-gold-500/20"
            aria-hidden
          />
        ))}
      </div>
    </section>
  );
}
