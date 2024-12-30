"use client";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";

const HomeTellYourIdeasSection = () => {
  return (
    <div className="h-screen p-4 py-16 lg:px-0 ">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center ">
        Straight to the point
      </h1>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-center mb-24">
        You ask and we deliver
      </h2>
      <div className="w-fit mx-auto">
        <p className="mb-2">Tell us more about your ideas at: </p>
        <Button
          onClick={async () => copyToClipboard("winatastanley355@gmail.com")}
        >
          winatastanley355@gmail.com
        </Button>
      </div>
    </div>
  );
};

export default HomeTellYourIdeasSection;
