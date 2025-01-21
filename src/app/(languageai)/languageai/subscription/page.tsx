import { fetchCookieToken } from "@/lib/fetchCookieToken";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";
import LanguageaiPendingPayment from "@/app/(languageai)/languageai/subscription/_components/languageai-pending-payment";

const LanguageaiSubscriptionPage = async () => {
  const accessToken = await fetchCookieToken();
  if (!accessToken) {
    return <LanguageaiLoginCard />;
  }

  return (
    <section className="p-4">
      <h1 className="font-bold text-2xl mb-4">SUBSCRIPTION</h1>

      <LanguageaiPendingPayment />
    </section>
  );
};

export default LanguageaiSubscriptionPage;
