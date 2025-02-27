"use client";
import { Button } from "@/components/ui/button";
import { TbBallpen } from "react-icons/tb";

const TarsHeaderRefresh = () => {
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => window.location.reload()}
    >
      <TbBallpen className="text-3xl" />
    </Button>
  );
};

export default TarsHeaderRefresh;
