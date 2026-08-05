"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { DAD_NAME, heroPhoto } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Welcome"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ivory bg-gold-radial px-6 py-24"
    >
      {/* Ambient background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(198,161,91,0.12), transparent 35%), radial-gradient(circle at 80% 75%, rgba(198,161,91,0.14), transparent 40%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Featured photo, framed like a keepsake locket */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mb-10"
        >
          <div className="absolute inset-0 -z-10 animate-flicker rounded-full bg-gold-300/40 blur-2xl" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-[3px] border-gold-500 shadow-gold sm:h-48 sm:w-48">
            <Image
              src={heroPhoto}
              alt={`Portrait of ${DAD_NAME}`}
              fill
              priority
              sizes="192px"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-gold-200/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-3 text-sm uppercase tracking-[0.35em] text-gold-700"
        >
          A celebration of a lifetime
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display text-5xl font-semibold leading-tight text-ink-900 sm:text-6xl md:text-7xl"
        >
          Happy Birthday, {DAD_NAME}
        </motion.h1>

        <div className="divider-flourish my-6 w-full max-w-xs" aria-hidden="true" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-xl text-balance font-body text-lg leading-relaxed text-ink-600 sm:text-xl"
        >
          Every year with you is a gift we don&apos;t take for granted. Today,
          we celebrate the man who gave us everything and asked for so little
          in return.
        </motion.p>
      </div>

      {/* Animated scroll indicator */}
      <motion.a
        href="#gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-ink-400 transition-colors hover:text-gold-700"
        aria-label="Scroll down to the photo gallery"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
