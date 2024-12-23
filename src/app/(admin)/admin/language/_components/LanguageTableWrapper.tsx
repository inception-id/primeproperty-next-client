import {findAllLanguages} from "@/lib/api/languages/findAllLanguages";
import LanguageTable from "@/app/(admin)/admin/language/_components/LanguageTable";

const LanguageTableWrapper = async () => {
  const language = await findAllLanguages();
  if (!language.data || language.data.length === 0) {
    return <>No data</>;
  }
  return <LanguageTable data={language.data} />;
};

export default LanguageTableWrapper;
