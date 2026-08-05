"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-700">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold text-ink-900 sm:text-5xl">
        {title}
      </h2>
      <div className="divider-flourish mx-auto my-5 w-40" aria-hidden="true" />
      {description && (
        <p className="text-balance font-body text-base leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
