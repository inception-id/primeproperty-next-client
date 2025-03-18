import { cn } from "@/lib/utils";

type LargeProps = {
  className?: string;
  children: React.ReactNode;
};

export function TypographyLarge({ className, children }: LargeProps) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}
