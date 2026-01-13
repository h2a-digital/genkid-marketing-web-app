'use client';

import { site } from '@/content/site';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={'/images/icon.png'}
                alt={`${site.app.name} logo`}
                loading="eager"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-xl font-bold text-gray-900">{site.app.name}</span>
            </div>
            <p className="max-w-sm text-gray-600">
              Visualize your future family with AI-powered baby portraits. Private, secure, and
              amazingly realistic.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-bold text-gray-900">Legal</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/legal/privacy" className="transition-colors hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="transition-colors hover:text-black">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-gray-900">Contact</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a
                  href={`mailto:${site.company.email}`}
                  className="transition-colors hover:text-black"
                >
                  {site.company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear} {site.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
