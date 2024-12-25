import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TranslateResult from "@/app/(languageai)/languageai/translate/_components/translate-result";
import TranslateForm from "@/app/(languageai)/languageai/translate/_components/translate-form";

const TranslateMobile = () => {
  return (
    <div className="lg:hidden w-full h-full">
      <ResizablePanelGroup direction={"vertical"}>
        <ResizablePanel defaultSize={75}>
          <TranslateForm />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={15}  defaultSize={25}>
          <TranslateResult />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default TranslateMobile;
