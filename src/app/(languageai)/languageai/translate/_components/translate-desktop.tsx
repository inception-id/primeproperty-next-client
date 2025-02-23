import TranslateForm from "@/app/(languageai)/languageai/translate/_components/translate-form";
import TranslateResult from "@/app/(languageai)/languageai/translate/_components/translate-result";

const TranslateDesktop = () => {
  return (
    <section className="grid grid-rows-[50%_45%] lg:grid-rows-1 lg:grid-cols-2 p-4 gap-4 w-full h-[95vh] lg:h-screen overflow-hidden">
      <TranslateForm />
      <TranslateResult />
    </section>
  );
};

export default TranslateDesktop;
