"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { LuArrowRight } from "react-icons/lu";
import { env } from "@/lib/env";

export const HeroSection = () => {
  const askUrl = useMemo(() => {
    const whatsappUrl = new URL("https://api.whatsapp.com/send");
    whatsappUrl.searchParams.append("phone", "6282116162995");
    const text = `Hai, saya ingin bertanya-tanya tentang franchise opportunity di : \n${env.NEXT_PUBLIC_HOST_URL}/franchise\n Mohon informasinya terkait hal tersebut.`;
    whatsappUrl.searchParams.append("text", text);
    return whatsappUrl;
  }, []);
  return (
    <section className="w-full bg-gradient-to-b from-brand/50 to-brand pb-8 lg:pb-0">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3 ">
          <div className="flex flex-col justify-center space-y-4 p-4 xl:col-span-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Peluang Franchise dengan PrimePro Indonesia
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Kembangkan Bisnis Anda dengan Jaringan Properti Terkemuka di
                Indonesia
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href={askUrl}
                target="_blank"
                className={cn(buttonVariants({}), "inline-flex")}
              >
                Mulai Sekarang <LuArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/franchise#why"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Pelajari lebih lanjut
              </Link>
            </div>
          </div>
          <Image
            src="/images/primepro.png"
            width={550}
            height={550}
            alt="Primepro"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-[4/3]"
            priority
          />
        </div>
      </div>
    </section>
  );
};
