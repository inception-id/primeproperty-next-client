import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const DescriptionInput = () => {
  return (
    <div className="grid gap-2 w-full">
      <Label htmlFor="description">Deskripsi</Label>
      <Textarea
        id="description"
        placeholder="Dijual rumah bertabur bintang beratapkan langit dan awan."
        name="description"
        required
        className="resize-none"
      />
    </div>
  );
};
