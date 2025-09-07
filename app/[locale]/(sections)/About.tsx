'use client';
import {motion} from 'motion/react';
import {useTranslations} from 'next-intl';

export default function About(){
  const t = useTranslations();
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}
        className="text-2xl md:text-3xl font-semibold">{t('about.title')}</motion.h2>
      <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:.1}}
        className="mt-6 max-w-3xl text-lg opacity-80">
        Engineering background, DEME surveyor, then web development. I like to ship clear UIs, keep things accessible, and work closely with product & design.
      </motion.p>
    </section>
  );
}
