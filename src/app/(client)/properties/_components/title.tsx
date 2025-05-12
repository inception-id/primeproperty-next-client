import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { PURCHASE_STATUS, PurchaseStatus } from "@/lib/enums/purchase-status";

type PropertiesTitleProps = {
  propertyCount: number;
  searchParams: FindPropertyQuery;
};

const createLocation = (province?: string, regency?: string) => {
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
}: PropertiesTitleProps) => {
  return (
    <h1 className="py-4 flex gap-1 text-base justify-center md:text-base md:justify-start">
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
        {createLocation(searchParams.province, searchParams.regency)}
      </b>
    </h1>
  );
};
