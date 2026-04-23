import dynamic from 'next/dynamic';

const ProjectCard = dynamic(() => import('./ProjectCard'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 rounded-xl h-64 w-full" />,
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
    span: 7, // ~58% on 12-col grid
  },
  {
    id: 2,
    title: "Monify",
    description: "Clean two-page portfolio site with Getform backend for contact submissions.",
    tech: ["React", "Getform", "CSS Modules"],
    image: "/images/monify-monify.png",
    link: "https://github.com/your-username/monify",
    demoLink: "https://monify-website.vercel.app/",
    span: 5, // ~42% on 12-col grid
  },
  {
    id: 3,
    title: "LeParle Admin",
    description: "Admin dashboard for LeParle with React Admin & Cloudinary image uploads.",
    tech: ["React Admin", "Cloudinary", "TypeScript", "Express"],
    image: "/images/admin-dashboard.png",
    link: "https://github.com/your-username/leparle-admin",
    demoLink: "https://leparle-frontend.vercel.app/admin/login",
    span: 5, // ~42% on 12-col grid
  },
  {
    id: 4,
    title: "CoinPeek",
    description: "Real-time crypto tracker with CoinGecko API, Redis caching & Zustand state.",
    tech: ["Next.js", "TypeScript", "CoinGecko API", "Redis", "Zustand", "ExchangeRate API"],
    image: "/images/coinpeek-web.png",
    link: "https://github.com/your-username/coinpeek",
    demoLink: "https://cryptotracka.vercel.app/",
    span: 7, // ~58% on 12-col grid
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-fr">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}