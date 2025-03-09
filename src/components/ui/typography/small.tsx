import { cn } from "@/lib/utils";

type SmallProps = {
  className?: string;
  children: string | string[];
};

export function TypographySmall({ className, children }: SmallProps) {
  return (
    <p className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </p>
  );
}
