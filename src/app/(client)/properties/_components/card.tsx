"use client";
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
import Link from "next/link";
import { ContactAgentDialog } from "./contact-agent-dialog";
import { Specifications } from "./specifications";
import { formatDateToIndonesian } from "@/lib/intl/format-date-to-indonesian";
import { WatermarkImage } from "@/components/custom-ui/watermark-image";
import { PurchaseStatus } from "@/lib/enums/purchase-status";
import { RENT_TIME } from "@/lib/enums/rent_time";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
type PropertyCardProps = {
  propertyWithAgent: PropertyWithAgent;
};

export const PropertyCard = ({ propertyWithAgent }: PropertyCardProps) => {
  const router = useRouter();
  const baseImgPath = env.NEXT_PUBLIC_S3_ENDPOINT;
  const coverImage =
    propertyWithAgent[0].images.find((img) => img.is_cover) ??
    propertyWithAgent[0].images[0];

  return (
    <Card className="relative border-none shadow-none">
      <div
        role="button"
        className="flex flex-col gap-2 cursor-pointer mb-2"
        onClick={() => router.push(`/properties/${propertyWithAgent[0].id}`)}
      >
        <CardHeader className="p-0 w-full relative">
          <WatermarkImage
            watermarkProps={{
              fontSize: 20,
            }}
            imageProps={{
              src: baseImgPath + coverImage.path,
              alt: propertyWithAgent[0].title,
              width: 1000,
              height: 1000,
              className: "w-full h-64 object-cover rounded-lg aspect-square",
            }}
          />

          <div className="bg-background bg-opacity-50 px-2 py-1 text-xs rounded capitalize absolute top-0 right-2 ">
            {propertyWithAgent[0].building_type}
          </div>
        </CardHeader>
        <CardContent className="p-0 w-full group">
          <div className="flex flex-col gap-1 lg:gap-0 group-hover:underline">
            <strong className="text-xl flex items-center gap-1">
              <span>
                {formatToCurrencyUnit(
                  propertyWithAgent[0].price,
                  propertyWithAgent[0].currency,
                )}
              </span>
              {propertyWithAgent[0].purchase_status ===
                PurchaseStatus.ForRent &&
                propertyWithAgent[0].rent_time && (
                  <span>{RENT_TIME[propertyWithAgent[0].rent_time]}</span>
                )}
            </strong>

            <span
              className={cn(
                "text-sm text-muted-foreground",
                propertyWithAgent[0].price_down_payment &&
                  propertyWithAgent[0].price_down_payment > 0
                  ? "block"
                  : "hidden",
              )}
            >
              (Down Payment:{" "}
              {propertyWithAgent?.[0]?.price_down_payment &&
                propertyWithAgent?.[0]?.price_down_payment > 0 &&
                formatToCurrencyUnit(
                  propertyWithAgent[0].price_down_payment,
                  propertyWithAgent[0].currency,
                )}
              )
            </span>
            <CardTitle>
              <Link
                title={propertyWithAgent[0].title}
                aria-label={propertyWithAgent[0].title}
                href={`/properties/${propertyWithAgent[0].id}`}
              >
                <h2 className="text-lg text-wrap line-clamp-1">
                  {propertyWithAgent[0].title}
                </h2>
              </Link>
            </CardTitle>
            <p className="text-sm text-muted-foreground italic">
              {propertyWithAgent[0].street} - {propertyWithAgent[0].regency}
            </p>
          </div>
          <CardDescription className="my-2">
            <p className="text-xs line-clamp-1">
              {propertyWithAgent[0].description_seo
                ? propertyWithAgent[0].description_seo
                : propertyWithAgent[0].description}
            </p>
          </CardDescription>
          <Specifications propertyWithAgent={propertyWithAgent} />
        </CardContent>
      </div>
      <CardFooter className="p-0 w-full ">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col text-xs">
            <span>
              Diperbarui{" "}
              {formatDateToIndonesian(propertyWithAgent[0].updated_at)}
            </span>
            <span className="capitalize">{propertyWithAgent[1]}</span>
          </div>
          <ContactAgentDialog
            isWhatsapp={true}
            propertyWithAgent={propertyWithAgent}
          />
        </div>
      </CardFooter>
    </Card>
  );
};
