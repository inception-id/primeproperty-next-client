'use client'
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle} from "@/components/ui/dialog";
import {SlSpeedometer} from "react-icons/sl";
import {LuChevronRight, LuX} from "react-icons/lu";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {useLanguageaiSubscriptionStore} from "@/app/(languageai)/_lib/use-languageai-subscription-store";
import {useShallow} from "zustand/react/shallow";
import {useMemo} from "react";
import {ELanguageaSubscriptionLimit} from "@/lib/enums/languageai-subscription-limit";

const LanguageaiSubscriptionLimitDialog = () => {
    const {limitDialog, updateStore} = useLanguageaiSubscriptionStore(
        useShallow((state) => ({
            limitDialog: state.limitDialog,
            updateStore: state.updateStore,
        }))
    )

    const firstLine = useMemo(() => {
        switch (limitDialog) {
            case ELanguageaSubscriptionLimit.Storage:
                return 'You have exceeded your storage limit.';
            case ELanguageaSubscriptionLimit.Translation:
            case ELanguageaSubscriptionLimit.Checkbot:
                return `You have exceeded your ${limitDialog} monthly limit.`;
            case ELanguageaSubscriptionLimit.SpeechToText:
                return `You have exceeded your Speech to Text monthly limit.`;
            case ELanguageaSubscriptionLimit.TextToSpeech:
                return `You have exceeded your Text to Speech monthly limit.`;
            default:
                return `You have exceeded your subscription limit.`;
        }
    }, [limitDialog])

    return <Dialog open={limitDialog !== null}>
        <DialogContent className="max-w-sm" onOverlayClick={() => updateStore("limitDialog", null)}>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center font-bold gap-2">
                    <SlSpeedometer className="text-2xl"/>
                    <DialogTitle className="text-lg">Over Subscription Limit</DialogTitle>
                </div>
                <DialogClose onClick={() => updateStore("limitDialog", null)}>
                    <LuX/>
                </DialogClose>
            </div>

            <DialogDescription className="mb-4">
                {firstLine} Kindly check your limit, upgrade, or report if there was a mistake.
            </DialogDescription>

            <div className="flex justify-end">
                <Link href="/languageai/subscription" className={cn(buttonVariants({variant: "outline"}))}
                      onClick={() => updateStore("limitDialog", null)}>
                    Check limit <LuChevronRight/>
                </Link>
            </div>
        </DialogContent>
    </Dialog>
}

export default LanguageaiSubscriptionLimitDialog;