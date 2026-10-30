import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  level: string;
  icon: IconType;
}

export default function SkillCard({
  name,
  level,
  icon: Icon,
}: SkillCardProps) {
  return (
    <div className="group rounded-tl-4xl rounded-br-4xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-tl-xl rounded-br-xl bg-primary/10 text-3xl text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon />
        </div>

        <div>
          <h4 className="font-semibold text-heading">
            {name}
          </h4>

          <p className="mt-1 text-sm text-text">
            {level}
          </p>
        </div>
      </div>
    </div>
  );
}