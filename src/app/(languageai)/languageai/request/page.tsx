"use client";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";

const RequestPage = () => {
  return (
    <section className="w-full h-screen overflow-hidden p-4">
      <h1 className="text-xl font-bold">Feature Request</h1>
      <div className="mb-4">Send your request to: </div>
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
export default RequestPage;
