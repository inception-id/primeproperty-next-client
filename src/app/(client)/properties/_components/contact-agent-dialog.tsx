"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LuPhone, LuX } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";
import { FormEvent, useState } from "react";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { z } from "zod";
import { toast } from "react-toastify";
import { createLead } from "@/lib/api/leads/create-lead";
import { env } from "@/lib/env";

type ContactAgentDialogProps = {
  isWhatsapp: boolean;
  propertyWithAgent: PropertyWithAgent;
  ctaText?: string;
};

export const ContactAgentDialog = ({
  isWhatsapp,
  propertyWithAgent,
  ctaText,
}: ContactAgentDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;
    const name = target.name.value;
    const phone = target.phone.value;
    const email = target.email.value;
    const phoneSchema = z
      .string()
      .min(10, "Nomor telepon tidak valid")
      .max(15, "Nomor telepon tidak valid")
      .regex(/^[08]/, "Nomor telepon harus dimulai dengan 0 or 8")
      .regex(/^[^a-zA-Z]*$/, "Nomor telepon tidak valid");

    const phoneValidation = phoneSchema.safeParse(phone);
    if (!phoneValidation.success) {
      const errorMsg = phoneValidation.error.errors[0].message;
      toast.error(errorMsg);
      return;
    }
    if (email) {
      const emailSchema = z.string().email("Email tidak valid");
      const emailValidation = emailSchema.safeParse(email);
      if (!emailValidation.success) {
        const errorMsg = emailValidation.error.errors[0].message;
        toast.error(errorMsg);
        return;
      }
    }

    try {
      const payload = {
        user_id: propertyWithAgent[0].user_id,
        property_id: propertyWithAgent[0].id,
        name,
        phone: phone.startsWith("0") ? phone.replace("0", "") : phone,
        ...(email && { email }),
      };

      return await createLead(payload);
    } catch (error) {
      console.error(error);
    } finally {
      if (isWhatsapp) {
        const whatsappUrl = new URL("https://api.whatsapp.com/send");
        const propertyUrl =
          env.NEXT_PUBLIC_HOST_URL + `/properties/${propertyWithAgent[0].id}`;
        whatsappUrl.searchParams.append("phone", `62${propertyWithAgent[2]}`);
        const text = `Hai, saya ${name} tertarik dengan informasi mengenai: ${propertyWithAgent[0].title}\nyang berlokasi di ${propertyWithAgent[0].street} - ${propertyWithAgent[0].regency}.\nMohon informasi nya terkait unit tersebut: ${propertyUrl}`;
        whatsappUrl.searchParams.append("text", text);
        window.open(whatsappUrl, "_blank");
      } else {
        const url = `tel: +62${propertyWithAgent[2]}`;
        window.open(url, "_blank");
      }
      setOpen(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogTrigger
        onClick={() => setOpen(true)}
        className={cn(
          buttonVariants({
            size: "sm",
            variant: "default",
          }),
          "rounded-lg cursor-pointer line-clamp-1 flex",
          isWhatsapp
            ? "bg-emerald-500 hover:bg-emerald-400 text-base dark:text-foreground"
            : "",
        )}
      >
        {isWhatsapp ? (
          <>
            <MdWhatsapp />
            {ctaText || "WhatsApp"}
          </>
        ) : (
          <>
            <LuPhone />
            <span>+62{propertyWithAgent[2]}</span>
          </>
        )}
      </DialogTrigger>
      <DialogContent
        className="md:max-w-sm z-[100]"
        overlayClassName="z-[100]"
        onOverlayClick={() => setOpen(false)}
      >
        <div className="flex items-center justify-between">
          <DialogTitle className="font-bold">Hubungi Agen</DialogTitle>
          <DialogClose onClick={() => setOpen(false)}>
            <LuX className="text-xl" />
          </DialogClose>
        </div>
        <DialogDescription className="text-muted-foreground text-sm mb-4">
          Harap isi data berikut untuk berkomunikasi dengan agen
        </DialogDescription>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            placeholder="Nama"
            type="text"
            className="focus-visible:ring-transparent"
            required
            name="name"
          />
          <div className="flex items-center">
            <span className="flex items-center justify-center bg-input h-10 px-2 rounded-l border-input text-sm ">
              +62
            </span>
            <Input
              placeholder="Nomor Telepon"
              type="tel"
              className="rounded-l-none focus-visible:ring-transparent ring-offset-transparent"
              required
              name="phone"
            />
          </div>
          <Input
            placeholder="Email (optional)"
            type="email"
            className="focus-visible:ring-transparent"
            name="email"
          />

          <Button
            type="submit"
            className={cn(
              "rounded-lg cursor-pointer",
              isWhatsapp
                ? "bg-emerald-500 hover:bg-emerald-400 text-base"
                : "dark:bg-foreground dark:text-background",
            )}
          >
            {isWhatsapp ? (
              <>
                <MdWhatsapp />
                {ctaText || "WhatsApp"}
              </>
            ) : (
              <>
                <LuPhone />
                <span>Telepon</span>
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
