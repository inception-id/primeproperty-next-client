import Image from "next/image";
import { LuMail, LuPhone } from "react-icons/lu";

export const Cta = () => {
  return (
    <section className="py-32 container mx-auto rounded">
      <div className="bg-accent flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
        <div className="flex-1">
          <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Siap Untuk Memulai?
          </h3>
          <p className="text-muted-foreground max-w-xl lg:text-lg mb-4">
            Hubungi kami sekarang untuk memulai perjalanan franchise Anda dengan
            PrimePro Indonesia
          </p>
          <div className="flex flex-col gap-2">
            <span className=" flex items-center gap-2 px-2 py-1 rounded w-fit">
              <LuMail />
              abby@primeproagent.com
            </span>
            <span className=" flex items-center gap-2 px-2 py-1 rounded w-fit">
              <LuPhone />
              +62-856-755-7979
            </span>
          </div>
        </div>
        <div className="shrink-0">
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-lg sm:h-40 sm:w-40">
              <Image
                src="/images/primepro.png"
                alt="PrimePro Indonesia"
                className="object-cover"
                width={512}
                height={512}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
