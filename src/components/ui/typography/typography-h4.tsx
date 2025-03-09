import { cn } from "@/lib/utils";

type TypographyH4Props = {
  className?: string;
  children: string | string[];
};

export function TypographyH4({ className, children }: TypographyH4Props) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}
