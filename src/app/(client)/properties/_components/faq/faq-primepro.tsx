"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ONE = [
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
      <ul className="ml-6 list-disc [&>li]:mt-2">
        <li>Properti dipasarkan melalui beberapa platform </li>
        <li> Properti memiliki exposure tinggi ke para calon pembeli.</li>
        <li>Properti akan dianalisa market valuenya oleh agen PrimePro.</li>
      </ul>
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

const FaqOne = () => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-muted-foreground text-xl">
        A. Informasi Titip Jual &amp; Sewa Di Primepro Indonesia
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_ONE.map((faq, index) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="text-left gap-4 text-lg tracking-tight">
              A.{index + 1} {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-7">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const FAQ_TWO = [
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

const FaqTwo = () => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-muted-foreground text-xl">
        B. Informasi cari beli dan sewa Properti
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_TWO.map((faq, index) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="text-left gap-4 text-lg tracking-tight">
              B.{index + 1} {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-7">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const FAQ_THREE = [
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

const FaqThree = () => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-muted-foreground text-xl">
        C. Informasi tentang PrimePro Indonesia
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_THREE.map((faq, index) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger className="text-left gap-4 text-lg tracking-tight">
              C.{index + 1} {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-7">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export const FaqPrimePro = () => {
  return (
    <section className="flex flex-col gap-12 my-16 max-w-2xl">
      <div>
        <h2 className="text-foreground text-4xl font-bold mb-4">FAQs</h2>
        <h3 className="text-muted-foreground text-lg">
          Temukan jawaban dari pertanyaanmu di sini.
        </h3>
      </div>
      <FaqOne />
      <FaqTwo />
      <FaqThree />
    </section>
  );
};
