"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const beatDelay = 0.12; // spacing between each beat ticking in
  const contentDelay = 8 * beatDelay + 0.15; // content arrives right after the full cycle ticks in

  return (
    <main className="min-h-screen bg-ink flex flex-col items-center justify-center px-6 py-16">
      {/* Taal count-in, shown alone first, above where content will land */}
      <div className="flex md:hidden items-center gap-3 mb-10">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const isTali = i === 0;
          const isKhali = i === 4;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i * beatDelay, ease: "easeOut" }}
              className={`rounded-full ${
                isTali
                  ? "w-2.5 h-2.5 bg-gold"
                  : isKhali
                  ? "w-2.5 h-2.5 bg-transparent border border-neutral/60"
                  : "w-2.5 h-0.5 bg-neutral/40"
              }`}
            />
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: contentDelay, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1
          className="text-4xl md:text-5xl text-paper"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Bhumeet Bhatia
        </h1>
        <p
          className="mt-3 text-neutral text-base italic"
          style={{ fontFamily: "var(--font-voice)" }}
        >
          writing code, keeping taal
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-stretch gap-6 w-full max-w-3xl">
        {/* Work door — slides in from the left, landing on the beat */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: contentDelay + 0.1, ease: "easeOut" }}
          className="flex-1"
        >
          <Link href="/work" className="block h-full">
            <motion.div
              whileHover={{ borderColor: "#1F6F6B", y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="h-full flex flex-col items-center justify-center border border-neutral/30 rounded-lg px-6 py-12 text-center"
            >
              <div className="text-teal text-sm mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                &lt;work/&gt;
              </div>
              <div className="text-paper text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Work
              </div>
              <div className="text-neutral text-sm">QA, dev projects, and research</div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Taal divider — desktop version, ticks in on load same as before */}
        <div className="hidden md:flex flex-col justify-center items-center gap-3 px-1">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const isTali = i === 0;
            const isKhali = i === 4;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * beatDelay, ease: "easeOut" }}
                className={`rounded-full ${
                  isTali
                    ? "w-2.5 h-2.5 bg-gold"
                    : isKhali
                    ? "w-2.5 h-2.5 bg-transparent border border-neutral/60"
                    : "w-2.5 h-0.5 bg-neutral/40"
                }`}
              />
            );
          })}
        </div>

        {/* Tabla door — slides in from the right, landing on the beat */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: contentDelay + 0.1, ease: "easeOut" }}
          className="flex-1"
        >
          <Link href="/tabla" className="block h-full">
            <motion.div
              whileHover={{ borderColor: "#E0A526", y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="h-full flex flex-col items-center justify-center border border-neutral/30 rounded-lg px-6 py-12 text-center"
            >
              <div className="text-gold text-sm mb-4">tabla</div>
              <div className="text-paper text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Tabla
              </div>
              <div className="text-neutral text-sm">Covers, teaching, and performance</div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: contentDelay + 0.4 }}
  className="mt-16 flex items-center gap-3 text-neutral text-sm"
>
  <a
    href ="https://mail.google.com/mail/?view=cm&fs=1&to=bhumeetsb@gmail.com"
    target ="_blank"
    className ="hover:text-paper transition-colors"
  >
    email
  </a>
  <span>&middot;</span>
  <a href="https://www.linkedin.com/in/bhumeet-singh" className="hover:text-paper transition-colors">
    linkedin
  </a>
  <span>&middot;</span>
  <a href="https://www.instagram.com/singh.bhumeet" className="hover:text-paper transition-colors">
    instagram
  </a>
</motion.div>
    </main>
  );
}