"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaqPrimePro } from "./faq-primepro";
import { FaqProperty } from "./faq-property";
import { FaqSchema } from "./faq-schema";

type FaqProps = {
  defaultTab: "PRIMEPRO" | "PROPERTY";
};

export const Faq = ({ defaultTab }: FaqProps) => {
  return (
    <>
      <FaqSchema />
      <section className="flex flex-col gap-4 my-16 max-w-2xl" id="faq">
        <div>
          <h2 className="text-foreground text-4xl font-bold mb-4">FAQs</h2>
          <h3 className="text-muted-foreground text-lg">
            Temukan jawaban dari pertanyaanmu di sini.
          </h3>
        </div>
        <Tabs defaultValue={defaultTab} className="max-w-2xl">
          <TabsList>
            <TabsTrigger value="PRIMEPRO">PRIMEPRO</TabsTrigger>
            <TabsTrigger value="PROPERTY">PROPERTI</TabsTrigger>
          </TabsList>
          <TabsContent value="PRIMEPRO">
            <FaqPrimePro />
          </TabsContent>
          <TabsContent value="PROPERTY">
            <FaqProperty />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};
