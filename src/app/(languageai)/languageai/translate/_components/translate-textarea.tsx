import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LuX } from "react-icons/lu";
import { useState } from "react";

const TranslateTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex h-96 lg:h-[80vh] border rounded-md">
      <Textarea
        autoFocus
        name="translate_content"
        placeholder="Enter text"
        className="focus-visible:ring-0 focus-visible:ring-offset-0  lg:flex-1 resize-none border-transparent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        size="icon"
        onClick={() => setValue("")}
        variant="ghost"
        type="button"
      >
        <LuX />
      </Button>
    </div>
  );
};

export default TranslateTextarea;
