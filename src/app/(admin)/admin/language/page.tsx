import AddLanguageDialog from "@/app/(admin)/admin/language/_components/AddLanguageDialog";
import LanguageTableWrapper from "@/app/(admin)/admin/language/_components/LanguageTableWrapper";

const LanguageAdmin = () => {
  return (
    <section className="p-4 w-full">
      <AddLanguageDialog />
      <LanguageTableWrapper />
    </section>
  );
};

export default LanguageAdmin;
