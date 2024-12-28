import CheckbotProvider from "@/app/(languageai)/languageai/checkbot/_components/checkbot-provider";

const LanguageaiCheckbot = () => {
  return (
    <CheckbotProvider>
      <section className="w-full h-screen overflow-hidden"></section>
    </CheckbotProvider>
  );
};

export default LanguageaiCheckbot;
