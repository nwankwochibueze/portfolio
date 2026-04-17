import dynamic from 'next/dynamic';

const ProjectCard = dynamic(() => import('./ProjectCard'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 rounded-xl h-72 w-full" />,
});

import { type ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with Stripe & real-time inventory management.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    image: "/images/ecommerce-web.png",
    link: "https://github.com/your-username/ecommerce",
    demoLink: "https://leparle-frontend.vercel.app/",
    span: 3, // Desktop: 60%
  },
  {
    id: 2,
    title: "React Portfolio Site",
    description: "Modern animated portfolio built with React & Framer Motion.",
    tech: ["React", "Framer Motion", "Sass"],
    image: "/images/monify-monify.png",
    link: "https://github.com/your-username/react-portfolio",
    demoLink: "https://monify-website.vercel.app/",
    span: 2, // Desktop: 40%
  },
  {
    id: 3,
    title: "API Analytics Dashboard",
    description: "Real-time dashboard for monitoring API performance & errors.",
    tech: ["Vue.js", "Chart.js", "Node.js"],
    image: "/images/admin-dashboard.png",
    link: "https://github.com/your-username/api-dashboard",
    demoLink: "https://leparle-frontend.vercel.app/admin/login",
    span: 2, // Desktop: 40%
  },
  {
    id: 4,
    title: "Crypto Tracker",
    description: "Track real-time cryptocurrency prices & portfolio value.",
    tech: ["Next.js", "Tailwind CSS", "Coingecko API"],
    image: "/images/coinpeek-web.png",
    link: "https://github.com/your-username/crypto-tracker",
    demoLink: "https://cryptotracka.vercel.app/",
    span: 3, // Desktop: 60%
  },
];

export default function ProjectGrid() {
  return (
    // ✅ Mobile: 1-col stack | Desktop: 5-col bento grid
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4 md:gap-6 auto-rows-min px-3 sm:px-0">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}