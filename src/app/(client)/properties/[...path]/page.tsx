import { Suspense } from "react";
import { DynamicProperty } from "./_components";
import { Properties, PropertiesFilter } from "../_components";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { pathParamsToPurchaseStatus } from "@/lib/enums/purchase-status";
import { BuildingType } from "@/lib/enums/building-type";
import { Metadata } from "next";
import { generatePropertiesMetadata } from "../_lib/create-properties-metadata";

export const revalidate = 0;

type DynamicPropertyPageProps = {
  searchParams: FindPropertyQuery;
  params: {
    path: string[];
  };
};

export const generateMetadata = async ({
  searchParams,
  params,
}: DynamicPropertyPageProps): Promise<Metadata> =>
  generatePropertiesMetadata(searchParams, params.path);

const DynamicPropertyPage = ({ params }: DynamicPropertyPageProps) => {
  const isList = Number.isNaN(+params.path[params.path.length - 1]);
  const propertyId = isList ? 0 : params.path[params.path.length - 1];
  if (isList) {
    const newSearchParams: FindPropertyQuery = {
      limit: String(30),
      purchase_status: pathParamsToPurchaseStatus(params.path?.[0] ?? ""),
      buiding_type: params.path?.[1] ? (params.path[1] as BuildingType) : "",
      province: params.path?.[2]
        ? params.path[2].replaceAll("-", " ").replaceAll("+", " ").toLowerCase()
        : "",
      regency: params.path?.[3]
        ? params.path[3].replaceAll("-", " ").replaceAll("+", " ").toLowerCase()
        : "",
      street: params.path?.[4]
        ? params.path[4].replaceAll("-", " ").replaceAll("+", " ").toLowerCase()
        : "",
    };
    return (
      <Suspense>
        <Properties searchParams={newSearchParams} />
      </Suspense>
    );
  }

  return (
    <>
      <div className="hidden lg:block">
        <PropertiesFilter searchParams={{}} />
      </div>
      <div className="container mx-auto lg:px-2">
        <Suspense>
          <DynamicProperty propertyId={+propertyId} />
        </Suspense>
      </div>
    </>
  );
};

export default DynamicPropertyPage;
