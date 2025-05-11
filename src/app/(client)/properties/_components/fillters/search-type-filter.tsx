import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { PurchaseStatus } from "@/lib/enums/purchase-status";

type SearchTypeFilterProps = {
  searchType: FindPropertyQuery["purchase_status"];
  onClick: (purchaseStatus: PurchaseStatus | undefined) => void;
};

export const SearchTypeFilter = ({
  searchType,
  onClick,
}: SearchTypeFilterProps) => {
  return (
    <div className="grid gap-2">
      <Label>Tipe Pencarian</Label>

      <div className="flex gap-2">
        <Button
          type="button"
          size="sm"
          variant={!searchType ? "default" : "outline"}
          onClick={() => onClick(undefined)}
        >
          Semua
        </Button>
        <Button
          type="button"
          size="sm"
          variant={
            searchType === PurchaseStatus.ForSale ? "default" : "outline"
          }
          onClick={() => onClick(PurchaseStatus.ForSale)}
        >
          Dijual
        </Button>
        <Button
          type="button"
          size="sm"
          variant={
            searchType === PurchaseStatus.ForRent ? "default" : "outline"
          }
          onClick={() => onClick(PurchaseStatus.ForRent)}
        >
          Disewa
        </Button>
        <Button
          type="button"
          size="sm"
          variant={
            searchType === PurchaseStatus.ForSaleOrRent ? "default" : "outline"
          }
          onClick={() => onClick(PurchaseStatus.ForSaleOrRent)}
        >
          Dijual &amp; Disewa
        </Button>
      </div>
    </div>
  );
};
