"use client";
import { useMemo } from "react";
import { LuMail, LuPhone } from "react-icons/lu";
import { env } from "@/lib/env";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const CTASection = () => {
  const askUrl = useMemo(() => {
    const whatsappUrl = new URL("https://api.whatsapp.com/send");
    whatsappUrl.searchParams.append("phone", "628567557979");
    const text = `Hai, saya ingin bertanya-tanya tentang franchise opportunity di : \n${env.NEXT_PUBLIC_HOST_URL}/franchise\n Mohon informasinya terkait hal tersebut.`;
    whatsappUrl.searchParams.append("text", text);
    return whatsappUrl;
  }, []);
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-brand/50 to-brand">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Siap untuk memulai?
            </h2>
            <p className="max-w-[600px] md:text-xl/relaxed">
              Hubungi kami sekarang untuk memulai perjalanan franchise Anda
              dengan PrimePro Indonesia
            </p>
          </div>
          <div className="mx-auto w-full max-w-md space-y-2">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground/10 px-4 py-2">
                <LuMail className="h-5 w-5" />
                <span>abby@primeproagent.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground/10 px-4 py-2">
                <LuPhone className="h-5 w-5" />
                <span>+62 856-755-7979</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href={askUrl}
              target="_blank"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
