import Header from "@/app/(inception)/_components/Header";

type TInceptionBaseLayout = {
  children: React.ReactNode;
};

const InceptionBaseLayout = ({ children }: TInceptionBaseLayout) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default InceptionBaseLayout;
