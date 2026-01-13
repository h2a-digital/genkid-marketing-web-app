'use client';

import { motion } from 'framer-motion';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';

export function Download() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-gradient-to-br from-[#F5F5F7] via-white to-[#EFEFF2] py-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 h-24 w-32 rounded-3xl bg-black/20 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-20 bottom-20 h-32 w-40 rounded-full bg-black/20 blur-2xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Emoji decoration */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="mb-8 flex justify-center gap-4 text-6xl"
          >
            <span>👨‍👩‍👧</span>
            <span>✨</span>
            <span>👶</span>
          </motion.div>

          <h2 className="mb-6 text-5xl font-black text-gray-900 md:text-6xl lg:text-7xl">
            Ready to See
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Your Future Baby?
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-xl font-medium text-gray-600 md:text-2xl">
            Join over 1 million parents who&apos;ve already visualized their family&apos;s future.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AppStoreButtons />
            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <span className="font-semibold">1M+ Downloads</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold">100% Secure</span>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
