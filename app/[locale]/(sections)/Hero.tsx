'use client';
import dynamic from 'next/dynamic';
import {motion} from 'motion/react';
import {useTranslations} from 'next-intl';
import WaveDivider from '@/components/WaveDivider';
import LocaleSwitcher from '@/components/LocaleSwitcher';

const ACLogo = dynamic(() => import('@/components/ACLogo'), { ssr: false });

export default function Hero() {
  const t = useTranslations();
  return (
    // Light theme: ink text on sand background
    <section className="relative overflow-hidden bg-sand-50 text-ink-900">
      <div className="noise" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: .6}}
              className="text-4xl md:text-6xl font-semibold tracking-tight"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Use ink shades instead of opacity */}
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .1, duration: .6}}
              className="mt-4 text-xl text-ink-700"
            >
              {t('hero.role')}
            </motion.p>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .2, duration: .6}}
              className="mt-4 max-w-2xl text-ink-500"
            >
              {t('hero.tagline')}
            </motion.p>

            {/* Buttons mapped to palette */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: .3}}
            >
              {/* Secondary / ghost on light */}
              <a
                href="#projects"
                className="px-5 py-3 rounded-2xl bg-sand-100 hover:bg-sand-200 transition"
              >
                {t('cta.viewWork')}
              </a>

              {/* Primary = ocean */}
              <a
                href="#contact"
                className="px-5 py-3 rounded-2xl bg-ocean-500 hover:bg-ocean-700 text-white transition"
              >
                {t('cta.contact')}
              </a>

              {/* Outline = hairline sand border */}
              <a
                href="/cv/Agathe-Coulombier-CV.pdf"
                download
                className="px-5 py-3 rounded-2xl border border-sand-300 hover:bg-sand-100 transition"
              >
                {t('cta.downloadCV')}
              </a>
            </motion.div>
          </div>

          {/* Right column (keeps place even if logo disabled) */}
          <div className="w-full md:w-[340px]">
            <ACLogo />
          </div>
        </div>
      </div>

      {/* Wave divider in a soft sand tone */}
      <div className="text-sand-300">
        <WaveDivider className="w-full h-[120px]" />
      </div>
    </section>
  );
}
