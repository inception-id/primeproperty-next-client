"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeveloperApiKeyStore } from "../../_stores";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";

export const DeveloperApiKeyDialog = () => {
  const { openDialog, updateStore, apiKey } = useDeveloperApiKeyStore();
  return (
    <Dialog open={openDialog}>
      <DialogContent>
        <DialogTitle className="font-bold">Developer API Key</DialogTitle>
        <DialogDescription className="mb-4">
          Save your API key, this will be your only chance to see it.
        </DialogDescription>

        <div className="px-2 py-1 border rounded-lg w-full text-center mb-4">
          zzz
        </div>

        <div className="grid grid-cols-2 gap-4">
          <DialogClose
            className={cn(buttonVariants({ variant: "outline" }))}
            onClick={() => updateStore("openDialog", false)}
          >
            Close
          </DialogClose>

          <Button onClick={async () => await copyToClipboard(apiKey)}>
            <LuCopy />
            Copy
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
