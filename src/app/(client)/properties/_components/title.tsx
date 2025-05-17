import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { PURCHASE_STATUS, PurchaseStatus } from "@/lib/enums/purchase-status";
import { cn } from "@/lib/utils";

type PropertiesTitleProps = {
  propertyCount: number;
  searchParams: FindPropertyQuery;
  className?: string;
};

const createLocation = (
  propertyCount: number,
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
  if (propertyCount === 0) {
    return "";
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
        "flex gap-1 text-base flex-wrap ",
        propertyCount === 0 &&
          Object.values(searchParams).filter((val) => val).length === 0 &&
          "font-bold lg:text-xl ",
        className,
      )}
    >
      {propertyCount === 0 ? "Pencarian tidak ditemukan" : "Menampilkan"}
      {propertyCount > 0 ? (
        <b>{propertyCount}</b>
      ) : Object.values(searchParams).filter((val) => val).length > 0 ? (
        <p>untuk</p>
      ) : (
        ""
      )}
      <b>
        {searchParams.buiding_type
          ? searchParams.buiding_type.toLowerCase()
          : propertyCount > 0 || Object.keys(searchParams).length > 0
            ? "properti"
            : ""}
      </b>
      <b>
        {searchParams.purchase_status
          ? PURCHASE_STATUS[
              searchParams.purchase_status as PurchaseStatus
            ].toLowerCase()
          : propertyCount > 0
            ? "dijual"
            : ""}
      </b>
      {Object.keys(searchParams).length > 0 && "di"}
      <b className="capitalize">
        {createLocation(
          propertyCount,
          searchParams.province,
          searchParams.regency,
          searchParams.street,
        )}
      </b>
    </h1>
  );
};
