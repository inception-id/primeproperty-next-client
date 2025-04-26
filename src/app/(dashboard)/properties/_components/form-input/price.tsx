import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const PriceInput = () => {
  const [price, setPrice] = useState(0);
  return (
    <div className="grid gap-2 w-full">
      <Label htmlFor="price" className="flex gap-2 flex-wrap">
        <span>Harga</span>
        {price > 0 && <span>(Rp. {price.toLocaleString("id-ID")})</span>}
      </Label>
      <Input
        id="price"
        type="number"
        name="price"
        placeholder="Rp."
        required
        min={0}
        onChange={(e) => setPrice(Number(e.target.value))}
        value={price}
      />
    </div>
  );
};
