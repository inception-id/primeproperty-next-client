import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ_TWO = [
  {
    question:
      "Apa saja jenis property yang ditawarkan oleh Primepro Indonesia ?",
    answer:
      "Tanah, rumah tinggal, apartemen, ruko, office space, pabrik, gedung dan lainnya.",
  },
  {
    question:
      "Bagaimana cara membeli atau menyewa properti di PrimePro Indonesia ?",
    answer:
      "Bapak/Ibu dapat langsung menghubungi kami di nomor WA 0821 1616 2995 ",
  },
  {
    question: "Apakah properti yang dipasarkan PrimePro sudah legal?",
    answer:
      "Agen kami melakukan pengecekkan legalitas terlebih dahulu sebelum memasarkan properti tersebut di platform kami.",
  },
  {
    question:
      "Apakah PrimePro Indonesia dapat membantu pelanggan mengurus KPR?",
    answer:
      "Perusahaan kami sudah bekerjasama dengan berbagai bank. Kami akan bantu proses KPR sampai selesai akad kredit di bank.",
  },
];
export const FaqTwo = () => {
  return (
    <div>
      <p className="font-semibold">Informasi cari beli dan sewa Properti</p>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_TWO.map((faq) => (
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
