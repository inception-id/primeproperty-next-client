import TtsForm from "@/app/(languageai)/languageai/text-to-speech/_components/tts-form";
import TtsResult from "@/app/(languageai)/languageai/text-to-speech/_components/tts-result";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Text to Speech | Convert your text to real sound",
    description: "Process, visualize, and analyse your text and turn it into real audio for free.",
    keywords: "text to speech, text to voice, AI text to speech",
};

const TextToSpeech = () => {
  return (
    <section className="w-full h-screen overflow-hidden p-4">
      <TtsForm />
      <TtsResult />
    </section>
  );
};
export default TextToSpeech;
