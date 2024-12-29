import TtsForm from "@/app/(languageai)/languageai/text-to-speech/_components/tts-form";
import TtsResult from "@/app/(languageai)/languageai/text-to-speech/_components/tts-result";

const TextToSpeech = () => {
    return (
        <section className="w-full h-screen overflow-hidden p-4">
            <TtsForm />
            <TtsResult />
        </section>
    )
}
export default TextToSpeech