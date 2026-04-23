import dynamic from 'next/dynamic';

const ProjectCard = dynamic(() => import('./ProjectCard'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 rounded-xl h-72 w-full" />,
});

import { type ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
  {
    id: 1,
    title: "LeParle",
    description: "Full-stack e-commerce built with React, Node.js & Paystack integration.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Paystack"],
    image: "/images/ecommerce-web.png",
    link: "https://github.com/your-username/leparle",
    demoLink: "https://leparle-frontend.vercel.app/",
    span: 3, // Desktop: 60%
  },
  {
    id: 2,
    title: "Monify",
    description: "Clean two-page portfolio site with Getform backend for contact submissions.",
    tech: ["React", "Getform", "CSS Modules"],
    image: "/images/monify-monify.png",
    link: "https://github.com/your-username/monify",
    demoLink: "https://monify-website.vercel.app/",
    span: 2, // Desktop: 40%
  },
  {
    id: 3,
    title: "CoinPeek",
    description: "Real-time crypto tracker with CoinGecko API, Redis caching & Zustand state.",
    tech: ["Next.js", "TypeScript", "CoinGecko API", "Redis", "Zustand", "ExchangeRate API"],
    image: "/images/coinpeek-web.png",
    link: "https://github.com/your-username/coinpeek",
    demoLink: "https://cryptotracka.vercel.app/",
    span: 2, // Desktop: 40%
  },
  {
    id: 4,
    title: "LeParle Admin",
    description: "Admin dashboard for LeParle with React Admin & Cloudinary image uploads.",
    tech: ["React Admin", "Cloudinary", "TypeScript", "Express"],
    image: "/images/admin-dashboard.png",
    link: "https://github.com/your-username/leparle-admin",
    demoLink: "https://leparle-frontend.vercel.app/admin/login",
    span: 3, // Desktop: 60%
  },
];

export default function ProjectGrid() {
  return (
    // ✅ Mobile: 1-col stack | Desktop: 5-col bento grid (60/40 staggered)
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4 md:gap-6 auto-rows-min px-3 sm:px-0">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}