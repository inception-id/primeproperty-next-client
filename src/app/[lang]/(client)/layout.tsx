const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default ClientLayout;
