"use client";

import { motion } from "framer-motion";
import { Baby, Briefcase, Users, Heart, Award, Sparkles, LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { biographySections, DAD_NAME } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  childhood: Baby,
  career: Briefcase,
  family: Users,
  values: Heart,
  achievements: Award,
  legacy: Sparkles,
};

export default function Biography() {
  return (
    <section
      id="biography"
      aria-label="Biography"
      className="bg-ivory-soft px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="His Story"
          title={`The Life of ${DAD_NAME}`}
          description="Every chapter of his story has shaped the person we celebrate today."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {biographySections.map((section, index) => {
            const Icon = ICONS[section.id] ?? Heart;
            return (
              <motion.article
                key={section.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col rounded-2xl border border-gold-200/70 bg-white p-7 shadow-card transition-shadow hover:shadow-soft"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-700">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mb-3 font-display text-2xl font-semibold text-ink-900">
                  {section.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-600">
                  {section.content}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
