import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { env } from "@/lib/env";
import { formatToCurrencyUnit } from "@/lib/intl/format-to-currency-unit";
import Image from "next/image";
import Link from "next/link";
import { ContactAgentDialog } from "./contact-agent-dialog";
import { Specifications } from "./specifications";
import { formatDateToIndonesian } from "@/lib/intl/format-date-to-indonesian";

type PropertyCardProps = {
  propertyWithAgent: PropertyWithAgent;
};

export const PropertyCard = ({ propertyWithAgent }: PropertyCardProps) => {
  const baseImgPath = env.NEXT_PUBLIC_S3_ENDPOINT;
  const coverImage =
    propertyWithAgent[0].images.find((img) => img.is_cover) ??
    propertyWithAgent[0].images[0];

  return (
    <Card className="relative border-none shadow-none">
      <Link
        href={`/properties/${propertyWithAgent[0].id}`}
        className="flex flex-col gap-2"
      >
        <CardHeader className="p-0 w-full h-64 relative">
          <Image
            src={baseImgPath + coverImage.path}
            alt={coverImage.indonesian_label}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="bg-background bg-opacity-50 px-2 py-1 text-xs rounded capitalize absolute top-0 right-2 ">
            {propertyWithAgent[0].building_type}
          </div>
        </CardHeader>
        <CardContent className="px-0 w-full group pb-2">
          <div className="flex flex-col gap-1 lg:gap-0 group-hover:underline">
            <strong className="text-xl">
              {formatToCurrencyUnit(propertyWithAgent[0].price)}
            </strong>
            <CardTitle>
              <h2 className="text-base text-wrap font-normal line-clamp-1">
                {propertyWithAgent[0].title}
              </h2>
            </CardTitle>
            <span className="text-sm text-muted-foreground">
              {propertyWithAgent[0].street} - {propertyWithAgent[0].regency}
            </span>
            <CardDescription>
              <h3 className="text-xs line-clamp-1">
                {propertyWithAgent[0].description}
              </h3>
            </CardDescription>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-0 w-full">
        <div className="flex flex-col gap-4 lg:gap-3 flex-1">
          <Specifications propertyWithAgent={propertyWithAgent} />
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col text-xs">
              <span>
                Diperbarui{" "}
                {formatDateToIndonesian(propertyWithAgent[0].updated_at)}
              </span>
              <span>{propertyWithAgent[1]}</span>
            </div>
            <ContactAgentDialog
              isWhatsapp={true}
              propertyWithAgent={propertyWithAgent}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
