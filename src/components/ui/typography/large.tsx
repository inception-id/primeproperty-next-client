import { cn } from "@/lib/utils";

type LargeProps = {
  className?: string;
  children: string | string[];
};

export function TypographyLarge({ className, children }: LargeProps) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}
