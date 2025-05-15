import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { PURCHASE_STATUS, PurchaseStatus } from "@/lib/enums/purchase-status";
import { cn } from "@/lib/utils";

type PropertiesTitleProps = {
  propertyCount: number;
  searchParams: FindPropertyQuery;
  className?: string;
};

const createLocation = (
  province?: string,
  regency?: string,
  street?: string,
) => {
  if (regency && street) {
    return street + " " + regency;
  }

  if (province && regency) {
    return regency + " " + province;
  }

  if (province) {
    return province;
  }

  return "Indonesia";
};

export const PropertiesTitle = ({
  propertyCount,
  searchParams,
  className,
}: PropertiesTitleProps) => {
  return (
    <h1
      className={cn(
        "py-4 flex gap-1 text-base justify-center md:text-base md:justify-start",
        className,
      )}
    >
      Menampilkan
      <b>
        {propertyCount}{" "}
        {searchParams.buiding_type
          ? searchParams.buiding_type.toLowerCase()
          : "properti"}{" "}
        {searchParams.purchase_status
          ? PURCHASE_STATUS[
              searchParams.purchase_status as PurchaseStatus
            ].toLowerCase()
          : "dijual"}
      </b>
      di
      <b className="capitalize">
        {createLocation(
          searchParams.province,
          searchParams.regency,
          searchParams.street,
        )}
      </b>
    </h1>
  );
};
