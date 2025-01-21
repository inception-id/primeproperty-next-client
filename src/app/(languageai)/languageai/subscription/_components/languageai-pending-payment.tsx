import { findLanguageaiSubscriptionPendingPayment } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-pending-payment";
import { cn, formatDateToIndonesian } from "@/lib/utils";
import { LuMessageCircleWarning } from "react-icons/lu";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const LanguageaiPendingPayment = async () => {
  try {
    const pendingPayment = await findLanguageaiSubscriptionPendingPayment();

    return (
        <div className="border p-4 bg-destructive/25 shadow rounded-lg max-w-xs">
            <div className="flex gap-2 items-center font-bold mb-2">
                <LuMessageCircleWarning className="text-2xl"/>
                <span className="text-xl">Pending Payment</span>
            </div>
            <div className="mb-2">
                Payment ID: {' '}
                {pendingPayment.data.invoice_id}
            </div>
            <div className="mb-2">
                Pay before: {' '}
                {formatDateToIndonesian(pendingPayment.data.expired_at, true)}
            </div>
            {pendingPayment.data.doku_response && (
                <Link
                    href={pendingPayment.data.doku_response.response.payment.url}
                    className={cn(buttonVariants(), "w-full")}
                >
                    Payment Link
                </Link>
            )}
        </div>
    );
  } catch (e: any) {
      console.error(e.message);
      return <> </>;
  }
};

export default LanguageaiPendingPayment;
