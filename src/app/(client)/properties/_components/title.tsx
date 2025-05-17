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
  if (province && regency && street) {
    return street + ", " + regency + ", " + province;
  }
  if (province && regency) {
    return regency + ", " + province;
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
      <h1 className={cn("flex gap-1 text-base flex-wrap", className)}>
        Pencarian tidak ditemukan untuk{" "}
        <b>{searchParams.buiding_type ?? "Properti"}</b>
        <b>
          {searchParams.purchase_status
            ? PURCHASE_STATUS[
                searchParams.purchase_status as PurchaseStatus
              ].toLowerCase()
            : "dijual"}
        </b>
        {"di"}
        <b className="capitalize">
          {createLocation(
            searchParams.province,
            searchParams.regency,
            searchParams.street,
          )}
        </b>
      </h1>
    );
  }

  return (
    <h1 className={cn("flex gap-1 text-base flex-wrap ", className)}>
      Menampilkan
      <b>{propertyCount}</b>
      <b>
        {searchParams.buiding_type ? searchParams.buiding_type : "properti"}
      </b>
      <b>
        {searchParams.purchase_status
          ? PURCHASE_STATUS[
              searchParams.purchase_status as PurchaseStatus
            ].toLowerCase()
          : "dijual"}
      </b>
      {"di"}
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
