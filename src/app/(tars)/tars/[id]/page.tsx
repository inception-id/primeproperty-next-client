import TarsSidebar from "./_components/tars-sidebar";
import TarsHeader from "./_header/tars-header";

const DynamicTarsPage = () => {
  return (
    <div className="h-screen w-screen md:flex">
      <TarsSidebar />
      <div className="flex-1">
        <TarsHeader />
      </div>
      {/* <div className="flex flex-col p-2 md:w-[50%] md:mx-auto h-full">
        <TarsMessages />
        <TarsForm />
      </div> */}
    </div>
  );
};

export default DynamicTarsPage;
