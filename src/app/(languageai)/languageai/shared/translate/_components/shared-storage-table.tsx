import { findTranslationSharedStorage } from "@/lib/api/translation/find-translation-shared-storage";
import TranslateSharedStorageDataTable from "@/app/(languageai)/languageai/shared/translate/_components/shared-storage-data-table";

const TranslateSharedStorageTable = async () => {
  const translationStorage = await findTranslationSharedStorage();

  return <TranslateSharedStorageDataTable data={translationStorage.data} />;
};

export default TranslateSharedStorageTable;
