'use client';
import {motion} from 'motion/react';
import {useTranslations} from 'next-intl';
import ProjectCard from '@/components/ProjectCard';

export default function Projects(){
  const t = useTranslations();
  const items = [
    {
      title: t('projects.foodcheri.title'),
      bullets: [t('projects.foodcheri.points.0'), t('projects.foodcheri.points.1'), t('projects.foodcheri.points.2')],
      href: '#'
    },
    {
      title: t('projects.kranda.title'),
      bullets: [t('projects.kranda.points.0'), t('projects.kranda.points.1'), t('projects.kranda.points.2')],
      href: '#'
    },
    {
      title: t('projects.sail.title'),
      bullets: [t('projects.sail.points.0'), t('projects.sail.points.1'), t('projects.sail.points.2')],
      href: '#'
    }
  ] as const;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}
        className="text-2xl md:text-3xl font-semibold">{t('projects.title')}</motion.h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {items.map((p, i) => (
          <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:'-10%'}}
            transition={{duration:.5, delay:i*0.05}}>
            <ProjectCard title={p.title} bullets={p.bullets} href={p.href} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
