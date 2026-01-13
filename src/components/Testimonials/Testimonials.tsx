'use client';

import { testimonials } from '@/content/testimonials';
import { motion } from 'framer-motion';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F5F5F7] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-5xl">💝</div>
          <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
            Loved by Future Parents
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Join thousands of families who&apos;ve already seen their future baby.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-gray-700">&quot;{testimonial.quote}&quot;</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
