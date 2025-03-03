"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TbArrowUp } from "react-icons/tb";

const TarsForm = () => {
  return (
    <form className="flex items-center border rounded-full shadow p-1">
      <Input
        type="text"
        name="prompt"
        className="border-none ring-offset-transparent focus-visible:ring-transparent rounded-l-full"
        placeholder="Ask TARS anything"
      />
      <Button type="submit" size="icon" className="rounded-full">
        <TbArrowUp />
      </Button>
    </form>
  );
};

export default TarsForm;
