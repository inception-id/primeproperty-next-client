"use client";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import Image from "next/image";

const HomeTellYourIdeasSection = () => {
  return (
    <div className="h-screen p-4 py-16 lg:px-0 flex flex-col items-center justify-center">
      <Image
        src="/images/inception.png"
        alt="Inception"
        width={100}
        height={100}
        className="mb-4"
      />
      <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-4">
        Straight to the point
      </h3>
      <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight text-center mb-8">
        You ask and we deliver
      </h3>
      <p className="mb-2">Tell us more about your ideas at: </p>
      <Button
        onClick={async () => copyToClipboard("winatastanley355@gmail.com")}
      >
        winatastanley355@gmail.com
      </Button>
    </div>
  );
};

export default HomeTellYourIdeasSection;
