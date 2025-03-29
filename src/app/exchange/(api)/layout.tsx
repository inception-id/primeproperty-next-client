import { ExchangeApiHeader } from "./_header";

type ExchangeApiLayoutProps = {
  children: React.ReactNode;
};

const ExchangeApiLayout = ({ children }: ExchangeApiLayoutProps) => {
  return (
    <>
      <ExchangeApiHeader />
      <div className="container mx-auto">{children}</div>
    </>
  );
};

export default ExchangeApiLayout;
