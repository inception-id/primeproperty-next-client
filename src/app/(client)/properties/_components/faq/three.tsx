import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ_THREE = [
  {
    question: "Jam berapa kantor PrimePro Indonesia beroperasional?",
    answer: (
      <>
        <p>Senin – Jumat jam 09.00 – 17.00</p>
        <p>Sabtu jam 09.00 – 13.00</p>
      </>
    ),
  },
  {
    question: "Bagaimana cara menghubungi PrimePro Indonesia?",
    answer:
      "Bapak/Ibu dapat langsung menghubungi kami di nomor WA 0821 1616 2995 ",
  },
  {
    question: "Apakah dapat datang langsung ke kantor PrimePro Indonesia?",
    answer:
      "Lokasi kantor kami di Kemang Icon, Jl. Kemang Raya No. 1, Jakarta Selatan",
  },
  {
    question:
      "Bagaimana jika saya ingin bergabung menjadi agen property di PrimePro Indonesia?",
    answer:
      "Bapak/Ibu dapat langsung menghubungi kami di nomor WA 0821 1616 2995 ",
  },
];
export const FaqThree = () => {
  return (
    <div>
      <p className="font-semibold">Informasi tentang PrimePro Indonesia</p>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_THREE.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger>
              <h3 className="text-left">{faq.question}</h3>
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
