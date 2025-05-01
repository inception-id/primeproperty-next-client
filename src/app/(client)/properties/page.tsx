import { PropertyList } from "./_components";

export const revalidate = 0;

const PropertiesPage = () => {
  return (
    <div>
      <div className="container mx-auto p-4 flex flex-col gap-4">
        <h1 className="font-bold">Properti di Indonesia</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default PropertiesPage;
