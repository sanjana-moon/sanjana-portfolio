import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full container px-5 sm:px-6 lg:px-8 xl:max-w-[90rem] 2xl:max-w-[96rem]",
        className
      )}
    >
      {children}
    </div>
  );
}