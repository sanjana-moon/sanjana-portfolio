import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import SkillCard from "@/components/common/SkillCard";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Technologies I use to build modern, scalable and user-friendly web applications."/>

        <div className="mt-16 space-y-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-border bg-surface p-8 transition-all duration-300 hover:border-primary/40">
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-heading">
                  {category.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-text">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}