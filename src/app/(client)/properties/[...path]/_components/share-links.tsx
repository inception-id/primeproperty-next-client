"use client";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

import { LuCopy, LuFacebook } from "react-icons/lu";
import { BsTelegram, BsTwitterX } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { env } from "@/lib/env";
import { MdWhatsapp } from "react-icons/md";
import { toast } from "react-toastify";

type ShareLinksProps = {
  title: string;
};

export const ShareLinks = ({ title }: ShareLinksProps) => {
  const pathname = usePathname();
  const url = env.NEXT_PUBLIC_HOST_URL + pathname;
  const caption = `Cek properti "${title}" menarik dengan harga terbaik! Bisa langsung tanya penjual juga di sini\n`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=\n ${url}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${caption}`;
  const twitterUrl = `https://x.com/intent/tweet?url=${url}&text=${caption}`;
  const telegramUrl = `https://t.me/share/url?url=${url}&text=${caption}`;
  return (
    <div className="flex items-center gap-4 mx-auto">
      <span>Share: </span>
      <Link
        href={facebookUrl}
        target="_blank"
        className={buttonVariants({ size: "icon", variant: "outline" })}
      >
        <LuFacebook />
      </Link>
      <Link
        href={telegramUrl}
        target="_blank"
        className={buttonVariants({ size: "icon", variant: "outline" })}
      >
        <BsTelegram />
      </Link>
      <Link
        href={whatsappUrl}
        target="_blank"
        className={buttonVariants({ size: "icon", variant: "outline" })}
      >
        <MdWhatsapp />
      </Link>
      <Link
        href={twitterUrl}
        target="_blank"
        className={buttonVariants({ size: "icon", variant: "outline" })}
      >
        <BsTwitterX />
      </Link>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(url);
          toast.success("Link copied to clipboard");
        }}
        size="icon"
        variant="outline"
      >
        <LuCopy />
      </Button>
    </div>
  );
};
