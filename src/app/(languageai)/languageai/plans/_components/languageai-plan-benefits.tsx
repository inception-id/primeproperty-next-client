import {cn} from "@/lib/utils";
import {LuAudioLines, LuClock, LuDatabase, LuLanguages, LuSquareTerminal} from "react-icons/lu";
import {CgTranscript} from "react-icons/cg";
import {TLanguageaiSubscriptionPlan} from "@/lib/api/languageai-subscriptions/find-all-languageai-subscription-plans";

type LanguageaiPlanBenefitsProps = {
    plan: TLanguageaiSubscriptionPlan
}

const LanguageaiPlanBenefits = ({plan}: LanguageaiPlanBenefitsProps) => {
    return (

        <ul className="flex flex-col gap-2">
            <li className={cn("flex items-center gap-4", plan.category === 'text' && 'font-bold')}>
                <LuLanguages/>
                <span>
                {plan.translation_limit ? `${plan.translation_limit} translation per month` : "Unlimited translation"}
                </span>
            </li>
            <li className={cn("flex items-center gap-4", plan.category === 'text' && 'font-bold')}>
                <LuSquareTerminal/>
                <span>
                {plan.checkbot_limit ? `${plan.translation_limit} checkbot per month` : "Unlimited checkbot"}
                </span>
            </li>
            <li className={cn("flex items-center gap-4", plan.category === 'audio' && 'font-bold')}>
                <LuAudioLines/>
                <span>
                {plan.text_to_speech_limit ? `${plan.text_to_speech_limit} text to speech per month` : "Unlimited text to speech"}
                </span>
            </li>
            <li className={cn("flex items-center gap-4", plan.category === 'audio' && 'font-bold')}>
                <CgTranscript/>
                <span>
                {plan.speech_to_text_limit ? `${plan.speech_to_text_limit} speech to text per month` : "Unlimited speech to text"}
                </span>
            </li>
            <li className="flex items-center gap-4">
                <LuDatabase/>
                <span>
                {plan.storage_limit ? `${plan.storage_limit} storage rows` : "Unlimited storage record"}
                </span>
            </li>
            <li className="flex items-center gap-4">
                <LuClock />
                <span>
                {plan.history_limit? `${plan.history_limit} latest history` : "Unlimited history record"}
                </span>
            </li>
        </ul>
    )
};

export default LanguageaiPlanBenefits;