import ExchangeHeader from "./_header";

type ExchangeLayoutProps = {
  children: React.ReactNode;
};

const ExchangeLayout = ({ children }: ExchangeLayoutProps) => {
  return (
    <div>
      <ExchangeHeader />
      {children}
    </div>
  );
};

export default ExchangeLayout;
