import { cn } from "@/lib/utils";

type MutedProps = {
  className?: string;
  children: string | string[];
};

export const typographyMutedClassName = "text-sm text-muted-foreground";

export function TypographyMuted({ className, children }: MutedProps) {
  return <p className={cn(typographyMutedClassName, className)}>{children}</p>;
}
