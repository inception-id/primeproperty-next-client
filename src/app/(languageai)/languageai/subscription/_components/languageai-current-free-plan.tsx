import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {TLanguageaiSubscriptionStats} from "@/lib/api/languageai-subscriptions/find-languageai-subscription-statistic";
import {TLanguageaiSubscriptionPlan} from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";
import {cn, formatDateToIndonesian} from "@/lib/utils";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

type LanguageaiCurrentFreePlanProps = {
    freePlan: TLanguageaiSubscriptionPlan
    stats: TLanguageaiSubscriptionStats
}

const LanguageaiCurrentFreePlan = async ({stats, freePlan}: LanguageaiCurrentFreePlanProps) => {
    return (
        <div className="max-w-lg">
            <div className="flex items-center justify-between">
                <div className="font-semibold text-xl capitalize">{freePlan.name} Plan</div>
                <Link className={cn(buttonVariants({variant: "outline", size: "sm"}), "hidden lg:flex")}
                      href="/languageai/plans">See Pricing</Link>
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
                        <TableCell>{freePlan.translation_limit || 'Unlimited'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Translation Storage</TableCell>
                        <TableCell>{stats.translation_storage_count || 0}</TableCell>
                        <TableCell>{freePlan.storage_limit || 'Unlimited'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Checkbot</TableCell>
                        <TableCell>{stats.checkbot_count || 0}</TableCell>
                        <TableCell>{freePlan.checkbot_limit || 'Unlimited'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Checkbot Storage</TableCell>
                        <TableCell>{stats.checkbot_storage_count || 0}</TableCell>
                        <TableCell>{freePlan.storage_limit || 'Unlimited'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Transcription</TableCell>
                        <TableCell>{stats.transcription_count || 0}</TableCell>
                        <TableCell>{freePlan.speech_to_text_limit || 'Unlimited'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Transcription Storage</TableCell>
                        <TableCell>{stats.transcription_storage_count || 0}</TableCell>
                        <TableCell>{freePlan.storage_limit || 'Unlimited'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Text to Speech</TableCell>
                        <TableCell>{stats.tts_count || 0}</TableCell>
                        <TableCell>{freePlan.text_to_speech_limit || 'Unlimited'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Text to Speech Storage</TableCell>
                        <TableCell>{stats.tts_storage_count || 0}</TableCell>
                        <TableCell>{freePlan.storage_limit || 'Unlimited'}</TableCell>
                    </TableRow>
                </TableBody>
                <TableCaption>*History will show {freePlan.history_limit} latest history</TableCaption>
            </Table>
        </div>
    )
};

export default LanguageaiCurrentFreePlan;