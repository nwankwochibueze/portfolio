"use client";

import Image from "next/image";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  demoLink: string;
  span: 2 | 3;
}

export interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const gridSpanClass = project.span === 3 ? "sm:col-span-3" : "sm:col-span-2";
  const imageHeightClass = "h-48 sm:h-64 md:h-80";

  return (
    <div 
      className={`group relative bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto ${gridSpanClass}`}
    >
      <a 
        href={project.demoLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`block w-full ${imageHeightClass} relative overflow-hidden bg-gray-100`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={100}
          priority={project.id <= 2}
          unoptimized={true}
          style={{ imageRendering: 'crisp-edges' }}
        />
        {/* Desktop-only hover hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 sm:flex items-center justify-center hidden">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full">
            View Details →
          </span>
        </div>
      </a>

      {/* ✅ Desktop: Hover-reveal overlay - FIXED: sm:flex instead of flex */}
      <div className="hidden sm:flex sm:flex-col absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 z-10">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tech.map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors">
              View Demo
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 border border-gray-300 hover:border-gray-400 text-gray-800 text-xs font-medium rounded-lg transition-colors">
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Mobile: Always-visible content */}
      <div className="sm:hidden p-3 border-t border-gray-100">
        <h4 className="text-sm font-semibold text-gray-900">{project.title}</h4>
        <p className="text-gray-600 text-xs line-clamp-2 mt-1 leading-snug">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tech.slice(0, 2).map((tech) => (
            <span key={tech} className="px-2 py-0.5 text-[10px] bg-gray-100 text-gray-700 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 mt-3">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg">
            Demo
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 border border-gray-300 text-gray-700 text-xs font-medium rounded-lg">
            Code
          </a>
        </div>
      </div>
    </div>
  );
}