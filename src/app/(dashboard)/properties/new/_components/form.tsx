"use client";
import { DescriptionInput, TitleInput } from "../../_components";
import { LocationInput } from "./location-input";

export const NewPropertyForm = () => {
  return (
    <form className="flex flex-col gap-4 max-w-lg">
      <TitleInput />
      <DescriptionInput />
      <LocationInput />
    </form>
  );
};
