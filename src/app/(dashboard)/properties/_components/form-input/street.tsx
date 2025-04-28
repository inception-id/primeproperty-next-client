"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useOsmSearch } from "@/hooks/osm/use-osm-search";
import { ChangeEvent, useRef, useState } from "react";
import { useDismiss, useFloating, useInteractions } from "@floating-ui/react";

export const StreetInput = () => {
  const typingTimeoutRef = useRef<any>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { data } = useOsmSearch(keyword);
  const { refs, context } = useFloating({
    open: isTyping,
    onOpenChange: setIsTyping,
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef?.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setKeyword(e.target.value);
    }, 500);
  };

  return (
    <div className="relative" ref={refs.setReference} {...getReferenceProps()}>
      <div className="grid gap-2">
        <div>
          <Label htmlFor="street">Nama Jalan (SEO)</Label>
          <div className="text-xs text-muted-foreground">
            (Nama jalannya saja: Cth Kemang, jangan tulis Jl. Kemang Raya)
          </div>
        </div>
        <Input
          id="street"
          type="text"
          name="street"
          placeholder="Lebak Bulus"
          required
          onChange={onChange}
        />
      </div>

      {isTyping && data && data?.length > 0 && (
        <div
          ref={refs.setFloating}
          {...getFloatingProps()}
          className="bg-background rounded absolute top-24 left-0 border w-full flex flex-col overflow-hidden"
        >
          {data.map((osm, index) => (
            <Button
              key={`${index}-${osm.osm_id}`}
              variant="link"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              type="button"
              onClick={() => {
                setKeyword(osm.name);
                setIsTyping(false);
              }}
            >
              {osm.name} (type: {osm.class} {osm.type})
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
