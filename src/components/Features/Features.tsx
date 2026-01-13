'use client';

import { motion } from 'framer-motion';
import { features } from '@/content/features';

export function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-5xl">✨</div>
          <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
            Powerful Features, Simple Experience
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Everything you need to visualize your future family, all in one beautiful app.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-transparent bg-[#F5F5F7] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="leading-relaxed text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
