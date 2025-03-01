import TarsSidebar from "./_sidebar/tars-sidebar";
import TarsHeader from "./_header/tars-header";

const DynamicTarsPage = () => {
  return (
    <div className="h-screen w-screen md:flex">
      <div className="hidden md:flex">
        <TarsSidebar />
      </div>
      <div className="flex-1">
        <TarsHeader />
      </div>
    </div>
  );
};

export default DynamicTarsPage;
