import { Skeleton } from "@/components/ui/skeleton";
import { TypographyLead } from "@/components/ui/typography/lead";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 container mx-auto p-4">
      <TypographyLead>Getting the best for you...</TypographyLead>
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
    </div>
  );
}
