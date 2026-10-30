import Link from "next/link";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "@/components/project/ProjectCard";

import projects from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="relative py-16 md:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          title="My Projects"
          subtitle="A collection of full-stack applications I have built using modern technologies, focusing on clean architecture, responsive design, and solving real-world problems."
        />

        {/* Featured Projects */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 2xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
          >
            View All Projects →
          </Link>
        </div>
      </Container>
    </section>
  );
}