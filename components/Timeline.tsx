"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { timelineEvents, DAD_NAME } from "@/lib/data";

export default function Timeline() {
  return (
    <section
      id="timeline"
      aria-label="Life timeline"
      className="bg-ivory px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Through the Years"
          title="Milestones"
          description={`A few of the moments that trace ${DAD_NAME}'s journey so far.`}
        />

        <ol className="relative border-l border-gold-300/60 pl-8 sm:pl-10">
          {timelineEvents.map((event, index) => (
            <motion.li
              key={event.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: (index % 6) * 0.08 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Medallion marker on the gold thread */}
              <span
                aria-hidden="true"
                className="absolute -left-[41px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold-500 bg-ivory shadow-card sm:-left-[49px]"
              >
                <span className="h-2 w-2 rounded-full bg-gold-600" />
              </span>

              <p className="mb-1 font-display text-xl font-semibold text-gold-700">
                {event.year}
              </p>
              <h3 className="mb-1.5 text-lg font-semibold text-ink-900">
                {event.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-600">
                {event.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
