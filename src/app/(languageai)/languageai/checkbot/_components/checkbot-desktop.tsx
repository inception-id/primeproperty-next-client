import CheckbotForm from "@/app/(languageai)/languageai/checkbot/_components/checkbot-form";
import CheckbotResult from "@/app/(languageai)/languageai/checkbot/_components/checkbot-result";

const CheckbotDesktop = () => {
  return (
    <div className="hidden lg:grid grid-cols-2 p-4 gap-4 h-full">
      <CheckbotForm />
      <CheckbotResult />
    </div>
  );
};

export default CheckbotDesktop;
