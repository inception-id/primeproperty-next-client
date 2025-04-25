import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProvince } from "@/hooks";

type ProvinceSelectProps = {
  onProvinceChange: (provinceId: string) => void;
};

export const ProvinceSelect = ({ onProvinceChange }: ProvinceSelectProps) => {
  const { isLoading, data } = useProvince();
  return (
    <div className="grid gap-2">
      <Label htmlFor="province">Provinsi (SEO)</Label>
      <Select
        name="province"
        onValueChange={(val) => {
          const selectedProvince = data?.find(
            (prov) => prov.domain_name === val,
          );
          onProvinceChange(String(selectedProvince?.domain_id));
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select province" />
        </SelectTrigger>
        <SelectContent>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.map((province, index) => (
              <SelectItem
                key={`${index}_${province.domain_id}`}
                value={province.domain_name}
              >
                {province.domain_name}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
};
