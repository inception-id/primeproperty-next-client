type DynamicPropertyPageProps = {
  params: {
    id: string;
  };
};

const DynamicPropertyPage = ({ params }: DynamicPropertyPageProps) => {
  return <div className="p-4">hoi {params.id}</div>;
};

export default DynamicPropertyPage;
