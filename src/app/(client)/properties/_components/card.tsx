import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PropertyWithAgent } from "@/lib/api/properties/find-properties";
import { env } from "@/lib/env";
import { formatToCurrencyUnit } from "@/lib/intl/format-to-currency-unit";
import Image from "next/image";
import Link from "next/link";

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
        <CardHeader className="p-0 w-full h-64">
          <Image
            src={baseImgPath + coverImage.path}
            alt={coverImage.indonesian_label}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <CardTitle>
              {formatToCurrencyUnit(propertyWithAgent[0].price)}
            </CardTitle>
            <div className="bg-brand px-2 py-1 text-xs rounded">
              {propertyWithAgent[0].building_type}
            </div>
          </div>
          <h2 className="text-muted-foreground text-sm">
            {propertyWithAgent[0].title}
          </h2>
          <CardDescription className="text-foreground">
            {propertyWithAgent[0].street} - {propertyWithAgent[0].regency}
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};
