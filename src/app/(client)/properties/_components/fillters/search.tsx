"use client";
import { LuSearch } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { usePropertiesSitePaths } from "@/hooks/properties/use-properties-site-paths";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useDismiss, useFloating, useInteractions } from "@floating-ui/react";
import { MdWhatsapp } from "react-icons/md";
import { createAskUrl } from "@/lib/create-ask-url";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

export const Search = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { data } = usePropertiesSitePaths(isOpen);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const searchResult = useMemo(() => {
    if (data && keyword) {
      const matches =
        data.data
          ?.map((path) => {
            const labelArr = path.split("/");
            labelArr.splice(3, 1);
            const label = labelArr.join(" ").replaceAll("-", " ");
            return {
              value: path,
              label,
            };
          })
          .filter((path) => path.label.includes(keyword.toLowerCase())) ?? [];
      if (matches.length > 5) {
        return matches.slice(0, 5);
      }
      return matches;
    }

    return [];
  }, [data, keyword]);

  const handleAction = () => {
    if (searchResult.length > 0) {
      sendGAEvent("search_redirect");
      router.push(`/properties${searchResult[0].value}`);
      return;
    }
    sendGAEvent("search_not_found");
    router.push("/properties/0");
  };

  return (
    <form
      action={handleAction}
      className="flex items-center w-full md:w-96 relative"
      ref={refs.setReference}
      {...getReferenceProps()}
    >
      <>
        <div
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "border-r-transparent rounded-r-none",
          )}
        >
          <LuSearch />
        </div>
        <Input
          type="text"
          id="property-search"
          placeholder="Cari lokasi/area"
          className="rounded-l-none border-l-transparent focus-visible:ring-transparent focus-visible:ring-offset-transparent w-full pl-0 "
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value.toLowerCase());
            setIsOpen(true);
          }}
        />
      </>

      {keyword.length > 0 && isOpen && (
        <div
          ref={refs.setFloating}
          {...getFloatingProps()}
          className="absolute top-11 left-0 bg-background shadow w-80 md:w-96 rounded z-30 border overflow-y-auto"
        >
          {searchResult?.length > 0 ? (
            <div className="w-full flex flex-col">
              {searchResult.map((path) => (
                <Link
                  href={`/properties/${path.value}`}
                  key={path.value}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "justify-start",
                  )}
                >
                  {path.label}
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col text-sm p-2 gap-2">
              <span>Tidak menemukan pencarian yang cocok</span>
              <div className="flex items-center gap-2">
                <Link
                  href={createAskUrl()}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                  )}
                >
                  <MdWhatsapp />
                  Tanya langsung
                </Link>
                atau coba filter
              </div>
            </div>
          )}
        </div>
      )}
    </form>
  );
};
