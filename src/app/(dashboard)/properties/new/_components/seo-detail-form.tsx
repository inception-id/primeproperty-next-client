"use client";
import { MainImageInput } from "./inputs";
import { AdditionalImagesInput } from "./inputs/additional-images-input";

export const SeoDetailForm = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 md:flex-row">
        <MainImageInput />
        <AdditionalImagesInput />
      </div>
    </div>
  );
};
