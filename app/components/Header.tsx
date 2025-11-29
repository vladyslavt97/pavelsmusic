"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  signatureClassName?: string;
};

export default function Header({ signatureClassName }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showKeys, setShowKeys] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggle = () => {
    if (!menuOpen) {
      setShowKeys(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setShowKeys(false), 650);
    }
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const keyOffsets = [-18, -8, 4, 16, 28, 40];

  return (
    <header className="fixed left-0 right-0 top-4 z-40 flex justify-center px-4">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-white/40 via-cyan-200/60 to-blue-500/70 shadow-inner shadow-white/40" />
          <div className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-[0.25em] text-white/50">
              Pavel Kuznetsov
            </span>
            <span className={`text-lg text-white ${signatureClassName ?? ""}`}>
              pavel k.
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <a
            href="#listen"
            className="text-white/70 transition hover:text-white"
          >
            Listen
          </a>
          <a
            href="#contact"
            className="text-white/70 transition hover:text-white"
          >
            Contact
          </a>
        </nav>

        <div className="relative flex items-center gap-3">
          <span className="hidden text-white/50 sm:inline">Now booking</span>
          <button
            onClick={handleToggle}
            className="relative overflow-visible rounded-full border border-white/20 bg-white/80 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-cyan-300/30 transition hover:-translate-y-0.5 hover:shadow-cyan-200/50"
          >
            {menuOpen ? "Close" : "Menu"}
            <AnimatePresence>
              {showKeys && !menuOpen && (
                <motion.div
                  key="key-burst"
                  className="pointer-events-none absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-1"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {keyOffsets.map((offset, index) => (
                    <motion.span
                      key={offset}
                      initial={{ opacity: 0.95, y: 6, x: 0, rotate: 0 }}
                      animate={{
                        opacity: 0,
                        y: -26 - index * 3,
                        x: offset + index * 1.5,
                        rotate: index % 2 === 0 ? -8 : 6,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`h-7 w-3 rounded-[6px] ${
                        index % 2 === 0 ? "bg-white" : "bg-slate-900"
                      } shadow`}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleToggle}
            />
            <motion.div
              className="fixed right-0 top-0 z-40 flex h-full w-72 flex-col gap-6 border-l border-white/10 bg-gradient-to-b from-[#0b0f1c] via-black to-[#0a0a0f] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
              initial={{ x: 280, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 280, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    Menu
                  </p>
                  <p className="text-lg">Pavel Kuznetsov</p>
                </div>
                <button
                  onClick={handleToggle}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
                >
                  Close
                </button>
              </div>

              <div className="space-y-3 text-white">
                <a
                  href="#listen"
                  onClick={handleToggle}
                  className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/40 hover:bg-white/10"
                >
                  Listen
                </a>
                <a
                  href="#contact"
                  onClick={handleToggle}
                  className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/40 hover:bg-white/10"
                >
                  Contact
                </a>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/40 hover:bg-white/10"
                >
                  Home
                </Link>
              </div>

              <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
                <p className="text-sm">Analog piano, digital sheen.</p>
                <p className="text-xs text-white/50">
                  Scores for film, stage, and immersive experiences.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
