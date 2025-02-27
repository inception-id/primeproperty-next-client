"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { TbArrowUp } from "react-icons/tb";
import { TarsContext } from "./tars-provider";
import { UseChatHelpers } from "ai/react";

const TarsForm = () => {
  const { input, handleInputChange, handleSubmit } =
    useContext<UseChatHelpers>(TarsContext);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border rounded-full shadow p-1"
    >
      <Input
        type="text"
        name="prompt"
        value={input}
        onChange={handleInputChange}
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
