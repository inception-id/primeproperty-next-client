import { cn } from "@/lib/utils";

type TypographyH3Props = {
  className?: string;
  children: React.ReactNode;
};

export function TypographyH3({ className, children }: TypographyH3Props) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}
