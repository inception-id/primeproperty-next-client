import { findLanguageaiActiveSubscription } from "@/lib/api/languageai-subscriptions/find-languageai-active-subscription";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronRight } from "react-icons/lu";

const LanguageaiActiveSubscriptionTable = async () => {
  const activeSubscription = await findLanguageaiActiveSubscription();
  const subscription = activeSubscription.data;

  if (!subscription) {
    return (
      <div className="bg-destructive w-fit p-1 rounded">
        Fail to find subscription data, please contact{" "}
        <Link href="/support" className="underline font-semibold">
          support
        </Link>{" "}
        directly.
      </div>
    );
  }
  return (
    <div className="lg:max-w-xl">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-xl capitalize">
          {subscription.plan_name} Plan
        </div>
        <Link
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "opacity-75",
          )}
          href="/languageai/plans"
        >
          Pricing <LuChevronRight />
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>
              Usage <span className="hidden lg:inline">(current month) </span>{" "}
            </TableHead>
            <TableHead>Max Usage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Translation</TableCell>
            <TableCell>{`${subscription.translation_count}x` || 0}</TableCell>
            <TableCell>
              {subscription.translation_limit
                ? `${subscription.translation_limit}x/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Translation Storage</TableCell>
            <TableCell>
              {subscription.translation_storage_count || 0} record
            </TableCell>
            <TableCell>
              {subscription.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Checkbot</TableCell>
            <TableCell>{`${subscription.checkbot_count}x` || 0}</TableCell>
            <TableCell>
              {subscription.checkbot_limit
                ? `${subscription.checkbot_limit}x/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Checkbot Storage</TableCell>
            <TableCell>
              {subscription.checkbot_storage_count || 0} record
            </TableCell>
            <TableCell>
              {subscription.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Text to Speech</TableCell>
            <TableCell>
              {`${subscription.text_to_speech_count}x` || 0}
            </TableCell>
            <TableCell>
              {subscription.text_to_speech_limit
                ? `${subscription.text_to_speech_limit}x/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Text to Speech Storage</TableCell>
            <TableCell>
              {subscription.text_to_speech_storage_count || 0} record
            </TableCell>
            <TableCell>
              {subscription.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Speech to Text</TableCell>
            <TableCell>
              {`${subscription.speech_to_text_count} minutes` || 0}
            </TableCell>
            <TableCell>
              {subscription.speech_to_text_limit
                ? `${subscription.speech_to_text_limit} minutes/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Speech to Text Storage</TableCell>
            <TableCell>
              {subscription.speech_to_text_storage_count || 0} record
            </TableCell>
            <TableCell>
              {subscription.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
        </TableBody>
        <TableCaption>
          History will show {subscription.history_limit} latest history
        </TableCaption>
      </Table>
    </div>
  );
};
export default LanguageaiActiveSubscriptionTable;
