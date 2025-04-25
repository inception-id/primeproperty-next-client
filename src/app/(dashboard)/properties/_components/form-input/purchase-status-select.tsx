import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PURCHASE_STATUS } from "@/lib/enums/purchase-status";

export const PurchaseStatusSelect = () => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="purchase_status">Jual/Sewa?</Label>
      <Select name="purchase_status">
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Jual/Sewa" />
        </SelectTrigger>
        <SelectContent>
          {PURCHASE_STATUS.map((purStatus, index) => (
            <SelectItem
              key={`${index}_${purStatus.value}`}
              value={purStatus.value}
              className="capitalize"
            >
              {purStatus.indonesian_label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
