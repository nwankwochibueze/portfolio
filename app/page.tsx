import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8 max-w-7xl mx-auto">
      <Hero />

      <section id="projects" className="py-12 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Featured Projects
          </h2>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-gray-600 transition text-sm font-medium text-center sm:text-right min-h-11 flex items-center justify-center sm:justify-end"
          >
            View All
          </a>
        </div>
        <ProjectGrid />
      </section>

      <section id="skills" className="py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
          Tech Stack
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-3 w-full">
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL", "Redis", "Express"].map((skill) => (
              <div
                key={skill}
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-4 border-2 border-black"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                <span className="text-sm font-bold text-black whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-20">
        <div className="bg-black border border-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>
          <a
            href="mailto:nwankwochibu11@gmail.com"
            className="inline-flex px-6 md:px-8 py-3 md:py-4 bg-[#E4F222] hover:bg-[#CFE020] text-black font-semibold rounded-lg transition-colors min-h-[44px] items-center justify-center"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}