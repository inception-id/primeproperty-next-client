import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProvinceRegency } from "@/hooks/bps/use-province-regency";

type ProvinceRegencyProps = {
  provinceId: string;
};

export const ProvinceRegencySelect = ({ provinceId }: ProvinceRegencyProps) => {
  const { isLoading, data } = useProvinceRegency(provinceId);
  return (
    <div className="grid gap-2">
      <Label htmlFor="regency">Kabupaten (SEO)</Label>
      <Select name="regency">
        <SelectTrigger disabled={provinceId === ""}>
          <SelectValue
            placeholder={provinceId ? "Pilih kabupaten" : "Pilih provinsi dulu"}
          />
        </SelectTrigger>
        <SelectContent>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.map((regency, index) => (
              <SelectItem
                key={`${index}-${regency.domain_id}`}
                value={regency.domain_name}
              >
                {regency.domain_name}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
};
