import { redirect } from "next/navigation";
import { DynamicProperty } from "./_components";

type DynamicPropertyPageProps = {
  params: {
    id: string;
  };
};

const DynamicPropertyPage = ({ params }: DynamicPropertyPageProps) => {
  if (!params.id) {
    redirect("/properties");
    return;
  }
  return (
    <div className="p-4">
      <DynamicProperty id={params.id} />
    </div>
  );
};

export default DynamicPropertyPage;
