import {
  Table,
  TableBody,
  TableCaption,
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
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-xl capitalize">
            {planName} Plan
          </div>
          <div className="opacity-50 text-sm">
            expired at: {formatDateToIndonesian(subscription.created_at)}
          </div>
        </div>
        <Link
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "hidden lg:flex",
          )}
          href="/languageai/plans"
        >
          See Pricing
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead>Max Monthly Usage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Translation</TableCell>
            <TableCell>{stats.translation_count || 0}</TableCell>
            <TableCell>
              {subscription.translation_limit || "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Translation Storage</TableCell>
            <TableCell>{stats.translation_storage_count || 0}</TableCell>
            <TableCell>{subscription.storage_limit || "Unlimited"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Checkbot</TableCell>
            <TableCell>{stats.checkbot_count || 0}</TableCell>
            <TableCell>{subscription.checkbot_limit || "Unlimited"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Checkbot Storage</TableCell>
            <TableCell>{stats.checkbot_storage_count || 0}</TableCell>
            <TableCell>{subscription.storage_limit || "Unlimited"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Transcription</TableCell>
            <TableCell>{stats.transcription_count || 0}</TableCell>
            <TableCell>
              {subscription.speech_to_text_limit || "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Transcription Storage</TableCell>
            <TableCell>{stats.transcription_storage_count || 0}</TableCell>
            <TableCell>{subscription.storage_limit || "Unlimited"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Text to Speech</TableCell>
            <TableCell>{stats.tts_count || 0}</TableCell>
            <TableCell>
              {subscription.text_to_speech_limit || "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Text to Speech Storage</TableCell>
            <TableCell>{stats.tts_storage_count || 0}</TableCell>
            <TableCell>{subscription.storage_limit || "Unlimited"}</TableCell>
          </TableRow>
        </TableBody>
        <TableCaption>
          *History will show {subscription.history_limit} latest history
        </TableCaption>
      </Table>
    </div>
  );
};

export default LanguageaiCurrentSubscription;
