import Image from "next/image";
import { Suspense } from "react";
import { DynamicProperty } from "./_components";

export const revalidate = 0;

const Loading = () => {
  return (
    <div className="w-full h-full min-h-96 flex items-center justify-center">
      <Image
        src="/images/primepro-with-full-text.png"
        alt="Loading"
        width={150}
        height={150}
        className="animate-bounce"
      />
    </div>
  );
};

type DynamicPropertyPageProps = {
  params: {
    path: string[];
  };
};

const DynamicPropertyPage = ({ params }: DynamicPropertyPageProps) => {
  const isList = Number.isNaN(params.path[params.path.length - 1]);
  const propertyId = params.path[params.path.length - 1];
  if (isList) {
    return <div>list</div>;
  }

  return (
    <div className="container mx-auto">
      <Suspense fallback={<Loading />}>
        <DynamicProperty propertyId={+propertyId} />
      </Suspense>
    </div>
  );
};

export default DynamicPropertyPage;
