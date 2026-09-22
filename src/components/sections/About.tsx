import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import personal from "@/data/personal";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Left: Description */}
            <div className="flex flex-col justify-center rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:border-primary/30 md:p-12">
              <h3 className="font-heading text-3xl font-bold text-heading">
                Hi, I'm {personal.name}
              </h3>

              <p className="mt-4 text-lg font-medium text-primary">
                {personal.designation}
              </p>

              <p className="mt-8 leading-8 text-text text-justify">
                {personal.about}
              </p>
            </div>

            {/* Right: Information Cards Box */}
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:border-primary/30 md:p-12">
  <div className="flex h-full flex-col gap-5">
    <div className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
      <h4 className="text-sm font-medium uppercase tracking-wide text-primary">
        Location
      </h4>

      <p className="mt-3 font-semibold text-heading">
        {personal.location}
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
      <h4 className="text-sm font-medium uppercase tracking-wide text-primary">
        Education
      </h4>

      <p className="mt-3 font-semibold text-heading">
        Undergraduate in B.Sc. Honours in CSE
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
      <h4 className="text-sm font-medium uppercase tracking-wide text-primary">
        Status
      </h4>

      <p className="mt-3 font-semibold text-heading">
        Available for Internship, Freelance & Remote Work
      </p>
    </div>

    <div className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
      <h4 className="text-sm font-medium uppercase tracking-wide text-primary">
        Currently Learning
      </h4>

      <p className="mt-3 font-semibold text-heading">
        TypeScript & AI Development
      </p>
    </div>
  </div>
</div>
          </div>
        </div>
      </Container>
    </section>
  );
}