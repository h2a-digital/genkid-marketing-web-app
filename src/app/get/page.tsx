'use client';

import { useEffect, useState, useRef } from 'react';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { site } from '@/content/site';
import Image from 'next/image';

// Detect OS
function getOS(): 'ios' | 'android' | 'other' {
  if (typeof window === 'undefined') return 'other';
  const ua = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(ua)) return 'ios';
  if (/android/.test(ua)) return 'android';
  return 'other';
}

export default function DownloadPage() {
  const os = getOS();
  const [showFallback, setShowFallback] = useState(false);
  const attemptedRef = useRef(false);

  // Store URLs
  const APP_STORE_URL = site.store.iosUrl; // e.g. https://apps.apple.com/app/xxx
  // const PLAY_STORE_URL = site.store.androidUrl; // e.g. https://play.google.com/store/apps/details?id=xxx

  useEffect(() => {
    if (attemptedRef.current) return;
    attemptedRef.current = true;

    // Auto-redirect based on OS
    if (os === 'ios') {
      window.location.href = APP_STORE_URL;
    }
    // else if (os === 'android') {
    //   window.location.href = PLAY_STORE_URL;
    // }

    // If redirect fails (app store blocked / very slow), show fallback UI
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 2000);

    const handleVisibility = () => {
      if (document.hidden) clearTimeout(timer);
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [os, APP_STORE_URL]);

  const isMobile = os !== 'other';

  // --- MOBILE FALLBACK ---
  if (isMobile && showFallback) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F7] px-4 py-24 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-black shadow-lg">
              <Image
                src={'/images/icon.png'}
                alt={`${site.app.name} logo`}
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E5E7] bg-white p-8 text-center shadow-xl">
            <h1 className="mb-3 text-2xl font-bold text-gray-900">Download {site.app.name}</h1>
            <p className="mb-8 text-base text-gray-600">
              Couldn&apos;t open the store automatically. Choose your platform below.
            </p>

            <div className="flex justify-center">
              <AppStoreButtons />
            </div>

            {/* Features List */}
            <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5">
                  <svg
                    className="h-5 w-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16M8 4v4M16 10v4M10 16v4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Influence Slider</h3>
                  <p className="text-sm text-gray-600">Tune Parent A vs Parent B</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5">
                  <svg
                    className="h-5 w-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v3m0 12v3m-3-3h6M9 6h6m-4 6h2m-7 0a7 7 0 1114 0 7 7 0 01-14 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Gender Choice</h3>
                  <p className="text-sm text-gray-600">Surprise, boy, or girl</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5">
                  <svg
                    className="h-5 w-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm4 6l2-2 3 3 4-4 2 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Baby Room</h3>
                  <p className="text-sm text-gray-600">Save and revisit results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // --- DESKTOP VIEW ---
  if (!isMobile) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F7] px-4 py-24">
        <div className="w-full max-w-3xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-black shadow-lg">
              <Image
                src={'/images/icon.png'}
                alt={`${site.app.name} logo`}
                width={250}
                height={250}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-[#E5E5E7] bg-white p-12 text-center shadow-xl">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Download {site.app.name}
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Generate a baby portrait from two parent photos.
            </p>

            <div className="mb-8 flex justify-center">
              <AppStoreButtons />
            </div>

            {/* Features List */}
            <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5">
                  <svg
                    className="h-5 w-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16M8 4v4M16 10v4M10 16v4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Influence Slider</h3>
                  <p className="text-sm text-gray-600">Tune Parent A vs Parent B</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5">
                  <svg
                    className="h-5 w-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v3m0 12v3m-3-3h6M9 6h6m-4 6h2m-7 0a7 7 0 1114 0 7 7 0 01-14 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Gender Choice</h3>
                  <p className="text-sm text-gray-600">Surprise, boy, or girl</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5">
                  <svg
                    className="h-5 w-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm4 6l2-2 3 3 4-4 2 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Baby Room</h3>
                  <p className="text-sm text-gray-600">Save and revisit results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // --- MOBILE LOADING STATE (attempting redirect) ---
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F7]">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-black shadow-lg">
            <svg
              className="h-10 w-10 animate-pulse text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-black"></div>
        <p className="text-lg font-semibold text-gray-900">Opening store...</p>
        <p className="mt-2 text-sm text-gray-500">Please wait</p>
      </div>
    </main>
  );
}
