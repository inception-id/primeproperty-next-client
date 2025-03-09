import { cn } from "@/lib/utils";

type TypographyH1Props = {
  className?: string;
  children: string | string[];
};

export function TypographyH1({ className, children }: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
