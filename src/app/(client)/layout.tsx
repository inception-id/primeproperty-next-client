import { Header } from "./_header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
};

export default ClientLayout;
