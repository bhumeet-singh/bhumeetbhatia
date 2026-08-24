"use client";

import { motion } from "framer-motion";
import FeaturedContent from "./FeaturedContent";

export default function TablaPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <main className="min-h-screen bg-ink text-paper px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <nav className="flex items-center justify-between mb-16 max-w-3xl mx-auto">
          <a
            href="/"
            className="hover:text-paper transition-colors text-sm"
            style={{ color: "#8B8B85" }}
          >
            &larr; home
          </a>
          <a
            href="/work"
            className="hover:text-paper transition-colors text-sm"
            style={{ color: "#1F6F6B" }}
          >
            work &rarr;
          </a>
        </nav>

        {/* Hero */}
        <motion.section {...fadeUp} className="mb-24">
          <div className="text-gold text-sm mb-4">tabla</div>
          <h1
            className="text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bhumeet Bhatia
          </h1>
          <p
            className="text-neutral text-base italic max-w-xl"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            Tabla player. Covers, camp content, and community music.
          </p>
        </motion.section>

        {/* About */}
        <motion.section {...fadeUp} className="mb-24">
          <h2
            className="text-xl mb-8 text-gold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About
          </h2>
          <div className="space-y-6 text-neutral text-sm leading-relaxed max-w-2xl">
            <div>
              <div className="text-paper text-sm mb-1" style={{ fontFamily: "var(--font-voice)", fontStyle: "italic" }}>
                Roots
              </div>
              <p>
                My grandfather used to sit me in his lap and let me hit
                the tabla when I was just a few months old. I still play
                today in his memory, and to honor him. Later, I learned
                for about five years from a tabla player who performed at
                Harmandir Sahib (the Golden Temple). School eventually
                pulled me away from regular lessons, but I still visit
                him whenever I can — and I always learn something new
                when I do.
              </p>
            </div>
            <div>
              <div className="text-paper text-sm mb-1" style={{ fontFamily: "var(--font-voice)", fontStyle: "italic" }}>
                What I do now
              </div>
              <p>
                I teach tabla and Indian classical music, perform at
                community events, and post covers across genres — pop,
                classical, and Bollywood.
              </p>
            </div>
            <div>
              <div className="text-paper text-sm mb-1" style={{ fontFamily: "var(--font-voice)", fontStyle: "italic" }}>
                Where it's going
              </div>
              <p>
                Expanding from Instagram and TikTok into YouTube — camp
                recaps, day-in-my-life content, and cinematic pieces.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Featured Content */}
        <motion.section {...fadeUp} className="mb-24">
          <h2
            className="text-xl mb-8 text-gold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured content
          </h2>
          <FeaturedContent />
        </motion.section>

        {/* Teaching & Performance */}
        <motion.section {...fadeUp} className="mb-24">
          <h2
            className="text-xl mb-8 text-gold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Teaching & performance
          </h2>
          <div className="space-y-8">
            <div className="border-l border-neutral/20 pl-6">
              <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
                <h3 className="text-paper text-base" style={{ fontFamily: "var(--font-display)" }}>
                  Music coach
                </h3>
                <span className="text-neutral text-xs">Aug 2024 – Present</span>
              </div>
              <p className="text-neutral text-sm leading-relaxed">
                Train and supervise young students locally in tabla.
              </p>
            </div>
            <div className="border-l border-neutral/20 pl-6">
              <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
                <h3 className="text-paper text-base" style={{ fontFamily: "var(--font-display)" }}>
                  Teacher & performer
                </h3>
                <span className="text-neutral text-xs">Sept 2022 – Present</span>
              </div>
              <div className="text-gold text-xs mb-2">New England Sikh Study Circle</div>
              <p className="text-neutral text-sm leading-relaxed">
                Teach Indian classical music and tabla to children, and
                perform tabla at community events.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Upcoming */}
        <motion.section {...fadeUp} className="mb-24">
          <h2
            className="text-xl mb-8 text-gold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Upcoming
          </h2>
          <ul className="space-y-3">
            <li className="text-neutral text-sm flex gap-3">
              <span className="text-gold">—</span>
              Camp Sehaij content (Sept 4–7)
            </li>
            <li className="text-neutral text-sm flex gap-3">
              <span className="text-gold">—</span>
              First planned YouTube uploads
            </li>
          </ul>
        </motion.section>

        {/* Connect */}
        <motion.section {...fadeUp}>
          <h2
            className="text-xl mb-6 text-gold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Connect
          </h2>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://www.instagram.com/singh.bhumeet"
              target="_blank"
              className="text-neutral hover:text-paper transition-colors"
            >
              instagram — @singh.bhumeet
            </a>
            <a
              href="https://www.tiktok.com/@bhumeet.music"
              target="_blank"
              className="text-neutral hover:text-paper transition-colors"
            >
              tiktok — @bhumeet.music
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}