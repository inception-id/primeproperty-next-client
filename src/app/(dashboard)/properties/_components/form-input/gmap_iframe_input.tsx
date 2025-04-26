import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";
import { LuMap } from "react-icons/lu";

export const GmapIframeInput = () => {
  const [iframe, setIframe] = useState("");
  return (
    <div className="grid gap-4">
      <div className="grid w-full gap-2">
        <div className="grid gap-1">
          <Label htmlFor="gmap_iframe" className="flex gap-1">
            Google Map Iframe
            <Link
              href="https://tutorial.idwebhost.com/cara-mendapatkan-kode-embed-google-maps/"
              target="_blank"
              className="underline underline-offset-4 hover:text-foreground"
            >
              See here
            </Link>
          </Label>
          <div className="text-muted-foreground text-xs ">
            (Opsional) Jangan isi selain gmap iframe.
          </div>
        </div>
        <Textarea
          id="gmap_iframe"
          placeholder="<iframe..."
          name="gmap_iframe"
          required
          className="resize-none"
          value={iframe}
          onChange={(e) => setIframe(e.target.value)}
        />
      </div>

      <div className="w-full h-48 overflow-hidden border border-dashed rounded flex flex-col items-center justify-center text-transparent">
        {iframe ? (
          <div dangerouslySetInnerHTML={{ __html: iframe }} />
        ) : (
          <div className="text-muted-foreground grid place-items-center">
            <LuMap className="size-16" />
            <span className="text-sm">
              Map will show if iframe html is correct
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
