import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CheckbotForm from "@/app/(languageai)/languageai/checkbot/_components/checkbot-form";
import CheckbotResult from "@/app/(languageai)/languageai/checkbot/_components/checkbot-result";

const TranslateMobile = () => {
  return (
    <div className="lg:hidden w-full h-full">
      <ResizablePanelGroup direction={"vertical"}>
        <ResizablePanel defaultSize={75}>
          <CheckbotForm />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={15} defaultSize={25} maxSize={90}>
          <CheckbotResult />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default TranslateMobile;
