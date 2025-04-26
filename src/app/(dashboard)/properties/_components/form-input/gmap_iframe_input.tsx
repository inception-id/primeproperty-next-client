import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

export const GmapIframeInput = () => {
  const [iframe, setIframe] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <div className="grid gap-2 w-full">
        <Label htmlFor="gmap_iframe">Google Map Iframe</Label>
        <div className="text-muted-foreground text-xs flex flex-wrap gap-1">
          (Opsional) Harap jangan masukkan selain gmap iframe.{" "}
          <Link
            href="https://tutorial.idwebhost.com/cara-mendapatkan-kode-embed-google-maps/"
            target="_blank"
            className="underline underline-offset-4 hover:text-foreground"
          >
            See here
          </Link>
        </div>
        <Textarea
          id="gmap_iframe"
          placeholder="<iframe"
          name="gmap_iframe"
          required
          className="resize-none"
          value={iframe}
          onChange={(e) => setIframe(e.target.value)}
        />
      </div>

      <div className="w-full h-96 overflow-hidden">
        <div dangerouslySetInnerHTML={{ __html: iframe }} />
      </div>
    </div>
  );
};
