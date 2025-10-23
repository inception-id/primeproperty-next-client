import React from "react";

const STEPS = [
  {
    title: "Konsultasi",
    description: "Diskusikan pasar dan tujuan Anda dengan tim kami.",
  },
  {
    title: "Evaluasi",
    description:
      "Tim kami akan mengevaluasi aplikasi Anda dan menilai kesesuaian.",
  },
  {
    title: "Persetujuan & Pelatihan",
    description:
      "Setelah disetujui, Anda akan menerima pelatihan komprehensif.",
  },
  {
    title: "Peluncuran",
    description:
      "Buka kantor franchise PrimePro Indonesia Anda dengan dukungan penuh dari tim kami.",
  },
];

export const Registration = () => {
  return (
    <section className="w-full my-16 max-w-6xl mx-auto">
      <div className="max-w-lg flex flex-col gap-4 mb-8 lg:mb-16 sm:items-center sm:mx-auto sm:max-w-4xl sm:text-center">
        <div className="border rounded text-xs py-1 px-2 w-fit bg-primary">
          Pendaftaran
        </div>
        <h2 className="text-3xl font-bold sm:text-4xl">Cara Mendaftar</h2>
        <h3 className="text-muted-foreground sm:text-2xl">
          Proses sederhana untuk memulai perjalanan franchise Anda dengan
          PrimePro Indonesia
        </h3>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 mx-auto max-w-3xl">
        {STEPS.map((step, index) => (
          <React.Fragment key={step.title}>
            <div className="flex items-center gap-4">
              <span className="bg-primary text-lg text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center">
                {index + 1}
              </span>
              <span className="flex-1">
                <h4 className="font-semibold text-lg">{step.title}</h4>
                <p>{step.description}</p>
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
