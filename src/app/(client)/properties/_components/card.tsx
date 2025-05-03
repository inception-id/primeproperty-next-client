import { Button } from "@/components/ui/button";
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
import { formatDateToIndonesian } from "@/lib/intl/format-date-to-indonesian";
import { formatToCurrencyUnit } from "@/lib/intl/format-to-currency-unit";
import Image from "next/image";
import Link from "next/link";
import {
  LuBath,
  LuBedDouble,
  LuCar,
  LuCircleUser,
  LuPhone,
} from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";

type PropertyCardProps = {
  propertyWithAgent: PropertyWithAgent;
};

export const PropertyCard = ({ propertyWithAgent }: PropertyCardProps) => {
  const baseImgPath = env.NEXT_PUBLIC_S3_ENDPOINT;
  const coverImage =
    propertyWithAgent[0].images.find((img) => img.is_cover) ??
    propertyWithAgent[0].images[0];

  return (
    <Card className="relative">
      <Link href="/">
        <CardHeader className="p-0 w-full h-64 md:h-96">
          <Image
            src={baseImgPath + coverImage.path}
            alt={coverImage.indonesian_label}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-4 flex flex-col gap-2">
          <div>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                {formatToCurrencyUnit(propertyWithAgent[0].price)}
              </CardTitle>
              <div className="bg-brand px-2 py-1 text-[10px] rounded">
                {propertyWithAgent[0].building_type}
              </div>
            </div>
            <h2 className="text-sm">{propertyWithAgent[0].title}</h2>
            <CardDescription className="text-muted-foreground text-xs">
              {propertyWithAgent[0].street} - {propertyWithAgent[0].regency}
            </CardDescription>
          </div>

          <div className="flex items-center gap-2">
            {propertyWithAgent[0].specifications.bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <LuBedDouble className="text-muted-foreground/50" />
                <div>{propertyWithAgent[0].specifications.bedrooms}</div>
              </span>
            )}
            {propertyWithAgent[0].specifications.bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <LuBath className="text-muted-foreground/50" />
                <div>{propertyWithAgent[0].specifications.bathrooms}</div>
              </span>
            )}
            {(propertyWithAgent[0].specifications.garage > 0 ||
              propertyWithAgent[0].specifications.carport > 0) && (
              <span className="flex items-center gap-1">
                <LuCar className="text-muted-foreground/60" />
                <div>
                  {propertyWithAgent[0].specifications.garage +
                    propertyWithAgent[0].specifications.carport}
                </div>
              </span>
            )}
            {propertyWithAgent[0].measurements.land_area > 0 && (
              <span className="flex items-center gap-1">
                <div className="text-muted-foreground/50 text-sm">LT:</div>
                <div>{propertyWithAgent[0].measurements.land_area} m²</div>
              </span>
            )}
            {propertyWithAgent[0].measurements.building_area > 0 && (
              <span className="flex items-center gap-1">
                <div className="text-muted-foreground/50 text-sm">LB:</div>
                <div>{propertyWithAgent[0].measurements.building_area} m²</div>
              </span>
            )}
          </div>
          <div className="w-full h-0.5 bg-muted" />
        </CardContent>
      </Link>
      <CardFooter className="px-4 pb-2 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10">
            {propertyWithAgent[3] ? (
              <Image
                src={env.NEXT_PUBLIC_S3_ENDPOINT + propertyWithAgent[3]}
                alt={propertyWithAgent[2]}
                width={100}
                height={100}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <LuCircleUser className="w-full h-full text-muted-foreground/50" />
            )}
          </div>
          <div className="flex flex-col text-muted-foreground">
            <span className="text-xs">
              Diperbarui{" "}
              {formatDateToIndonesian(propertyWithAgent[0].updated_at)}
            </span>
            <span className="text-sm">{propertyWithAgent[1]}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button className="rounded-lg" variant="outline">
            <LuPhone />
            <span>0{propertyWithAgent[2]}</span>
          </Button>
          <Button className="rounded-lg bg-green-500 hover:bg-green-400">
            <MdWhatsapp />
            Whatsapp
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
