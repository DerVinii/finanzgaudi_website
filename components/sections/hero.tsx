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
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
    >
      {/* Background gradient + grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,183,36,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid-pattern [background-size:60px_60px] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
          >
            <Sparkles size={14} className="text-gold-400" />
            <span className="text-muted-foreground">
              Finanzberatung aus Magdeburg
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance">
            Dein Geld.{" "}
            <span className="text-gold-gradient">Dein Plan.</span>
            <br />
            Deine Zukunft.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Ich bin <span className="text-foreground font-semibold">Joel Dziobek</span>.
            Ich helfe jungen Menschen, mit klaren Investmentplänen echtes Vermögen
            aufzubauen – transparent, verständlich und auf Augenhöhe.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-gradient text-neutral-900 font-semibold glow-gold hover:scale-105 active:scale-95 transition-transform"
            >
              Kostenloses Erstgespräch
              <ArrowDown
                size={18}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold-500/30 text-foreground hover:border-gold-500 hover:bg-gold-500/5 transition-colors"
            >
              Leistungen entdecken
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-gold-500/10 max-w-lg"
          >
            {[
              { v: "200+", l: "Junge Investoren" },
              { v: "8,4%", l: "Ø Rendite p.a." },
              { v: "100%", l: "Transparent" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-display font-bold text-gold-gradient">
                  {s.v}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side reserved for the 3D canvas — mobile spacer */}
        <div className="lg:block hidden" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-gold-500/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
