import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '../styles/globals.css';
import { site } from '@/content/site';
import { Toast, AnalyticsHost } from '@/components';
import { env } from '../../env';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: `${site.app.name} - ${site.app.tagline}`,
    template: `%s | ${site.app.name}`,
  },
  description:
    'Upload two parent photos, set influence and gender, and generate a realistic baby portrait saved to your Baby Room.',
  keywords: [
    'baby generator',
    'ai baby photo',
    'parent photo upload',
    'baby portrait',
    'influence slider',
    'baby room gallery',
    'inherited features',
    'family app',
    'ai portrait',
    'GenKid',
  ],
  authors: [{ name: site.company.name, url: 'https://h2adigital.com' }],
  creator: site.company.name,
  applicationName: site.app.name,
  category: 'Lifestyle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.SITE_URL,
    title: `${site.app.name} - ${site.app.tagline}`,
    description: 'Generate a baby portrait from two parent photos and save it to your Baby Room.',
    siteName: site.app.name,
    images: [
      {
        url: '/images/icon.png',
        width: 512,
        height: 512,
        alt: `${site.app.name} app icon`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@genkid',
    creator: '@hakim98bologna',
    title: `${site.app.name} - ${site.app.tagline}`,
    description: 'Create a realistic baby portrait from two parent photos in seconds.',
    images: ['/images/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'y9xUcPL8jCrDt5sfUnOKnqs3J-4APi3Iw7f4JQbCJGE',
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', url: '/icon0.svg', type: 'image/svg+xml' },
    { rel: 'icon', url: '/icon1.png', type: 'image/png', sizes: '32x32' },
    { rel: 'apple-touch-icon', url: '/apple-icon.png', sizes: '180x180' },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} antialiased`}>
        {children}
        <AnalyticsHost />
        <Toast />
      </body>
    </html>
  );
}
