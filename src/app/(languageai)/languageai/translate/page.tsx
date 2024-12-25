import TranslateProvider from "@/app/(languageai)/languageai/translate/_components/translate-provider";
import TranslateMobile from "@/app/(languageai)/languageai/translate/_components/translate-mobile";
import TranslateDesktop from "@/app/(languageai)/languageai/translate/_components/translate-desktop";

const LanguageaiTranslate = async () => {
  return (
    <TranslateProvider>
      <section className="w-full h-screen overflow-hidden">
        <TranslateMobile />
        <TranslateDesktop />
      </section>
    </TranslateProvider>
  );
};

export default LanguageaiTranslate;
