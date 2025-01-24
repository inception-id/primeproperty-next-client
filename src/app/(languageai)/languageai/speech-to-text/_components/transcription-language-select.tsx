"use client";
import { useQuery } from "@tanstack/react-query";
import { findAllLanguages } from "@/lib/api/languages/findAllLanguages";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const TranscriptionLanguageSelection = () => {
  const { data } = useQuery({
    queryKey: ["transcriptionLanguageSelection"],
    queryFn: async () => {
      try {
        const languages = await findAllLanguages();
        return languages.data;
      } catch (e: any) {
        console.error(e);
        return [];
      }
    },
  });
  return (
    <div className="mb-4">
      <Label>Audio language (required)</Label>
      <Select name="language">
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="Audio language" />
        </SelectTrigger>
        <SelectContent>
          {data &&
            data?.length > 0 &&
            data?.map((language) => (
              <SelectItem
                value={language.iso_639_1}
                key={language.id}
                className="capitalize"
              >
                {language.title}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TranscriptionLanguageSelection;
