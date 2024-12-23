import AddLanguageDialog from "@/app/(admin)/admin/language/_components/AddLanguageDialog";
import LanguageTableWrapper from "@/app/(admin)/admin/language/_components/LanguageTableWrapper";
import UpdateLanguageDialog from "@/app/(admin)/admin/language/_components/UpdateLanguageDialog";

const LanguageAdmin = () => {
  return (
    <section className="p-4 w-full">
      <AddLanguageDialog />
      <UpdateLanguageDialog />
      <LanguageTableWrapper />
    </section>
  );
};

export default LanguageAdmin;
