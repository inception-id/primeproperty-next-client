import { Row } from "@tanstack/table-core";
import { TTranslationStorage } from "@/lib/api/translation/createTranslationStorage";

type TTranslateStorageActionColumnProps = {
  row: Row<TTranslationStorage>;
};

const TranslateStorageActionColumn = ({
  row,
}: TTranslateStorageActionColumnProps) => {
  return <div></div>;
};

export default TranslateStorageActionColumn;
