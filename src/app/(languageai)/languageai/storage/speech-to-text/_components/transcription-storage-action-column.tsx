import { Row } from "@tanstack/table-core";
import { TSpeechToTextStorage } from "@/lib/api/speech-to-text/createTranscriptionStorage";

type TranscriptionStorageActionColumnProps = {
  row: Row<TSpeechToTextStorage>;
};

const TranscriptionStorageActionColumn = ({
  row,
}: TranscriptionStorageActionColumnProps) => {
  return <div></div>;
};

export default TranscriptionStorageActionColumn;
