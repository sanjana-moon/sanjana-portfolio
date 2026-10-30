import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import education from "@/data/education";

export default function Education() {
  const university = education.find((item) => item.id === 1);
  const others = education.filter((item) => item.id !== 1);

  return (
    <section id="education" className="py-20 md:py-24 lg:py-28">
      <Container>
        <SectionHeading
          title="Education"
          subtitle="My academic journey and achievements."
        />

        <div className="mx-auto mt-16 grid max-w-9xl gap-8 lg:grid-cols-12 items-stretch">
          {/* ================= LEFT: University (Span 7 cols) ================= */}
          {university && (
            <div className="group flex flex-col justify-between rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl sm:p-8 lg:col-span-7">
              <div>
                {/* Top Section */}
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold text-heading">
                      {university.degree}
                    </h3>

                    {university.field && (
                      <p className="mt-2 font-medium text-primary">
                        {university.field}
                      </p>
                    )}

                    <p className="mt-2 text-lg text-text">
                      {university.institution}
                    </p>

                    {"location" in university && university.location && (
                      <p className="mt-1 text-sm text-text/70">
                        {university.location}
                      </p>
                    )}
                  </div>

                  <div className="rounded-2xl bg-primary/10 px-5 py-3 text-center self-start">
                    <p className="text-xs uppercase tracking-wider text-primary">
                      Passing Year
                    </p>
                    <p className="mt-1 font-semibold text-heading">
                      {university.duration}
                    </p>
                  </div>
                </div>

                {/* Results in Three Rows (Overall Result + Semesters stacked vertically) */}
                <div className="mt-8 border-t border-border pt-6 space-y-4">
                  {/* Row 1: Overall Result */}
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background p-4">
                    <p className="text-xs uppercase tracking-wider text-text/60">
                      Overall Result
                    </p>
                    <p className="text-lg font-bold text-primary">
                      {university.result}
                    </p>
                  </div>

                  {/* Rows 2 & 3+: Semesters */}
                  {"semesters" in university && university.semesters && (
                    <div className="space-y-3">
                      {university.semesters.map((semester) => (
                        <div
                          key={semester.semester}
                          className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-background p-4"
                        >
                          <p className="text-sm font-medium text-text/80">
                            {semester.semester}
                          </p>
                          <p className="text-base font-semibold text-heading">
                            GPA {semester.cgpa}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Relevant Courses */}
              {"courses" in university && university.courses && (
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-wider text-text/60 mb-4">
                    Relevant Courses
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {university.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================= RIGHT: Combined Previous Education (Span 5 cols) ================= */}
          <div className="group flex flex-col rounded-3xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl sm:p-8 lg:col-span-5">
            <h3 className="font-heading text-2xl font-bold text-heading mb-6">
              Prior Education
            </h3>

            <div className="relative border-l border-border pl-6 space-y-8 ml-2 flex-1 flex flex-col justify-around">
              {others.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-surface" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h4 className="font-heading text-lg font-bold text-heading">
                        {item.degree}
                      </h4>
                      {item.field && (
                        <p className="text-sm font-medium text-primary">
                          {item.field}
                        </p>
                      )}
                      <p className="text-sm text-text mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    <div className="rounded-lg bg-primary/10 px-3 py-1 text-center self-start">
                      <p className="text-xs font-semibold text-primary">
                        {item.duration}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-sm border-t border-border/60 pt-3">
                    <span className="text-text/60 text-xs uppercase tracking-wider">
                      Result
                    </span>
                    <span className="font-bold text-primary">
                      {item.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}