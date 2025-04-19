import { Header } from "./_header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 flex flex-col h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
