import TarsForm from "./_components/tars-form";
import TarsMessages from "./_components/tars-message";
import TarsProvider from "./_components/tars-provider";
import TarsHeader from "./_header/tars-header";

const DynamicTarsPage = () => {
  return (
    <TarsProvider>
      <div className="h-screen">
        <TarsHeader />
        <div className="flex flex-col p-2 md:w-[50%] md:mx-auto h-full">
          <TarsMessages />
          <TarsForm />
        </div>
      </div>
    </TarsProvider>
  );
};

export default DynamicTarsPage;
