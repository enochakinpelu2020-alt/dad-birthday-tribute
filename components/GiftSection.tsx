"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, Copy, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { giftDetails, DAD_NAME } from "@/lib/data";

export default function GiftSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(giftDetails.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable — fail silently
    }
  }

  return (
    <section
      id="gift"
      aria-label="Gift information"
      className="relative overflow-hidden bg-ink-900 px-6 py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(198,161,91,0.25), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-300">
            A Small Gesture
          </p>
          <h2 className="font-display text-4xl font-semibold text-ivory sm:text-5xl">
            Celebrate {DAD_NAME} with a Gift
          </h2>
          <div className="divider-flourish mx-auto my-5 w-40" aria-hidden="true" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-gold-500/30 bg-gradient-to-b from-[#2a2115] to-[#1b1712] p-8 shadow-gold sm:p-10"
        >
          <div className="mb-6 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
              <Gift size={26} strokeWidth={1.5} />
            </div>
          </div>

          <dl className="space-y-5">
            <div className="flex items-center justify-between border-b border-gold-500/15 pb-4">
              <dt className="text-sm text-ivory/60">Bank Name</dt>
              <dd className="font-medium text-ivory">{giftDetails.bankName}</dd>
            </div>
            <div className="flex items-center justify-between border-b border-gold-500/15 pb-4">
              <dt className="text-sm text-ivory/60">Account Name</dt>
              <dd className="font-medium text-ivory">{giftDetails.accountName}</dd>
            </div>
            <div className="flex items-center justify-between pb-1">
              <dt className="text-sm text-ivory/60">Account Number</dt>
              <dd className="font-display text-xl tracking-wider text-gold-300">
                {giftDetails.accountNumber}
              </dd>
            </div>
          </dl>

          <motion.button
            type="button"
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 font-medium text-ink-900 transition-colors hover:bg-gold-300"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Copied!" : "Copy Account Number"}
          </motion.button>
        </motion.div>

        <p className="mt-8 text-center text-sm leading-relaxed text-ivory/60">
          Your love and presence already mean the world to {DAD_NAME}. Any
          gift, big or small, is simply a bonus way to say happy birthday.
        </p>
      </div>

      {/* Toast notification on successful copy */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 16, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 16, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-2 rounded-full bg-ivory px-5 py-3 text-sm font-medium text-ink-900 shadow-soft"
            role="status"
          >
            <Check size={16} className="text-gold-700" />
            Account number copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
