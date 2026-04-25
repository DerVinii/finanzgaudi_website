"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, MapPin, User } from "lucide-react";

const highlights = [
  "Zertifizierter Finanzberater mit Fokus auf Next-Gen-Investoren",
  "Spezialisiert auf ETF-Sparpläne, Altersvorsorge & Vermögensaufbau",
  "Transparente Honorarberatung – keine Produktprovisionen",
  "Sprechstunden online oder persönlich in Magdeburg",
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 sm:py-28 lg:py-40 overflow-hidden"
    >
      <motion.div
        style={{ y: y2 }}
        className="absolute top-20 -right-32 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-gold-500/5 blur-3xl"
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Portrait block */}
        <motion.div
          style={{ y: y1, rotate }}
          className="relative perspective-1000 max-w-md mx-auto lg:mx-0 w-full"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass preserve-3d">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/30 via-transparent to-gold-700/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,183,36,0.4),transparent_60%)]" />

            {/* Placeholder portrait with initials */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4 sm:mb-6 glow-gold">
                  <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900">
                    JD
                  </span>
                </div>
                <div className="font-display text-xl sm:text-2xl font-semibold">
                  Joel Dziobek
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Finanzberater
                </div>
              </div>
            </div>

            {/* Decorative floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 glass px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2"
            >
              <MapPin size={10} className="text-gold-400 shrink-0" />
              Magdeburg
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 glass px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2"
            >
              <User size={10} className="text-gold-400 shrink-0" />
              Persönliche Beratung
            </motion.div>
          </div>

          {/* Floating stat card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 -left-2 sm:-bottom-8 sm:-left-8 glass p-3 sm:p-5 rounded-2xl glow-gold max-w-[180px] sm:max-w-[220px]"
          >
            <div className="text-2xl sm:text-3xl font-display font-bold text-gold-gradient">
              5+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">
              Jahre Erfahrung im Finanzwesen
            </div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs sm:text-sm text-gold-400 font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Über mich
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Finanzen sind kein
              <br />
              <span className="text-gold-gradient">Hexenwerk.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            In der Schule lernst du den Satz des Pythagoras, aber nicht, wie du
            mit 25 ein Vermögen aufbaust. Genau da komme ich ins Spiel. Ich
            übersetze das komplizierte Finanz-Kauderwelsch in klare Pläne – und
            zeige dir Schritt für Schritt, wie aus deinem ersten Euro echte
            finanzielle Freiheit wird.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-3"
          >
            {highlights.map((h) => (
              <motion.li
                key={h}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <CheckCircle2
                  size={20}
                  className="text-gold-400 flex-shrink-0 mt-0.5"
                />
                <span>{h}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
