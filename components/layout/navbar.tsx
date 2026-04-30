"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Start", hash: "#hero" },
  { label: "Über Joel", hash: "#about" },
  { label: "Leistungen", hash: "#services" },
  { label: "Dein Weg", hash: "#journey" },
  { label: "Prozess", hash: "#process" },
  { label: "Stimmen", hash: "#testimonials" },
  { label: "Kontakt", hash: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hrefFor = (hash: string) =>
    pathname === "/" ? hash : `/${hash}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 glass border-b border-gold-500/10"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href={hrefFor("#hero")}
            className="flex items-center gap-2 group"
            aria-label="Joel Dziobek Startseite"
          >
            <div className="relative w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-display font-bold text-neutral-900 shadow-lg glow-gold group-hover:scale-110 transition-transform duration-300">
              <span className="text-lg">JD</span>
              <div className="absolute inset-0 rounded-full ring-2 ring-gold-400/40 animate-ping opacity-20" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-lg font-semibold">
                Joel Dziobek
              </span>
              <span className="text-xs text-muted-foreground">
                Finanzberatung · Magdeburg
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.hash}
                href={hrefFor(l.hash)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-gold-400 transition-colors relative group"
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </nav>

          <Link
            href={hrefFor("#contact")}
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gold-gradient text-neutral-900 text-sm font-semibold hover:scale-105 active:scale-95 transition-transform glow-gold"
          >
            Termin buchen
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 text-gold-400"
            aria-label="Menü öffnen"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-2"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.hash}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={hrefFor(l.hash)}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-display font-semibold text-foreground hover:text-gold-400 transition-colors py-3 px-6"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.05 }}
            >
              <Link
                href={hrefFor("#contact")}
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center px-8 py-3 rounded-full bg-gold-gradient text-neutral-900 font-semibold glow-gold"
              >
                Termin buchen
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
