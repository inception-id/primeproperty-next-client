import { Suspense } from "react";
import { DynamicProperty } from "./_components";
import { Properties, PropertiesFilter } from "../_components";
import { FindPropertyQuery } from "@/lib/api/properties/find-properties";
import { pathParamsToPurchaseStatus } from "@/lib/enums/purchase-status";
import { BuildingType } from "@/lib/enums/building-type";
import { Metadata } from "next";
import { generatePropertiesMetadata } from "../_lib/create-properties-metadata";

type DynamicPropertyPageProps = {
  searchParams: Promise<FindPropertyQuery>;
  params: Promise<{
    path: string[];
  }>;
};

export const generateMetadata = async ({
  searchParams,
  params,
}: DynamicPropertyPageProps): Promise<Metadata> =>
  generatePropertiesMetadata(searchParams, params);

const DynamicPropertyPage = async ({ params }: DynamicPropertyPageProps) => {
  const { path } = await params;
  const isList = Number.isNaN(+path[path.length - 1]);
  const propertyId = isList ? 0 : path[path.length - 1];
  if (isList) {
    const newSearchParams: FindPropertyQuery = {
      limit: String(30),
      purchase_status: pathParamsToPurchaseStatus(path?.[0] ?? ""),
      buiding_type: path?.[1] ? (path[1] as BuildingType) : "",
      province: path?.[2]
        ? path[2].replaceAll("-", " ").replaceAll("+", " ").toLowerCase()
        : "",
      regency: path?.[3]
        ? path[3].replaceAll("-", " ").replaceAll("+", " ").toLowerCase()
        : "",
      street: path?.[4]
        ? path[4].replaceAll("-", " ").replaceAll("+", " ").toLowerCase()
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
