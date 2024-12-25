import LanguageaiHeader from "@/app/(languageai)/_components/header";
import LanguageaiSidebar from "@/app/(languageai)/_components/sidebar";

type TLanguageaiLayout = {
  children: React.ReactNode;
};

const LanguageaiLayout = ({ children }: TLanguageaiLayout) => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <LanguageaiHeader />
      <LanguageaiSidebar />
      <main className="mt-10 lg:mt-0 w-full">{children}</main>
    </div>
  );
};

export default LanguageaiLayout;
