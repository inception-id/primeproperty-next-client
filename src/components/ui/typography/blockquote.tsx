import { cn } from "@/lib/utils";

type BlockquoteProps = {
  className?: string;
  children: React.ReactNode;
};

export function TypographyBlockquote({ className, children }: BlockquoteProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}
