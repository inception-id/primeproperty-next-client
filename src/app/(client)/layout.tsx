import { Header } from "./_header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default ClientLayout;
