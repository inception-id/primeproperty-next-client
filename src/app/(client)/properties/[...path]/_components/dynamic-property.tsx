import { findPropertyById } from "@/lib/api/properties/find-property-by-id";
import { PropertyOverview } from "./property-overview";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { env } from "@/lib/env";
import Image from "next/image";
import { LuCircleUser, LuPhone } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { MdWhatsapp } from "react-icons/md";

type DynamicPropertyProps = {
  propertyId: number;
};

export const DynamicProperty = async ({ propertyId }: DynamicPropertyProps) => {
  const property = await findPropertyById(propertyId);

  if (!property.data) {
    return <>Search</>;
  }
  return (
    <div>
      <div className="p-4 flex flex-col gap-4 md:flex-row md:justify-between md:gap-16">
        <PropertyOverview property={property.data} />

        <Card className="h-fit shadow-lg">
          <CardHeader className="p-4">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10">
                {property.data[3] ? (
                  <Image
                    src={env.NEXT_PUBLIC_S3_ENDPOINT + property.data[3]}
                    alt={property.data[2]}
                    width={100}
                    height={100}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <LuCircleUser className="w-full h-full text-muted-foreground/50" />
                )}
              </div>
              <div className="flex flex-col ">
                <span className="text-sm">{property.data[1]}</span>
                <span className="text-xs text-muted-foreground">
                  Primepro Agent
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4 cursor-auto ">
            <div className="w-full h-0.5 bg-muted mb-4" />

            <p className="text-xs mb-2 pl-2">
              Tanya Jawab langsung dengan agen:{" "}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Button
                className="rounded-lg cursor-pointer dark:bg-foreground dark:text-background"
                variant="outline"
              >
                <LuPhone />
                <span>0{property.data[2]}</span>
              </Button>
              <Button className="rounded-lg bg-green-500 hover:bg-green-400 cursor-pointer">
                <MdWhatsapp />
                Whatsapp
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
