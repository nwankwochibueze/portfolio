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
  span: 5 | 7;
}

export interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const gridSpanClass = project.span === 7 ? "md:col-span-7" : "md:col-span-5";
  const imageHeightClass = "h-56 md:h-72";

  return (
    <div 
      className={`group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 ${gridSpanClass}`}
    >
      <a 
        href={project.demoLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`block w-full ${imageHeightClass} relative overflow-hidden bg-gray-50`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
          priority={project.id <= 2}
          unoptimized={true}
          style={{ imageRendering: 'crisp-edges' }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 md:flex items-center justify-center hidden">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full">
            View Details →
          </span>
        </div>
      </a>

      {/* Desktop: Hover-reveal overlay */}
      <div className="hidden md:flex absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col p-5 z-10">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold font-heading text-[#111827] mb-2">{project.title}</h3>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-800 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 bg-[#111827] hover:bg-gray-800 text-white text-xs font-semibold rounded-lg transition-colors">
              View Demo
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 border border-gray-300 hover:border-gray-400 text-gray-800 text-xs font-medium rounded-lg transition-colors">
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: Always visible */}
      <div className="md:hidden p-3 border-t border-gray-100 bg-white">
        <h4 className="text-sm font-semibold font-heading text-[#111827]">{project.title}</h4>
        <p className="text-gray-600 text-xs line-clamp-2 mt-1 leading-snug">{project.description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="px-1.5 py-0.5 text-[9px] bg-gray-100 text-gray-700 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 bg-[#111827] text-white text-xs font-semibold rounded-lg">Demo</a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 border border-gray-300 text-gray-700 text-xs font-medium rounded-lg">Code</a>
        </div>
      </div>
    </div>
  );
}