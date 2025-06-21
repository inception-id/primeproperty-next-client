import { FOOTER_PROVINCES } from "@/lib/enums/provinces";
import Link from "next/link";

export const FooterPropertyArea = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">Wilayah Properti</div>
      <div className="grid gap-2 grid-cols-2">
        {FOOTER_PROVINCES.map((province, index) => (
          <Link
            key={`${index}_${province.nama}_footer`}
            title={`Rumah di ${province.nama}`}
            href={`/properties?province=${province.nama.toLowerCase()}`}
            className="hover:underline capitalize"
          >
            {province.nama.toLowerCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};
