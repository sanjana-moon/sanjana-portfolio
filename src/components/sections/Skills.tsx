import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import SkillCard from "@/components/common/SkillCard";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-16 sm:py-20 md:py-32">
      <Container>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I leverage to build modern, scalable, and delightful web applications."
        />

        {/* Categories container */}
        <div className="mt-16 space-y-6 rounded-4xl bg-surface p-4 sm:p-6 md:p-8 xl:p-15">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative grid gap-8 rounded-3xl border border-border/60 bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.03] hover:shadow-xl hover:shadow-primary/[0.03] sm:p-6 lg:p-8 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-12 xl:p-10"
            >
              {/* Left Column: Index, Title, Description */}
              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-widest text-text/40 transition-colors duration-300 group-hover:text-primary font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary/60" />
                </div>
                
                <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-heading transition-colors duration-300 group-hover:text-primary">
                  {category.title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-text/70">
                  {category.description}
                </p>

                {/* Technology count badge */}
                <div className="mt-6 hidden md:block">
                  <span className="inline-flex items-center rounded-full bg-surface border border-border/40 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-text/60 transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
                    {category.skills.length} technologies
                  </span>
                </div>
              </div>

              {/* Right Column: Skill Cards Grid */}
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
                  {category.skills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                    />
                  ))}
                </div>

                {/* Mobile version of category count */}
                <div className="mt-6 md:hidden">
                  <span className="inline-flex items-center rounded-full bg-surface border border-border/40 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-text/60">
                    {category.skills.length} technologies
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}