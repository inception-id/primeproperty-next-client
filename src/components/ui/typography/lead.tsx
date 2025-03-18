import { cn } from "@/lib/utils";

type LeadProps = {
  className?: string;
  children: React.ReactNode;
};

export const typographyLeadClassName = "text-xl text-muted-foreground";

export function TypographyLead({ className, children }: LeadProps) {
  return <p className={cn(typographyLeadClassName, className)}>{children}</p>;
}
