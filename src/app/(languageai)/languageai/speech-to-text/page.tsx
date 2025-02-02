import TranscriptionForm from "@/app/(languageai)/languageai/speech-to-text/_components/transcription-form";
import TranscriptionResult from "@/app/(languageai)/languageai/speech-to-text/_components/transcription-result";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Speech to Text | Audio Transcription",
    description: "Process, visualize, and analyse any audio transcription, convert any speech to text.",
    keywords: "Transcription, Speech to Text, AI",
};

const SpeechToText = () => {
  return (
    <section className="w-full h-screen overflow-hidden p-4 flex flex-col lg:flex-row gap-4">
      <TranscriptionForm />
      <TranscriptionResult />
    </section>
  );
};
export default SpeechToText;
