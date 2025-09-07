'use client';
import {motion} from 'motion/react';
import {useTranslations} from 'next-intl';

export default function Contact(){
  const t = useTranslations();
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}
        className="text-2xl md:text-3xl font-semibold">{t('contact.title')}</motion.h2>
      <div className="mt-6 flex flex-col gap-2 text-lg">
        <a href="mailto:hello@example.com" className="underline underline-offset-4 decoration-teal-400">hello@example.com</a>
        <a href="https://www.linkedin.com" className="underline underline-offset-4">LinkedIn</a>
        <a href="https://github.com" className="underline underline-offset-4">GitHub</a>
      </div>
    </section>
  );
}
