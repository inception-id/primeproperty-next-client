import TableDataNotFound from "@/app/(languageai)/_components/table-data-not-found";
import { findTranslationStorage } from "@/lib/api/translation/find-translation-storage";
import TranslateStorageDataTable from "@/app/(languageai)/languageai/storage/translate/_components/translate-storage-data-table";

const TranslateStorageTable = async () => {
  const translationStorage = await findTranslationStorage();

  if (!translationStorage || translationStorage.data.length === 0) {
    return <TableDataNotFound text="No saved translation" />;
  }

  return <TranslateStorageDataTable data={translationStorage.data} />;
};

export default TranslateStorageTable;
