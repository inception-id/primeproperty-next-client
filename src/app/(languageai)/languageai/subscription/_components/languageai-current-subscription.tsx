import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TLanguageaiSubscriptionStats } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-statistic";
import { TLanguageaiSubscription } from "@/lib/api/languageai-subscriptions/find-languageai-active-subscription";
import { cn, formatDateToIndonesian } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronRight } from "react-icons/lu";

type LanguageaiCurrentSubscriptionProps = {
  subscription: TLanguageaiSubscription;
  planName: string;
  stats: TLanguageaiSubscriptionStats;
};

const LanguageaiCurrentSubscription = async ({
  stats,
  subscription,
  planName,
}: LanguageaiCurrentSubscriptionProps) => {
  return (
    <div className="max-w-lg">
      <div className="font-semibold text-xl capitalize">{planName} Plan</div>
      <div className="opacity-50 text-sm">
        expired at: {formatDateToIndonesian(subscription.created_at)}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead>Max Usage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Translation</TableCell>
            <TableCell>{`${stats.translation_count}x` || 0}</TableCell>
            <TableCell>
              {subscription.translation_limit
                ? `${subscription.translation_limit}x/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Translation Storage</TableCell>
            <TableCell>{stats.translation_storage_count || 0} record</TableCell>
            <TableCell>
              {subscription.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Checkbot</TableCell>
            <TableCell>{`${stats.checkbot_count}x` || 0}</TableCell>
            <TableCell>
              {subscription.checkbot_limit
                ? `${subscription.checkbot_limit}x/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Checkbot Storage</TableCell>
            <TableCell>{stats.checkbot_storage_count || 0} record</TableCell>
            <TableCell>
              {subscription.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Text to Speech</TableCell>
            <TableCell>{`${stats.tts_count}x` || 0}</TableCell>
            <TableCell>
              {subscription.text_to_speech_limit
                ? `${subscription.text_to_speech_limit}x/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Text to Speech Storage</TableCell>
            <TableCell>{stats.tts_storage_count || 0} record</TableCell>
            <TableCell>
              {subscription.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Speech to Text</TableCell>
            <TableCell>{`${stats.transcription_count}x` || 0}</TableCell>
            <TableCell>
              {subscription.text_to_speech_limit
                ? `${subscription.text_to_speech_limit} minutes/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Speech to Text Storage</TableCell>
            <TableCell>
              {stats.transcription_storage_count || 0} record
            </TableCell>
            <TableCell>
              {subscription.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex items-center justify-between w-full">
        <div className="text-xs opacity-50">
          *History will show {subscription.history_limit} latest history
        </div>
        <Link
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "opacity-50",
          )}
          href="/languageai/plans"
        >
          Pricing <LuChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default LanguageaiCurrentSubscription;
