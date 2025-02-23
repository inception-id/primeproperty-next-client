import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LuAudioLines, LuLanguages, LuSquareTerminal } from "react-icons/lu";
import { CgTranscript } from "react-icons/cg";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Language Shared Storage | Collaborate your language works with friends and colleagues",
    description:
        "Keep your language data in one place, never lost your translation, transcription, or text to speech audio by sharing with your friends and colleagues.",
    keywords:
        "storage, audio storage, translation, transcription, text to speech",
};

const LanguageaiSharedStorage = () => {
    return (
        <section className="w-full h-screen overflow-hidden p-4 flex flex-col items-center justify-center lg:max-w-lg mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center">
                SHARED STORAGE
            </h1>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
                &quot;Knowledge has to be improved, challenged, and increased constantly, or it vanishes.&quot;
            </h2>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center italic mb-8">
                Peter Drucker
            </h3>

            <div className="grid grid-cols-2 gap-4 w-full">
                <Link
                    href="/languageai/shared/translate"
                    className={cn(buttonVariants({}), "w-full")}
                >
                    <LuLanguages />
                    Shared Translation
                </Link>
                <div
                    // href="/languageai/storage/checkbot"
                    className={cn(buttonVariants({}), "w-full")}
                >
                    <LuSquareTerminal />
                    In progress
                </div>
                <div
                    // href="/languageai/storage/text-to-speech"
                    className={cn(buttonVariants({}), "w-full")}
                >
                    <LuAudioLines />
                    In progress
                </div>
                <div
                    // href="/languageai/storage/speech-to-text"
                    className={cn(buttonVariants({}), "w-full")}
                >
                    <CgTranscript />
                    In progress
                </div>
            </div>
        </section>
    );
};

export default LanguageaiSharedStorage;
