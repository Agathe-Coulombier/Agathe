import {ReactNode} from 'react';

export default function ProjectCard({title, subtitle, bullets, href, children}:{ 
  title:string; subtitle?:string; bullets:readonly string[]; href?:string; children?:ReactNode;
}) {
  return (
    <a href={href} className="group block rounded-2xl p-6 bg-white shadow-card hover:shadow-lg transition will-change-transform">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          {subtitle && <p className="mt-1 text-sm opacity-70">{subtitle}</p>}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition">→</div>
      </div>
      <ul className="mt-4 grid gap-2 list-disc pl-5">
        {bullets.map((b,i)=>(<li key={i} className="leading-relaxed">{b}</li>))}
      </ul>
      {children}
    </a>
  );
}
