"use client";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";

const InceptionSupportPage = () => {
  return (
    <section className="w-full h-screen overflow-hidden p-4 mt-12">
      <h1 className="text-xl font-bold">Support</h1>
      <div className="mb-4">Email your Language AI or TARS issue to: </div>
      <Button
        type="button"
        onClick={async () =>
          await copyToClipboard("winatastanley355@gmail.com")
        }
      >
        winatastanley355@gmail.com
      </Button>
    </section>
  );
};

export default InceptionSupportPage;
