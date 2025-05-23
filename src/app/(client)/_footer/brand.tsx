import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LuFacebook, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";
export const FooterBrand = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 font-semibold">
          <Image
            src="/images/primepro.png"
            alt="Primepro"
            width={50}
            height={50}
            className="w-9 h-9"
          />
          <span className="text-3xl">PRIMEPRO INDONESIA</span>
        </div>

        <p className="text-muted-foreground text-sm">
          Your most practical ways of selling and buying properties
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="https://www.facebook.com/share/1BHTU7HvZx/"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/primepro_id/"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/company/primepro-indonesia/"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuLinkedin />
        </Link>
        <Link
          href="https://www.youtube.com/@primeproindonesia"
          className={buttonVariants({ size: "icon", variant: "outline" })}
        >
          <LuYoutube />
        </Link>
      </div>
    </div>
  );
};
