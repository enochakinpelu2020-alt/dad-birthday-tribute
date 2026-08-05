"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      aria-label="Photo gallery"
      className="bg-ivory px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="A Life in Pictures"
          title="Photo Gallery"
          description="A few of our favorite moments, captured through the years."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-gold-200/70 bg-ivory-soft shadow-card focus-visible:outline-offset-4"
              aria-label={`View larger photo: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 opacity-0 transition-all duration-300 group-hover:bg-ink-900/30 group-hover:opacity-100">
                <Expand className="text-ivory" size={26} strokeWidth={1.5} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
