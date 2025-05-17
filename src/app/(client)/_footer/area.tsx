import { FOOTER_PROVINCES } from "@/lib/enums/provinces";
import Link from "next/link";

export const FooterPropertyArea = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold">Wilayah Properti</div>
      <div className="grid gap-4 grid-cols-2">
        {FOOTER_PROVINCES.map((province, index) => (
          <Link
            key={`${index}_${province.domain_name}_footer`}
            href={`/properties?province=${province.domain_name.toLowerCase()}`}
            className="hover:underline"
          >
            {province.domain_name}
          </Link>
        ))}
      </div>
    </div>
  );
};
