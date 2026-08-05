"use client";

import { useEffect, useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Send, CheckCircle2, MessageCircleHeart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Wish } from "@/lib/types";
import { DAD_NAME } from "@/lib/data";

const STORAGE_KEY = "birthday-wishes";

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load previously saved wishes on mount (client-only, localStorage demo)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setWishes(JSON.parse(stored));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  // Persist wishes whenever they change
  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
  }, [wishes, hydrated]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: `wish-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || undefined,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    setWishes((prev) => [newWish, ...prev]);
    setName("");
    setLocation("");
    setMessage("");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2600);
  }

  return (
    <section
      id="wishes"
      aria-label="Birthday wishes"
      className="bg-ivory-soft px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Leave Your Mark"
          title="Birthday Wishes"
          description={`Add a message of love and celebration for ${DAD_NAME}.`}
        />

        <form
          onSubmit={handleSubmit}
          className="mb-14 rounded-2xl border border-gold-200/70 bg-white p-6 shadow-card sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wish-name"
                className="mb-1.5 block text-sm font-medium text-ink-700"
              >
                Your name
              </label>
              <input
                id="wish-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ada"
                className="w-full rounded-xl border border-gold-200 bg-ivory px-4 py-2.5 text-ink-900 placeholder:text-ink-400 focus-visible:border-gold-500"
              />
            </div>

            <div>
              <label
                htmlFor="wish-location"
                className="mb-1.5 block text-sm font-medium text-ink-700"
              >
                Location{" "}
                <span className="font-normal text-ink-400">(optional)</span>
              </label>
              <div className="relative">
                <MapPin
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-600"
                  size={16}
                />
                <input
                  id="wish-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lagos, Nigeria"
                  className="w-full rounded-xl border border-gold-200 bg-ivory py-2.5 pl-10 pr-4 text-ink-900 placeholder:text-ink-400 focus-visible:border-gold-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="wish-message"
              className="mb-1.5 block text-sm font-medium text-ink-700"
            >
              Your message
            </label>
            <textarea
              id="wish-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share a memory, a wish, or simply say happy birthday..."
              className="w-full resize-none rounded-xl border border-gold-200 bg-ivory px-4 py-3 text-ink-900 placeholder:text-ink-400 focus-visible:border-gold-500"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-ink-900 px-6 py-3.5 font-medium text-ivory transition-colors hover:bg-gold-700 sm:w-auto"
          >
            <Send size={18} strokeWidth={1.75} />
            Send Birthday Wishes
          </motion.button>

          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-4 flex items-center gap-2 rounded-xl bg-gold-100 px-4 py-3 text-sm text-gold-900"
                role="status"
              >
                <CheckCircle2 size={18} className="text-gold-700" />
                Your wish has been added — thank you for celebrating {DAD_NAME}!
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <div className="space-y-4">
          {wishes.length === 0 && hydrated && (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gold-300 py-12 text-center text-ink-400">
              <MessageCircleHeart size={28} strokeWidth={1.5} />
              <p>Be the first to leave a birthday wish.</p>
            </div>
          )}

          <AnimatePresence initial={false}>
            {wishes.map((wish) => (
              <motion.article
                key={wish.id}
                layout
                initial={{ opacity: 0, y: -16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-2xl border border-gold-200/70 bg-white p-5 shadow-card"
              >
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {wish.name}
                    {wish.location && (
                      <span className="ml-2 text-sm font-normal text-ink-400">
                        · {wish.location}
                      </span>
                    )}
                  </h3>
                  <time
                    dateTime={wish.timestamp}
                    className="text-xs text-ink-400"
                  >
                    {new Date(wish.timestamp).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </time>
                </div>
                <p className="text-sm leading-relaxed text-ink-600">
                  {wish.message}
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
