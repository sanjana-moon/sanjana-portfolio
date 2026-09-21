import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    live: string;
    frontend: string;
    backend?: string;
    featured: boolean;
    category: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
          {project.category}
        </span>

        {/* Featured Badge */}
        {project.featured && (
          <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/60 px-4 py-1 text-xs font-semibold text-white backdrop-blur-md">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-heading text-2xl font-bold text-heading">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-text text-justify">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background px-3 py-1 text-sm text-text"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={project.live}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:opacity-90"
          >
            Live Demo
            <ArrowUpRight size={18} />
          </Link>

          <Link
            href={project.frontend || project.live || "/"}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-medium text-heading transition hover:border-primary"
          >
            GitHub
            <FaGithub size={18} />
          </Link>

          <Link
            href={`/project/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-xl border border-primary px-5 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}