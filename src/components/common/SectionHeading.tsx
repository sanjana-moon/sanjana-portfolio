import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-text">
          {subtitle}
        </p>
      )}
    </div>
  );
}