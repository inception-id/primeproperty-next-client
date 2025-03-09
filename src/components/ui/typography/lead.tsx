import { cn } from "@/lib/utils";

type LeadProps = {
  className?: string;
  children: string | string[];
};

export const typographyLeadClassName = "text-xl text-muted-foreground";

export function TypographyLead({ className, children }: LeadProps) {
  return <p className={cn(typographyLeadClassName, className)}>{children}</p>;
}
