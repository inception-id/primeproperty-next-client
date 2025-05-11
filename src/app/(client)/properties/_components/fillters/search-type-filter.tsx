import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const SearchTypeFilter = () => {
  return (
    <div className="grid gap-2">
      <Label>Tipe Pencarian</Label>

      <div className="flex gap-2">
        <Button type="button" size="sm">
          Semua
        </Button>
        <Button type="button" size="sm" variant="secondary">
          Dijual
        </Button>
        <Button type="button" size="sm" variant="secondary">
          Disewa
        </Button>
        <Button type="button" size="sm" variant="secondary">
          Dijual &amp; Disewa
        </Button>
      </div>
    </div>
  );
};
