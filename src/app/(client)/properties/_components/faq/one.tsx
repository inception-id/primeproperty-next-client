import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ_ONE = [
  {
    question: "Apa saja layanan yang disediakan oleh PrimePro Indonesia ?",
    answer:
      "PrimePro Indonesia membantu pemasaran dalam penjualan dan penyewaan seluruh jenis properti. ",
  },
  {
    question: "Bagaimana cara menitipkan properti melalui PrimePro Indonesia ?",
    answer:
      "Bapak/Ibu dapat langsung menghubungi kami di nomor WA 0821 1616 2995",
  },
  {
    question:
      "Apakah kami dapat mendapatkan informasi tentang harga pasaran properti dari agen PrimePro Indonesia?",
    answer:
      "Bapak/Ibu dapat langsung menghubungi kami di nomor WA 0821 1616 2995 untuk diarahkan ke marketing spesialis area dimana properti dipasarkan.",
  },
  {
    question:
      "Apa saja manfaat menitipkan properti ke agen PrimePro Indonesia ?",
    answer: (
      <>
        <div>Manfaat menitipkan ke agen PrimePro:</div>
        <ol className=" list-inside">
          <li>Properti dipasarkan melalui beberapa platform </li>
          <li>Properti memiliki exposure tinggi ke para calon pembeli.</li>
          <li></li>
        </ol>
      </>
    ),
  },
  {
    question:
      "Apakah PrimePro Indonesia membantu dalam proses negosiasi harga ?",
    answer:
      "Betul, agen kami akan membantu proses negosiasi sampai mendapatkan harga terbaik.",
  },
  {
    question:
      "Apakah ada biaya untuk memasarkan properti di PrimePro Indonesia?",
    answer:
      "Kami tidak memungut biaya pemasaran tetapi ada biaya success fee yang harus dibayarkan oleh pemilik apabila properti terjual dengan agen kami.",
  },
];
export const FaqOne = () => {
  return (
    <div>
      <p className="font-semibold">
        Informasi Titip Jual &amp; Sewa Di Primepro Indonesia
      </p>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_ONE.map((faq) => (
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
