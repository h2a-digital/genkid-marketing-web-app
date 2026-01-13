'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { gallery } from '@/content/gallery';

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
            A Look Inside the App
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Preview the flow from upload to your saved Baby Room results.
          </p>
        </motion.div>

        <div className="mx-auto max-w-sm">
          <div className="relative rounded-[3rem] bg-gray-900 p-3 shadow-2xl">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={gallery[selectedIndex].src}
                    alt={gallery[selectedIndex].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 360px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute top-0 left-1/2 h-6 w-1/3 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

            {/* Nav buttons */}
            <button
              onClick={() =>
                setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
              }
              type="button"
              className="absolute top-1/2 -left-16 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50"
              aria-label="Previous"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev + 1) % gallery.length)}
              type="button"
              className="absolute top-1/2 -right-16 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50"
              aria-label="Next"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                type="button"
                className={`transition-all ${
                  selectedIndex === index
                    ? 'h-3 w-8 rounded-full bg-black'
                    : 'h-3 w-3 rounded-full bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
