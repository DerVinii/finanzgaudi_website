"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
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

function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return isDesktop;
}

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const Icon = step.icon;
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl pointer-events-none"
        style={{ width: `${200 + index * 100}px`, height: `${200 + index * 100}px` }}
      />
      <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            {step.year}
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-gold-gradient leading-none break-words">
            {step.euro}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
            {step.title}
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
            {step.text}
          </p>
        </div>
        <div className="relative flex items-center justify-center perspective-1000 order-1 md:order-2">
          <div
            className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #fde28a, #d97706 60%, #78350f 100%)",
              boxShadow:
                "0 20px 80px rgba(251,183,36,0.4), inset -10px -10px 30px rgba(120,53,15,0.5), inset 10px 10px 30px rgba(253,226,138,0.3)",
              transform: "rotateY(-15deg) rotateX(8deg)",
            }}
          >
            <Icon
              size={80}
              className="text-neutral-900/80 sm:hidden"
              strokeWidth={1.5}
            />
            <Icon
              size={120}
              className="text-neutral-900/80 hidden sm:block"
              strokeWidth={1.5}
            />
            <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-gold-500/20 animate-spin-slow" />
            <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-gold-500/10 animate-spin-slow [animation-direction:reverse]" />
          </div>
          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center">
            <span className="font-display text-lg sm:text-2xl font-bold text-gold-gradient">
              0{index + 1}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function JourneyDesktop() {
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

      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500/10 z-30">
        <div className="journey-progress h-full bg-gold-gradient origin-left scale-x-0" />
      </div>

      <div ref={track} className="flex h-full">
        {steps.map((s, i) => (
          <div
            key={i}
            className="journey-panel flex-shrink-0 w-screen h-full flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,183,36,0.08),transparent_60%)]" />
            <div className="container mx-auto px-6 relative z-10">
              <StepCard step={s} index={i} />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {steps.map((_, i) => (
          <div key={i} className="w-8 h-1 rounded-full bg-gold-500/20" aria-hidden />
        ))}
      </div>
    </section>
  );
}

function JourneyMobile() {
  return (
    <section
      id="journey"
      className="relative py-24 sm:py-32 noise-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,183,36,0.08),transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-sm text-gold-400 font-semibold tracking-widest uppercase mb-2">
            Dein Weg
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            Vom ersten Euro zum{" "}
            <span className="text-gold-gradient">Vermögen</span>
          </h2>
        </motion.div>

        <div className="space-y-20 sm:space-y-28">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <StepCard step={s} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  const isDesktop = useIsDesktop(1024);
  return isDesktop ? <JourneyDesktop /> : <JourneyMobile />;
}
