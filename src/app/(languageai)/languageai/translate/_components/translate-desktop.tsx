import TranslateForm from "@/app/(languageai)/languageai/translate/_components/translate-form";
import TranslateResult from "@/app/(languageai)/languageai/translate/_components/translate-result";

const TranslateDesktop = () => {
    return (
       <div className="hidden lg:grid grid-cols-2 p-4 gap-4 h-full">
          <TranslateForm />
           <TranslateResult />
       </div>
    )
};

export default TranslateDesktop;