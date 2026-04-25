"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden noise-bg pt-20 lg:pt-0"
    >
      {/* Background gradient + grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,183,36,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid-pattern [background-size:40px_40px] sm:[background-size:60px_60px] opacity-40 sm:opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* 3D Canvas — fades behind content on mobile, side-by-side on desktop */}
      <div className="absolute inset-0 z-0 opacity-40 sm:opacity-60 lg:opacity-100 lg:left-1/2 pointer-events-none lg:pointer-events-auto">
        <HeroScene />
      </div>
      {/* Mobile: extra dark vignette so text stays readable over 3D */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-background/30 via-background/10 to-background z-[1] pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-10 pb-24 lg:pt-24 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass text-xs sm:text-sm"
          >
            <Sparkles size={12} className="text-gold-400 shrink-0" />
            <span className="text-muted-foreground">
              Finanzberatung aus Magdeburg
            </span>
          </motion.div>

          <h1 className="font-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Dein Geld.{" "}
            <span className="text-gold-gradient">Dein Plan.</span>
            <br />
            Deine Zukunft.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Ich bin <span className="text-foreground font-semibold">Joel Dziobek</span>.
            Ich helfe jungen Menschen, mit klaren Investmentplänen echtes Vermögen
            aufzubauen – transparent, verständlich und auf Augenhöhe.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gold-gradient text-neutral-900 font-semibold glow-gold hover:scale-105 active:scale-95 transition-transform text-sm sm:text-base"
            >
              Kostenloses Erstgespräch
              <ArrowDown
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full border border-gold-500/30 text-foreground hover:border-gold-500 hover:bg-gold-500/5 transition-colors text-sm sm:text-base"
            >
              Leistungen entdecken
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gold-500/10 max-w-lg"
          >
            {[
              { v: "200+", l: "Junge Investoren" },
              { v: "8,4%", l: "Ø Rendite p.a." },
              { v: "100%", l: "Transparent" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                  {s.v}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side reserved for the 3D canvas — desktop only */}
        <div className="lg:block hidden" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-gold-500/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
