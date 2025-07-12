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
  if (street) {
    return street;
  }
  if (regency) {
    return regency;
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
  if (
    propertyCount === 0 &&
    Object.values(searchParams).filter((val) => val).length === 0
  ) {
    return (
      <h1 className={cn("font-bold text-lg lg:text-xl", className)}>
        Pencarian tidak ditemukan
      </h1>
    );
  }

  if (propertyCount === 0) {
    return (
      <h1 className={cn("flex gap-1 text-base flex-wrap font-bold", className)}>
        Pencarian tidak ditemukan untuk{" "}
        {searchParams.buiding_type ?? "Properti"}{" "}
        {searchParams.purchase_status
          ? PURCHASE_STATUS[
              searchParams.purchase_status as PurchaseStatus
            ].toLowerCase()
          : "dijual"}{" "}
        {"di"}{" "}
        {createLocation(
          searchParams.province,
          searchParams.regency,
          searchParams.street,
        )}
      </h1>
    );
  }

  return (
    <div className="flex flex-col">
      <h1
        className={cn(
          "flex gap-1 text-base flex-wrap font-bold capitalize",
          className,
        )}
      >
        {searchParams.buiding_type ? searchParams.buiding_type : "properti"}{" "}
        {searchParams.purchase_status
          ? PURCHASE_STATUS[
              searchParams.purchase_status as PurchaseStatus
            ].toLowerCase()
          : "dijual"}{" "}
        {"di"}{" "}
        {createLocation(
          searchParams.province,
          searchParams.regency,
          searchParams.street,
        )}
      </h1>
      <p>Menampilkan {propertyCount} properti</p>
    </div>
  );
};
