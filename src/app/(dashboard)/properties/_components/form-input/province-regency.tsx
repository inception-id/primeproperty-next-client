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
      <Label htmlFor="regency">Kabupaten</Label>
      <Select name="regency">
        <SelectTrigger disabled={provinceId === ""}>
          <SelectValue
            placeholder={
              provinceId ? "Select regency" : "Select province first"
            }
          />
        </SelectTrigger>
        <SelectContent>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.map((regency) => (
              <SelectItem key={regency.domain_id} value={regency.domain_name}>
                {regency.domain_name}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
};
