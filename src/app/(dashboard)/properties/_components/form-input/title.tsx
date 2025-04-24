import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const TitleInput = () => {
  return (
    <div className="grid gap-2 w-full">
      <Label htmlFor="title">Judul</Label>
      <Input
        id="title"
        type="text"
        name="title"
        placeholder="Dijual Rumah Indah"
        required
      />
    </div>
  );
};
