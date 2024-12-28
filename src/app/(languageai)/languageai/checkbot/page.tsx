import CheckbotProvider from "@/app/(languageai)/languageai/checkbot/_components/checkbot-provider";
import CheckbotMobile from "@/app/(languageai)/languageai/checkbot/_components/checkbot-mobile";
import CheckbotDesktop from "@/app/(languageai)/languageai/checkbot/_components/checkbot-desktop";

const LanguageaiCheckbot = () => {
    return (
        <CheckbotProvider>

        <section className="w-full h-screen overflow-hidden">
            <CheckbotMobile />
            <CheckbotDesktop />
        </section>
        </CheckbotProvider>
    )
};

export default LanguageaiCheckbot;