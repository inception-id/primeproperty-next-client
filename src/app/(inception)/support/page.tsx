"use client";
import { Button } from "@/components/ui/button";
import { TypographySmall } from "@/components/ui/typography/small";
import { copyToClipboard } from "@/lib/copyToClipboard";

const InceptionSupportPage = () => {
  return (
    <section className="w-full h-screen overflow-hidden p-4 mt-12">
      <h1 className="text-xl font-bold">Support</h1>
      <div className="mb-4">Email your complains to: </div>
      <Button
        type="button"
        className="mb-4"
        onClick={async () =>
          await copyToClipboard("winatastanley355@gmail.com")
        }
      >
        winatastanley355@gmail.com
      </Button>
      <TypographySmall>* Will definitely answer</TypographySmall>
    </section>
  );
};

export default InceptionSupportPage;
