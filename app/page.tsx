"use client";
import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import links from "../links.json";
import { Caveat, Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const primaryLink = links[0]?.linik || "#";

  return (
    <main
      className={`${manrope.className} relative min-h-screen overflow-hidden bg-black text-white`}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b10] via-black to-[#05060e]" />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-white/10 via-blue-400/25 to-purple-500/35 blur-3xl" />
        <div className="absolute right-[-12rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-cyan-300/20 via-white/10 to-blue-500/30 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/4 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-amber-300/15 via-rose-500/20 to-white/5 blur-[120px]" />
      </div>

      <Header signatureClassName={caveat.className} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-24 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:pt-28"
      >
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_10px_40px_rgba(255,255,255,0.08)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.15)]" />
            <span className="text-sm uppercase tracking-[0.24em] text-white/70">
              Composer · Pianist · Producer
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl leading-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
              Cinematic piano with an{" "}
              <span className="bg-gradient-to-r from-white via-[#b2d8ff] to-[#8ad3ff] bg-clip-text text-transparent">
                Apple-grade
              </span>{" "}
              finish.
            </h1>
            <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
              Pavel K crafts intimate melodies and bold electronic textures built
              for film, stage, and late-night playlists. Designed to feel as
              polished as the gear on your desk.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={primaryLink}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black shadow-lg shadow-cyan-400/10 transition hover:-translate-y-0.5 hover:shadow-cyan-300/30"
            >
              <span className="text-base font-semibold">Listen on Apple Music</span>
              <span aria-hidden className="text-lg transition group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href="mailto:pavelkuznetsov.berlin@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white/20"
            >
              <span>Book for a score</span>
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Latest drop</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                  2024
                </span>
              </div>
              <h3 className="mt-3 text-xl text-white">Glass &amp; Ink EP</h3>
              <p className="mt-2 text-sm text-white/60">
                Nocturnal piano sketches with analogue shimmer.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-5 backdrop-blur">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Based in</span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-100">
                  Berlin
                </span>
              </div>
              <h3 className="mt-3 text-xl text-white">
                Scores, stage + collaborations
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Available for films, contemporary dance, and immersive live sets.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 via-cyan-200/10 to-blue-500/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60" />
            <Image
              src="/pavelmain.jpg"
              alt="Pavel K performing at the piano"
              width={1200}
              height={1400}
              className="h-[460px] w-full object-cover sm:h-[520px]"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                  Live in motion
                </p>
                <p className="text-lg text-white">Analog warmth, pristine finish.</p>
              </div>
              <div
                className={`rounded-full bg-white px-4 py-2 text-sm text-black shadow ${caveat.className}`}
              >
                Pavel K
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="absolute -left-6 -top-8 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/80 shadow-lg backdrop-blur"
          >
            <div className={`${caveat.className} text-xl text-white`}>
              "write with light."
            </div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-white/50">
              handwritten themes
            </div>
          </motion.div>
        </div>
      </motion.div>

      <section
        id="listen"
        className="relative z-10 mx-auto mb-16 mt-4 max-w-6xl px-6"
      >
        <div className="flex items-center justify-between pb-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Stream everywhere
            </p>
            <h2 className="text-2xl text-white sm:text-3xl">
              Choose your favorite stage
            </h2>
          </div>
          <div className={`${caveat.className} hidden text-lg text-white/60 sm:block`}>
            let&apos;s play
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-5">
          {links.map((el, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: el.delay }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 transition group-hover:opacity-100" />
              <Link
                href={el.linik}
                className="flex h-full items-center justify-center"
                aria-label="Open streaming platform"
              >
                <Image
                  src={el.image}
                  width={el.size}
                  height={80}
                  alt="Streaming platform"
                  className="h-12 w-auto object-contain drop-shadow"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.a
        href="mailto:pavelkuznetsov.berlin@gmail.com"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
        className="fixed bottom-6 right-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 shadow-lg backdrop-blur hover:border-white/30 hover:bg-white/20"
      >
        pavelkuznetsov.berlin@gmail.com
      </motion.a>
    </main>
  );
}
