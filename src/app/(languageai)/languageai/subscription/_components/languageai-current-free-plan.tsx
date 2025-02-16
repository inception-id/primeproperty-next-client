import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TLanguageaiSubscriptionStats } from "@/lib/api/languageai-subscriptions/find-languageai-subscription-statistic";
import { TLanguageaiSubscriptionPlan } from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LuChevronRight } from "react-icons/lu";

type LanguageaiCurrentFreePlanProps = {
  freePlan: TLanguageaiSubscriptionPlan;
  stats: TLanguageaiSubscriptionStats;
};

const LanguageaiCurrentFreePlan = async ({
  stats,
  freePlan,
}: LanguageaiCurrentFreePlanProps) => {
  return (
    <div className="lg:max-w-xl">
      <div className="font-semibold text-xl capitalize">
        {freePlan.name} Plan
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
            <TableCell>{`${stats.translation_count}x` || 0}</TableCell>
            <TableCell>
              {freePlan.translation_limit
                ? `${freePlan.translation_limit}x/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Translation Storage</TableCell>
            <TableCell>{stats.translation_storage_count || 0} record</TableCell>
            <TableCell>
              {freePlan.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Checkbot</TableCell>
            <TableCell>{`${stats.checkbot_count}x` || 0}</TableCell>
            <TableCell>
              {freePlan.checkbot_limit
                ? `${freePlan.checkbot_limit}x/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Checkbot Storage</TableCell>
            <TableCell>{stats.checkbot_storage_count || 0} record</TableCell>
            <TableCell>
              {freePlan.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Text to Speech</TableCell>
            <TableCell>{`${stats.tts_count}x` || 0}</TableCell>
            <TableCell>
              {freePlan.text_to_speech_limit
                ? `${freePlan.text_to_speech_limit}x/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Text to Speech Storage</TableCell>
            <TableCell>{stats.tts_storage_count || 0} record</TableCell>
            <TableCell>
              {freePlan.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Speech to Text</TableCell>
            <TableCell>{`${stats.transcription_count} minutes` || 0}</TableCell>
            <TableCell>
              {freePlan.speech_to_text_limit
                ? `${freePlan.speech_to_text_limit} minutes/month`
                : "Unlimited"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Speech to Text Storage</TableCell>
            <TableCell>
              {stats.transcription_storage_count || 0} record
            </TableCell>
            <TableCell>
              {freePlan.storage_limit || "Unlimited"} record
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex items-center justify-between w-full">
        <div className="text-xs opacity-50">
          *History will show {freePlan.history_limit} latest history
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

export default LanguageaiCurrentFreePlan;
