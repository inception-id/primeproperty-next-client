import { cn } from "@/lib/utils";

type TypographyPProps = {
  className?: string;
  children: React.ReactNode;
};

export const typographyPClassName = "leading-7 [&:not(:first-child)]:mt-6";

export function TypographyP({ className, children }: TypographyPProps) {
  return <p className={cn(typographyPClassName, className)}>{children}</p>;
}
